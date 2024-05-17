import React from "react";
import Effects from "../components/Effects.tsx";
import Tracks from "../components/Tracks.tsx";

const MainContent: React.FC = (): JSX.Element => {
  return (
    <>
      <Tracks />
      <Effects />
    </>
  );
};

export default MainContent;
