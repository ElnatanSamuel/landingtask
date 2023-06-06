import React, { useState } from "react";
import "./Navbar.scss";
import Hamburger from "hamburger-react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="left">
          <div className="hamburger">
            <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="logo">LOGO</div>
        </div>
        <div className="center">
          <div className="navItems">About</div>
          <div className="navItems">Products</div>
          <div className="navItems">Features</div>
          <div className="navItems">Contacts</div>
        </div>
        <div className="right">
          <div className="icons">
            <div className="icon">
              <SearchIcon sx={{ fontSize: "22px" }} />
            </div>
            <div className="icon">
              <ShoppingBagOutlinedIcon sx={{ fontSize: "22px" }} />
            </div>
          </div>
          <div className="line"></div>
          <div className="action">
            <span>BUY NOW</span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="hammenu">
          <div className="navItems">About</div>
          <div className="navItems">Products</div>
          <div className="navItems">Features</div>
          <div className="navItems">Contacts</div>
        </div>
      )}
    </>
  );
};

export default Navbar;
