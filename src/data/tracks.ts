interface TrackData {
  src: string,
  name: string,
  desc: string,
  sound: string
}

const tracksData: Array<TrackData> = [
  {
    src: "lofi-girl-lofi",
    name: "Crescent Moon",
    desc: "Midnight Serenity",
    sound: "crescent-moon",
  },
  {
    src: "2",
    name: "Ghost Celestia",
    desc: "Ethereal Journey",
    sound: "ghostrifter-official-celestia",
  },
  {
    src: "cat-thinking-about-you",
    name: "Lost and Found",
    desc: "Rediscovered Memories",
    sound: "lost-and-found",
  },
  {
    src: "anime-lofi",
    name: "Cozy Sundays",
    desc: "Relaxed Melancholy Bliss",
    sound: "otjan-bird",
  },
  {
    src: "retrowave-synthwave",
    name: "Silent Wood",
    desc: "Enigmatic Forest Hush",
    sound: "silent-wood",
  },
];

export default tracksData;
