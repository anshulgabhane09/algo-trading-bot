import React from "react";
import {Link} from 'react-scroll';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/stock2-modified.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Revolutionize Your Trading with Our AI-Powered Trading Bot
          </h1>
          <p className="primary-text">
            Maximize profits with our trading bot's increased accuracy,
            efficiency, real-time analysis, customizable strategies, and minimal
            time investment.
          </p>

          <Link
            to="login-container"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <button className="login-button">
              Login <FiArrowRight />{" "}
            </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
