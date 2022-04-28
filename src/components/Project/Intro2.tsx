import React from "react";
import ProjectIntro from "../../models/ProjectIntro";
import "./introStyles2.css";

interface Props {
  introInfo: ProjectIntro;
}

const Intro2: React.FC<Props> = ({ introInfo }) => {
  return (
    <div>
      <div className="company-container">
        <h2>{introInfo.mainTitle}</h2>
        <p>{introInfo.subtitle}</p>
      </div>
      <div className="intro-container">
        <p className="authors">{introInfo.authors}</p>
        <h3 className="project-title">{introInfo.projectTitle}</h3>
        <p className="project-description">{introInfo.overview}</p>
        <div className="project-details-container">
          <div>
            <p className="project-details--header">ROLE/TEAM</p>
            {introInfo.roles.map((r) => (
              <p>{r}</p>
            ))}
          </div>
          <div>
            <p className="project-details--header">TOOLS</p>
            {introInfo.tools.map((t) => (
              <p>{t}</p>
            ))}
          </div>
          <div>
            <p className="project-details--header">DURATION</p>
            <p>{introInfo.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro2;
