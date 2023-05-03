import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Customizable",
      text: "Allow traders to customize by defining the parameters and risk management systems",
    },
    {
      image: ChooseMeals,
      title: "Advanced Analytics",
      text: "Allows traders to track their performance, analyse their trades & optimize their trading",
    },
    {
      image: DeliveryMeals,
      title: "Backtesting",
      text: "Allows traders to test their trading strategies on historical data",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          The bot continuously monitors the markets for trading opportunities and executes trades based on custom strategies, while also providing real-time alerts and advanced analytics to help traders track their performance and optimize their returns.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
