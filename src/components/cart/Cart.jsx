import React, { useState } from "react";
import ShoppingBag from "../../assets/ShoppingBagSvg";
import "./cart.scss";
import CartDropDown from "../cartDropDown/CartDropDown";

const Cart = () => {
  const [hidden, setHidden] = useState(false);
//   const [users, setUsers] = useState([]);
   const handleDropDown=()=>{
    setHidden(!hidden)
   }
  return (
    <div className="cart-icon" onClick={handleDropDown}>
      <ShoppingBag className="shopping-icon" />
      {hidden ? <CartDropDown/> : null}
    </div>
  );
};

export default Cart;
