/* eslint-disable react/prop-types */


//I keep commenting out all the code that I've previously used, but don't need it anymore, because I've solved the same thing using a more efficient version, or it's simply not needed anymore. I keep it because I'm a nostalgic person and cannot let go of the past easily, and also to know how I did things before.

// Functionalities needed:
// - Play only a single track at a time
// - If a track is playing and user clicks on another track, stop the current track and play the new track
// - 

// import { useState, useEffect } from "react";


const TrackCard = (props) => {

    /* const [border, setBorder] = useState(false);

    function handleClick() {
        console.log("hello");
        setBorder((prev) => !prev);
    }
    */

    // const [audio] = useState(new Audio(`/src/assets/sound/track/${props.sound}.mp3`))
    // const [isPlaying, setIsPlaying] = useState(false);
    // const ref = useRef(props.key);




    // const togglePlay = () => {
    //     if(!isPlaying){
    //         audio.play();
    //         setIsPlaying(true);
    //     }
    //     else{
    //         audio.pause();
    //         audio.currentTime = 0;
    //         setIsPlaying(false);
    //     }
    // }

    // // Cleanup function when component unmounts
    // useEffect(() => {
    //     return () => {
    //         audio.pause(); // Pause the audio when the component unmounts
    //     };
    // }, [audio]);


    
    return (
        <>
            <div className="flex flex-col justify-center">
                {/* <div className="overflow-hidden rounded-md cursor-pointer" onClick={togglePlay}> */}
                <div
                    className={`overflow-hidden rounded-md min-w-max cursor-pointer`/*props.trackPlaying==props.id && props.playingStatus  ? 'border-4 border-gray-800' : 'border border-transparent'*/}
                    onClick={(event) => {
                        props.onClick(event);
                        // handleClick();
                    }
                }>
                    <img
                        src={`/assets/background/${props.src}.gif`}
                        height={330}
                        width={250}
                        alt="gif1"
                        className="object-cover aspect-[3/4] hover:scale-105 duration-300"
                        data-audio-src={props.sound}
                        data-track-id={props.id}
                    />
                </div>
                {/* <span className="font-medium text-base leading-none mt-1.5">{props.name}</span>
                <span className="font-light text-sm text-gray-400 leading-tight">My name is arvind</span> */}
                <div className="space-y-1 text-sm mt-2.5 transition-all">
                    <h3 className={`font-medium leading-none ${props.trackPlaying == props.id && props.playingStatus ? 'text-green-400 underline' : ''} transition-all`}>{props.name}</h3>
                    <p className="text-xs text-muted-foreground">{props.desc}</p>
                </div>
            </div>
        </>
    )
}

export default TrackCard;