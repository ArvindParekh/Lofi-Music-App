interface EffectsData {
  type: string,
  name: string,
  sound: string,
  src: string
}

const effectsData: Array<EffectsData> = [
  {
    type: "effect",
    name: "Fire",
    sound: "fire",
    src: "fire",
  },
  {
    type: "effect",
    name: "Forest",
    sound: "forest",
    src: "forest",
  },
  {
    type: "effect",
    name: "Nightfall",
    sound: "nightFall",
    src: "nightfall",
  },
  {
    type: "effect",
    name: "Ocean Wave",
    sound: "ocean-wave",
    src: "ocean_wave",
  },
  {
    type: "effect",
    name: "Rain Thunder",
    sound: "rain",
    src: "rainthunder",
  },
  {
    type: "effect",
    name: "Urban",
    sound: "urban",
    src: "urban",
  },
];

export default effectsData;
