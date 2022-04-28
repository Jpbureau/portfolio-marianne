import React from "react";
import ProjectIntro from "../../models/ProjectIntro";
import BasicList from "./BasicList";
import "./introStyles.css";

interface Props {
  introInfo: ProjectIntro;
}

const Intro: React.FC<Props> = ({ introInfo }) => {
  return (
    <div>
      <div className="company-container">
        <p>{introInfo.duration}</p>
        <h1>{introInfo.mainTitle}</h1>
        <h3>{introInfo.subtitle}</h3>
      </div>
      <div className="project-details-container">
        <div>
          <p>Mon rôle</p>
          <BasicList listElements={introInfo.roles} />
        </div>
        <div>
          <p>Outils logiciels</p>
          <BasicList listElements={introInfo.roles} />
        </div>
        <div>
          <p>Équipe</p>
          <p>{introInfo.authors}</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
