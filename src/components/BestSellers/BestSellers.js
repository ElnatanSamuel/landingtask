import React from "react";
import "./BestSellers.scss";
import List from "../List/List";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const BestSellers = () => {
  const data = [
    {
      id: 1,
      title: "Echo dot(4th gen)",
      img: "/img/echo4th.png",
      price: 100,
    },
    { id: 2, title: "Echo dot(3rd gen)", img: "/img/echo3rd.png", price: 100 },
    {
      id: 3,
      title: "Amazon echo",
      img: "/img/echoamaz.png",
      price: 100,
    },
    {
      id: 4,
      title: "Apple homepod 3",
      img: "/img/homepod2.png",
      price: 200,
    },
  ];

  return (
    <div className="bestsellers">
      <h1>Our best sellers</h1>
      <div className="items">
        {data?.map((item) => (
          <List item={item} key={item.id} />
        ))}
      </div>
      <div className="more">
        <span>VIEW ALL PRODUCTS</span>
        <ArrowForwardOutlinedIcon />
      </div>
    </div>
  );
};

export default BestSellers;
