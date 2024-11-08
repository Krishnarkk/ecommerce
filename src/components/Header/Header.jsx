import React from "react";
import CrownSvg from "../../assets/CrownSvg.jsx";
import Cart from "../cart/Cart.jsx";
import "./header.scss";
import { Outlet, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/shop");
  };
  return (
  <>
    <div>
      <div className="header">
        <div className="logo-container">
          <CrownSvg onClick={()=>{navigate("/")}}/>
        </div>
        <div className="options">
          <div className="option" onClick={handleNavigation}>
            SHOP
          </div>
          <div className="option" onClick={()=>navigate("/signin")}>SIGN IN</div>
          <div className="option">CONTACT</div>
          <Cart />
        </div>
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Header;
