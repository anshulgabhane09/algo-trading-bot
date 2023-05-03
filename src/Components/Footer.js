import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h1 className="footer-name">Algo TradeX</h1>
          {/* <img src="..\Assets\logo11.png"></img> */}
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>0101010101</span>
          <span>contact@algotradx.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          {/* <br></br> */}
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
