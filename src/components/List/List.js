import React from "react";
import "./List.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const List = ({ item }) => {
  return (
    <div className="list">
      <div className="top">
        <div className="icon">
          <FavoriteBorderIcon />
        </div>
        <div className="image">
          <img src={item.img} alt="" />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <p>{item.title}</p>
          <span>${item.price}</span>
        </div>
        <div className="right">
          <div className="icon">
            <ShoppingBagOutlinedIcon sx={{ color: "#fff", opacity: ".7" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
