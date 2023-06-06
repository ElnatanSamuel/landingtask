import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="item">
          <div className="top">
            <span>60K</span>
          </div>
          <div className="bottom">
            <span>Happy clients</span>
          </div>
        </div>
        <div className="item">
          <div className="top">
            <span>3K</span>
          </div>
          <div className="bottom">
            <span>Premium products</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="gradtext">
          <span className="line"></span>
          <h1>About us</h1>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          error sequi, provident beatae eum exercitationem earum mollitia maxime
          optio tempore!
        </p>
      </div>
    </div>
  );
};

export default About;
