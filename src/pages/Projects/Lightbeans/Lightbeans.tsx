import React from "react";
import lightbeansJson from "../../../assets/text/Lightbeans.json";
import Intro from "../../../components/Project/Intro";
import SmallSection from "../../../components/Project/SmallSection";
import "../projectStyles.css";

const Lightbeans: React.FC = () => {
  const content = lightbeansJson.content;
  const mandate = content.mandate;
  const priorityList = content.priorityList;
  const userFlow = content.userFlow;
  const inspiration = content.inspiration;
  const styleGuide = content.styleGuide;

  return (
    <div className="project-container">
      <Intro introInfo={lightbeansJson.intro} />
      <div>
        <h2>{mandate.title}</h2>
        <p>{mandate.content}</p>
      </div>
      <SmallSection
        title={priorityList.title}
        content={priorityList.content}
        image={priorityList.image}
      />
      <SmallSection
        title={userFlow.title}
        content={userFlow.content}
        image={userFlow.image}
      />
      <SmallSection
        title={inspiration.title}
        content={inspiration.content}
        image={inspiration.image}
      />
      <SmallSection
        title={styleGuide.title}
        content={styleGuide.content}
        image={styleGuide.image}
      />
    </div>
  );
};

export default Lightbeans;
