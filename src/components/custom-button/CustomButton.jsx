import React from "react";
import "./CustomButton.scss";
const CustomButton = ({ children, ...otherProps }) => {
    console.log(otherProps)
  return <button {...otherProps}>{children}</button>;
};

export default CustomButton;
