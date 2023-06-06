import React from "react";
import "./Hero.scss";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const Hero = () => {
  return (
    <div className="hero">
      <div className="top">
        <h1>Smart technology in your home</h1>
        <p>
          Create a space where you'll love to work with an incredble-sounding
          speaker for music and more that will help you relax, stay motivated
          and focus
        </p>
        <div className="buttons">
          <span>ORDER</span>
          <div className="btnicon">
            <KeyboardArrowRightOutlinedIcon sx={{ color: "#000" }} />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="boxshadow"></div>
        <div className="image">
          <img src="/img/white2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
