/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import ContinuousSlider from "./sliderComponent";

const MusicCard = (props) => {

    const [isSelected, setIsSelected] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio(`/assets/sound/${props.type}/${props.sound}.mp3`));

    const toggleSound = () => {
        if (props.type === "effect") {
            //if its an effect
            if (isPlaying) {
                audio.pause();
                audio.currentTime = 0;
                setIsPlaying(false);
                setIsSelected(false);
            } else {
                audio.play();
                setIsPlaying(true);
                setIsSelected(true);
            }
        }
        else {
            //if its a track
            console.log("Not hello");
        }
    };


    // Set up an event listener for when the audio can be played
    audio.oncanplaythrough = () => {
        // Do something if needed when the audio is ready
        console.log('Audio is ready!');
    };

    // Cleanup function when component unmounts
    useEffect(() => {
        return () => {
            audio.pause(); // Pause the audio when the component unmounts
        };
    }, [audio]);

    return (
        <>
            <div className="flex flex-col">
                <div className={`cursor-pointer relative rounded-xl flex items-center justify-center transition-all duration-100 overflow-hidden min-w-max ${isSelected ? `border-4 border-green-500` : ``}`} onClick={toggleSound}>
                    {/* {props.name} */}
                    <div className="overflow-hidden rounded-md">
                        <img
                            src={`/assets/background/${props.src}.jpg`}
                            width={180}
                            height={330}
                            className="object-cover aspect-square hover:scale-105 duration-300"
                        />
                    </div>
                    <div className={`absolute px-5 bg-slate-100 bg-opacity-50 text-black rounded-3xl ${isSelected ? `bg-green-500 bg-opacity-100 text-white` : ``}`}>
                        {props.name}
                    </div>
                </div>
                <ContinuousSlider />
            </div>
        </>
    )
}

export default MusicCard;