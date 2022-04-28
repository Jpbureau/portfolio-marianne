import React from "react";
import "./aboutStyles.css";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">à propos de moi</h2>
      <h3 className="about-subtitle">Allo, je m’appelle Marianne !</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
        rhoncus sem, a cursus neque. Sed sodales malesuada risus, non elementum
        mauris ultricies et. Nulla vestibulum, urna et porta porta, lacus metus
        convallis odio, sed rutrum arcu justo at erat. Nullam venenatis, dui a
        dictum imperdiet, leo ligula luctus massa, et tristique augue leo sit
        amet felis. In pretium augue vitae pretium sollicitudin. Quisque nulla
        nulla, dictum ut nisi nec, auctor tristique erat. Nulla in nibh sodales,
        sagittis lectus sodales, egestas dui. Vivamus commodo a mauris vitae
        ultricies.
      </p>
      <div className="download-container">
        <a href="">
          <HiOutlineDocumentDownload size={70} />
          <span className="link-text download-text">Télécharger mon CV</span>
        </a>
      </div>
      <p>
        N’hésitez pas à me contacter par{" "}
        <a className="link-text" href="mailto:marianne.bolduc9@gmail.com">
          courriel
        </a>{" "}
        ou sur{" "}
        <a
          className="link-text"
          href="https://www.linkedin.com/in/marianne-bolduc-1b419a171/"
        >
          Linkedin
        </a>
      </p>
    </div>
  );
};

export default About;
