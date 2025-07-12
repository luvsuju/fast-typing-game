import "../StyleSheets/TypingHome.css";
import React from "react";
import { Link } from "react-router-dom";

const TypingHome = () => {
  return (
    <>
      <div className="home-navbar-container">
        <div className="home-navbar-left-container">
          <Link to="/">Typing Test</Link>
        </div>
        <div className="home-navbar-right-container">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/Abouts">About</Link></p>
          <p><Link to="/ContactUs">Contact Us</Link></p>
        </div>
      </div>
    </>
  );
};

export default TypingHome;
