import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/stock1-modified.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Trading should be accessible to everyone.
        </h1>
        <p className="primary-text">
          That's why we've designed our software to be user-friendly and intuitive, even for those who have little or no experience in trading. Our team of experienced developers and traders have worked tirelessly to create a platform that is reliable, efficient, and easy to use.
        </p>
        <div className="about-buttons-container">
          <button className="login-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
