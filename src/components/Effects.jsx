//card component for effects

import MusicCard from "@/components/EffectCard";
import effectsData from "../data/effects";

/**
 * Renders the Effects component.
 * @returns {JSX.Element} The rendered Effects component.
 */
const Effects = () => {
  return (
    <div className="text-center md:lg:text-left">
      <h1 className="text-gray-400 font-medium text-xl bg-slate-800 bg-opacity-50 rounded-full inline-block px-5 py-2 my-5">
        Effects
      </h1>
      <div className="flex items-center gap-5 lg:justify-between overflow-x-auto p-1">
        {effectsData.map((effect, index) => {
          return (
            <MusicCard
              key={index}
              type={effect.type}
              name={effect.name}
              sound={effect.sound}
              src={effect.src}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Effects;
