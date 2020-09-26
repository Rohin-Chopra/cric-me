import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-primary w-100" id="main-footer">
      <FontAwesomeIcon icon={faGlobe} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faFacebookF} />
    </div>
  );
};
export default Footer;
