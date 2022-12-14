import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://github.com/HarshGadage16" target="__blank">
          Harsh Gadage
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.instagram.com/harsh._.1.6/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="linkedin.com/in/harsh-gadage/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/HarshGadage16" target="__blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
