import React from "react";
import eyeDesignerJson from "../../../assets/text/EyeDesigner.json";
import Intro from "../../../components/Project/Intro";
import SmallSection from "../../../components/Project/SmallSection";
import "../projectStyles.css";

const EyeDesigner: React.FC = () => {
  const content = eyeDesignerJson.content;
  const mandate = content.mandate;
  const priorityList = content.priorityList;
  const userFlow = content.userFlow;
  const inspiration = content.inspiration;
  const styleGuide = content.styleGuide;

  return (
    <div className="project-container">
      <Intro introInfo={eyeDesignerJson.intro} />
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
      <div className="project-final-section">
        <h2>{eyeDesignerJson.conclusion.title}</h2>
        <p>{eyeDesignerJson.conclusion.content}</p>
      </div>
    </div>
  );
};

export default EyeDesigner;
