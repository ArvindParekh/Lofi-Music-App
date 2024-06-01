//Custom useAudioPlayer hook

import { useState, useEffect, useRef } from "react";

/**
 * Custom hook for managing audio player functionality.
 *
 * @returns {Object} An object containing the following properties:
 *   - isPlaying: A boolean indicating whether the audio is currently playing.
 *   - handleClick: A function to handle click events on audio elements.
 *   - trackIdPlaying: A reference to the currently playing track ID.
 */

function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio());
  const audioRefs = useRef({});
  const trackIdPlaying = useRef(null);
  
  const handleClick = (event) => {
    const audioSrc = event.target.getAttribute("data-audio-src");
    const trackId = event.target.getAttribute("data-track-id");
    const isTrack = event.target.getAttribute("data-is-track");
    const type = event.target.getAttribute("data-type");

    if (isTrack) {
      handleTrackPlayback(trackId, audioSrc);
    } else {
      handleNonTrackPlayback(trackId, type, audioSrc);
    }
  };

  const handleTrackPlayback = (trackId, audioSrc) => {
    if (trackId == trackIdPlaying.current) {
      toggleAudioPlayback(audio);
    } else {
      if (isPlaying) {
        toggleAudioPlayback(audio);
      }
      setAudio(new Audio(`/assets/sound/track/${audioSrc}.mp3`));
      trackIdPlaying.current = trackId;
    }
  };

  const handleNonTrackPlayback = (trackId, type, audioSrc) => {
    if (audioRefs.current[trackId]) {
      toggleAudioPlayback(audioRefs.current[trackId]);
    } else {
      const newAudio = new Audio(`/assets/sound/${type}/${audioSrc}.mp3`);
      audioRefs.current[trackId] = newAudio;
      playAudio(newAudio)
        .then(() => {
          setIsPlaying(true);
          trackIdPlaying.current = trackId;
        })
        .catch((error) => console.error("Error playing audio:", error));
    }
  };

  const toggleAudioPlayback = (audio) => {
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const playAudio = (audio) => {
    // Handle potential errors during audio creation
    if (!audio) {
      console.error("Error creating audio object");
      return Promise.reject(new Error("Failed to create audio object"));
    }
    return audio.play();
  };


  // Cleanup function when component unmounts
  useEffect(() => {
    if (audio != null && isPlaying === true) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    } else if (audio != null && isPlaying === false) {
      audio.loop = true;
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Error playing media: ", error);
          });
      } else {
        console.log("No audio selected");
      }
    }, [audio]);  
  
  return { isPlaying, handleClick, trackIdPlaying, audioRefs };
}


export default useAudioPlayer;
