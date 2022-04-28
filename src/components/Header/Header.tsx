import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./headerStyles.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <header
      className={scrolled ? "app-header app-header-shadow" : "app-header"}
    >
      <NavLink to={"/"} className="nav-item-left heavy-weight-font">
        <span className="bold-text">marianne bolduc</span>
      </NavLink>
      <NavLink to={"/about"} className="nav-item-right heavy-weight-font">
        <span className="bold-text">à propos de moi</span>
      </NavLink>
    </header>
  );
};

export default Header;
