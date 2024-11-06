import React from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./sign-in.scss"
const SignInComponent = () => {
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email & password</span>
      <form >
        <FormInput type="email" name="email" placeholder="Email" />
        <FormInput type="password" name="password" placeholder="Enter your password" />
        <CustomButton type="submit" className="sign-btn">Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignInComponent;
