import React from "react";
import Intro from "./Intro";
import mathEnJeuJson from "../../assets/text/MathEnJeu.json";
import Section from "./Section";
import BasicList from "./BasicList";

const MathEnJeu: React.FC = () => {
  const content = mathEnJeuJson.content;
  const mandate = content.mandate;
  const familiarization = content.familiarization;
  const functionalSketch = content.functionalSketch;
  const artisticDirection = content.artisticDirection;
  const visualElementsCreation = content.visualElementsCreation;

  return (
    <div>
      <Intro introInfo={mathEnJeuJson.intro} />
      <div>
        <h2>{mandate.title}</h2>
        <p>{mandate.content}</p>
        <h3>{mandate.subtitle}</h3>
        <BasicList listElements={content.mandate.objectives} />
      </div>
      <div>
        <Section
          title={familiarization.section1.title}
          content={familiarization.section1.content}
          image={""}
        />
        <Section
          title={familiarization.section2.title}
          content={familiarization.section2.content}
          image={familiarization.section2.image}
        />
      </div>
      <div>
        <h2>{functionalSketch.title}</h2>
        <p>{functionalSketch.content1}</p>
        <BasicList listElements={functionalSketch.list} />
        <p>{functionalSketch.content2}</p>
        <img style={{ width: "100%" }} src={functionalSketch.image} alt="" />
      </div>
      <div>
        <h2>{artisticDirection.title}</h2>
        <p>{artisticDirection.section1.content1[0]}</p>
        <p>{artisticDirection.section1.content1[1]}</p>
        <p>{artisticDirection.section1.content2}</p>
        <Section
          title={artisticDirection.section2.title}
          content={artisticDirection.section2.content}
          image={""}
        />
        <Section
          title={content.artisticDirection.section3.title}
          content={content.artisticDirection.section3.content}
          image={""}
        />
      </div>
      <div>
        <h2>{visualElementsCreation.title}</h2>
        <p>{visualElementsCreation.content1}</p>
        <p>{visualElementsCreation.content2}</p>
        {visualElementsCreation.sections.map((section) => (
          <Section
            key={section.title}
            title={section.title}
            content={section.content}
            image={section.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MathEnJeu;
