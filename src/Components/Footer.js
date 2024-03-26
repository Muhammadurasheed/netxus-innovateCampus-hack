import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="netxus_logo" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <a href="https://www.linkedin.com/company/netxus/" target="_blank" rel="noreferrer noopener"><SiLinkedin /></a>
          <a href="https://youtu.be/4JGMg_c39us?si=9Djf0hoBkpRfVJZO" target="_blank" rel="noreferrer noopener"><BsYoutube /></a>
          
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Achievements</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns" height="15">
          <a href="https://www.linkedin.com/company/netxus/" target="_blank" rel="noreferrer noopener"><span>LinkedIn</span></a>
          <span>University of Ibadan</span>
          <span>Ibadan, Oyo State</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
