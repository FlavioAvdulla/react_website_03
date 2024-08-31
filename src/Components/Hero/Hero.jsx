import React from "react";
import "./Hero.css";
import arrow_right from "../../assets/arrow_right.svg";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer.
        </p>
        <button className="btn">
          <a href="#">EXPLORE MORE</a> <img src={arrow_right} alt="arrow Right" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
