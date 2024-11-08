import React from "react";
import SignInComponent from "../../components/sign-in/SignInComponent";
import SignUp from "../sign-up/SignUp";
import "./AuthenticationContainer.scss"

const AuthenticationContainer = () => {
  return (
    <div className="authentication-container">
      <SignInComponent />
      <SignUp />
    </div>
  );
};

export default AuthenticationContainer;
