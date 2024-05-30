//Custom useAudioPlayer hook

import React, { useState, useEffect, useRef } from "react";

/**
 * Custom hook for managing audio player functionality.
 *
 * @returns {Object} An object containing the following properties:
 *   - isPlaying: A boolean indicating whether the audio is currently playing.
 *   - handleClick: A function to handle click events on audio elements.
 *   - trackIdPlaying: A reference to the currently playing track ID.
 */
function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement>(new Audio());
  const trackIdPlaying = useRef<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLAudioElement, MouseEvent>) => {
    const target = event.target as HTMLAudioElement;
    const audioSrc = target.getAttribute("data-audio-src");
    const trackId = target.getAttribute("data-track-id");

    if (trackId == trackIdPlaying.current) {
      //same track clicked by the user, so pause the song; assume song is already playing
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      trackIdPlaying.current = null;
    } else {
      //if audio is already playing, stop it, and play the new audio
      if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
        setAudio(new Audio(`/assets/sound/track/${audioSrc}.mp3`));
        trackIdPlaying.current = trackId;
      }
      //else, directly play the new audio
      else {
        setAudio(new Audio(`/assets/sound/track/${audioSrc}.mp3`));
        trackIdPlaying.current = trackId;
      }
    }
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
        .catch((error: Error) => {
          console.log("Error playing media: ", error);
        });
    } else {
      console.log("No audio selected");
    }
  }, [audio]);

  return { isPlaying, handleClick, trackIdPlaying };
}

export default useAudioPlayer;
