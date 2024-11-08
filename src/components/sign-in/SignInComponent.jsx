import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import axios from "axios";
import "./sign-in.scss";
const SignInComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:3000/signin", {
        email,
        password,
      });
      alert(resp.data.message);
    } catch (err) {
      console.error(err);
      alert("check password and email");
    }
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email & password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Email"
        />
        <FormInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Enter your password"
        />
        <CustomButton type="submit" className="custom-button">
          Sign In
        </CustomButton>
      </form>
    </div>
  );
};

export default SignInComponent;
