import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot">
        <div className="left">
          <h1 className="logo">LOGO</h1>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="center">
          <div className="items">
            <h2>COMPANY</h2>
            <div className="item">About</div>
            <div className="item">Product</div>
            <div className="item">Feature</div>
          </div>
          <div className="items">
            <h2>INFO</h2>
            <div className="item">Blogs</div>
            <div className="item">Contact</div>
            <div className="item">FAQ</div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            Curious about new developments and updates? Signup to our
            newsletter!
          </div>
          <div className="bottom">
            <input type="text" placeholder="Email" />
            <button>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
