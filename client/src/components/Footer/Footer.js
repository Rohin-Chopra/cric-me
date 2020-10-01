import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-primary w-100" id="main-footer">
      <a href="http://rohinchopra.com">
        <FontAwesomeIcon icon={faGlobe} />
      </a>
      <a href="https://github.com/Rohin1212">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};
export default Footer;
