/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import ContinuousSlider from "./sliderComponent";

/**
 * Represents a Music Card component.
 * @component
 * @param {Object} props - The props for the Music Card component.
 * @param {string} props.type - The type of the music card (e.g., "effect").
 * @param {string} props.name - The name of the music card.
 * @param {string} props.sound - The sound file name for the music card.
 * @param {string} props.src - The image file name for the music card background.
 * @param {number} props.id - The unique identifier of the track.
 * @param {number} props.trackPlaying - The ID of the currently playing track.
 * @param {Audio} props.audio - The reference to element audio
 * @param {boolean} props.playingStatus - The playing status of the track.
 * @param {Function} props.onClick - The function to handle the click event on the track card.
 * @returns {JSX.Element} The rendered Music Card component.
 */
const MusicCard = (props) => {
  const [volume, setVolume] = useState(30);
  const [isSelected, setIsSelected] = useState(props.id === props.trackPlaying);

  useEffect(() => {
    setIsSelected(props.id === props.trackPlaying);
  }, [props.trackPlaying, props.id]);

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    props.audio.current[props.id].volume = volume / 100;
    console.log(volume / 100);
  };

  return (
    <div className="flex flex-col items-center h-56">
      <div
        className={`cursor-pointer relative rounded-xl flex items-center justify-center transition-all duration-100 overflow-hidden min-w-max ${
          isSelected ? "shadow-[0_0_0_4px] shadow-green-500" : ""
        }`}
        onClick={(event) => {
          setIsSelected(!isSelected);
          // Call onClick handler with relevant data
          props.onClick(event);
        }}
      >
        <div className="overflow-hidden rounded-md">
          <img
            src={`/assets/background/${props.src}.jpg`}
            width={180}
            height={330}
            className="object-cover aspect-square hover:scale-105 duration-300"
            data-audio-src={props.sound}
            data-track-id={props.id}
            data-type={props.type}
          />
        </div>
        <div
          className={`pointer-events-none absolute px-5 bg-slate-100 bg-opacity-50 text-black rounded-3xl ${
            isSelected ? "bg-green-600 bg-opacity-100 text-white" : ""
          }`}
        >
          {props.name}
        </div>
      </div>
      <ContinuousSlider
        className={`${isSelected ? "" : "hidden"}`}
        value={volume}
        onVolumeChange={handleVolumeChange}
      />
    </div>
  );
};


export default MusicCard;