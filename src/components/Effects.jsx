//card component for effects

import MusicCard from "@/components/MusicCard"
import effectsData from "../data/effects";

const Effects = () => {
    return (
        <div>
            <h1 className="text-gray-400 font-medium text-xl bg-slate-800 bg-opacity-50 rounded-full inline-block px-5 py-2 my-5">Effects</h1>
            <div className="flex flex-wrap items-center justify-between">

                {effectsData.map((effect, index)=>{
                    return (
                        <MusicCard key={index} type={effect.type} name={effect.name} sound={effect.sound} src={effect.src} />
                    )
                })}


                {/* This code is now replaced by a more efficient version */}
                {/* <MusicCard type="effect" name="Fire" sound="fire" src="fire" />
                <MusicCard type="effect" name="Forest" sound="forest" src="forest" />
                <MusicCard type="effect" name="Nightfall" sound="nightFall" src="nightfall" />
                <MusicCard type="effect" name="Ocean Wave" sound="ocean-wave" src="ocean_wave" />
                <MusicCard type="effect" name="Rain Thunder" sound="rain" src="rainthunder" />
                <MusicCard type="effect" name="Urban" sound="urban" src="urban" /> */}
            </div>
        </div>
    )
}

export default Effects;