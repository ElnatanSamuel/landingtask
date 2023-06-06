import React from "react";
import "./Discount.scss";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const Discount = () => {
  return (
    <div className="discount">
      <h1>
        GET A DISCOUNT<span className="grad"> OF UPTO 25%</span> BY ORDERING
        SMART SPEAKER RIGHT NOW
      </h1>
      <div className="buttons">
        <span className="goto">GO TO SHOP</span>
        <div className="btnicon">
          <KeyboardArrowRightOutlinedIcon sx={{ color: "#000" }} />
        </div>
      </div>
      <div className="boxshadow"></div>
    </div>
  );
};

export default Discount;
