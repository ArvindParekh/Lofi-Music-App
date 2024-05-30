/* eslint-disable react/prop-types */

/* Import Statements */
import React, { useState, useEffect } from 'react';

/**
 * TrackCard component represents a card displaying a track in the lofi-music-app.
 * It allows users to play tracks and ambient effects.
 *
 * @component
 * @param {Object} props - The properties passed to the TrackCard component.
 * @param {string} props.name - The name of the track.
 * @param {string} props.desc - The description of the track.
 * @param {string} props.src - The source of the track's background image.
 * @param {string} props.sound - The source of the track's audio.
 * @param {number} props.id - The unique identifier of the track.
 * @param {number} props.trackPlaying - The ID of the currently playing track.
 * @param {boolean} props.playingStatus - The playing status of the track.
 * @param {Function} props.onClick - The function to handle the click event on the track card.
 * @returns {JSX.Element} The rendered TrackCard component.
 */


/* Constants */
const SMALL_SCREEN_WIDTH = 600

const TrackCard = (props) => {
  /* Identify small screens */
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < SMALL_SCREEN_WIDTH);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < SMALL_SCREEN_WIDTH);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center">
        <div
          className={
            `overflow-hidden rounded-md min-w-max cursor-pointer` /*props.trackPlaying==props.id && props.playingStatus  ? 'border-4 border-gray-800' : 'border border-transparent'*/
          }
          onClick={(event) => {
            props.onClick(event);
          }}
        >
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
        <div className="space-y-1 text-sm mt-2.5 transition-all">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
          <h3
              className={`font-medium leading-none ${
                props.trackPlaying == props.id && props.playingStatus
                  ? "text-green-400 underline"
                  : ""
                } transition-all text-center sm:text-left`}
                style={{
                  // Apply marginLeft: 30px; on screens smaller than sm 
                  marginLeft:  isSmallScreen  ? '30px' : '0px',
                  transition: 'margin-left 0.2s ease', // Apply transition to margin-left
                }}
            >
              {props.name}
            </h3>
            <img
              src="/assets/music-playing-animation.gif"
              alt="Music Playing animation"
              width={20}
              height={10}
              className={`${
                props.trackPlaying == props.id && props.playingStatus
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
                } transition-all duration-200 invert accent-green-900`}
            />
          </div>
          <p className="text-xs text-muted-foreground">{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default TrackCard;
