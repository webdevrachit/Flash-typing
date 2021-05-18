import React from "react";
import "./Nav.css";
import logo from "./../../assets/logo.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="flash-logo" src={logo} alt="logo" />
        <p className="flash-logo-text">FlashType</p>
      </div>
      <div className="nav-right">
        <a
          target="_blank"
          className="nav-aam-link"
          href="https://github.com/webdevrachit"
          rel="noreferrer"
        >
          RacHit
        </a>
      </div>
    </div>
  );
};

export default Nav;
