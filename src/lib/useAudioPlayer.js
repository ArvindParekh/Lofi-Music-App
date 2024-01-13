//Custom useAudioPlayer hook 

import { useState, useEffect, useRef } from "react";

function useAudioPlayer(){
    const [isPlaying, setIsPlaying] = useState(false);
    // const [audio, setAudio] = useState(new Audio(`/src/assets/sound/track/crescent-moon.mp3`))
    const [audio, setAudio] = useState(new Audio())
    const trackIdPlaying = useRef(null);
    
    const handleClick = (event)=>{
        const audioSrc = event.target.getAttribute('data-audio-src');
        const trackId = event.target.getAttribute('data-track-id');
        // console.log(trackId);

        if(trackId == trackIdPlaying.current){
            //same track clicked by the user, so pause the song; assume song is already playing
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
            trackIdPlaying.current = null;
        }

        else{
            //if audio is already playing, stop it, and play the new audio
            if(isPlaying){
                audio.pause();
                audio.currentTime = 0;
                setIsPlaying(false);
                setAudio(new Audio(`/assets/sound/track/${audioSrc}.mp3`));
                trackIdPlaying.current = trackId;
            }
            //else, directly play the new audio
            else{
                setAudio(new Audio(`/assets/sound/track/${audioSrc}.mp3`));
                trackIdPlaying.current = trackId;
            }
        }

    }


    // Cleanup function when component unmounts
    useEffect(() => {
        if(audio!=null && isPlaying===true){
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
        }
        else if(audio!=null && isPlaying===false){
            audio.play();
            setIsPlaying(true);
        }

        else{
            console.log("No audio selected");
        }
    }, [audio]);

    return {isPlaying, handleClick, trackIdPlaying};
}

export default useAudioPlayer;
