import React from "react";
import Intro from "./Intro";
import introInfo from "../../assets/text/Lightbeans.json";

export const Lightbeans: React.FC = () => {
  return (
    <div>
      <Intro introInfo={introInfo.intro} />
    </div>
  );
};
