import TrackCard from "@/components/TrackCard"
import tracksData from "../data/tracks"
import useAudioPlayer from "../lib/useAudioPlayer";

/**
 * Renders the Tracks component.
 * 
 * @returns {JSX.Element} The rendered Tracks component.
 */
const Tracks = () => {

    /*
        Initially, all the code that is now inside useAudioPlayer was here. 
        I shifted it to it's own module and created a custom useAudioPlayer hook as a result to increase code readability.
    */

    const { isPlaying, handleClick, trackIdPlaying } = useAudioPlayer();

    return (
        <>
            <div id="track-section" className="text-center md:lg:text-left">
                <h1 className="text-gray-400 font-medium text-xl bg-slate-800 bg-opacity-50 rounded-full inline-block px-5 py-2 ">Tracks</h1>
                <div id="trackCards" className="flex items-center gap-5 lg:justify-between overflow-x-auto">

                    {tracksData.map((track, index) => {
                        return (
                            <TrackCard key={index} src={track.src} name={track.name} desc={track.desc} sound={track.sound} onClick={handleClick} id={index} playingStatus={isPlaying} trackPlaying={trackIdPlaying.current} />
                        )
                    })}

                    {/* The following code has now been replaced by a more efficient version */}
                    {/* <TrackCard src={1} name="Crescent Moon" desc="Midnight Serenity" sound="crescent-moon"/>
                    <TrackCard src={2} name="Ghost Celestia" desc="Ethereal Journey" sound="ghostrifter-official-celestia" />
                    <TrackCard src={3} name="Lost and Found" desc="Rediscovered Memories" sound="lost-and-found" />
                    <TrackCard src={4} name="Cozy Sundays" desc="Relaxed Melancholy Bliss" sound="otjan-bird" />
                    <TrackCard src={5} name="Silent Wood" desc="Enigmatic Forest Hush" sound="silent-wood" /> */}
                </div>
            </div>
        </>
    )
}

export default Tracks