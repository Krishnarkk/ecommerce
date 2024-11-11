import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../components/form-input/FormInput";
import { setError, updateFormData } from "../../Features/Signup/signup-slice";
const SignUp = () => {
  //dispatch actions
  const dispatch = useDispatch();
  //selecting data from store
  const formData = useSelector((state) => state.signup.formData);
  const errors = useSelector((state) => state.signup.errors);
  const status = useSelector((state) => state.signup.status);
  const errorMessage = useSelector((state) => state.signup.errorMessage);

  //Event change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  //validating input fields
  const validateForm = () => {
    let errors = {};
    if (!formData.displayName.trim())
      errors.displayName = "Display name is required";
    if (!formData.email.trim()) errors.email = "Email address is required";
    if (!formData.password.trim()) errors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Password does not match !!";
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email))
      errors.email = "Please enter a valid email address";
    return errors;
  };

  //submitting to validation errors and formData to redux
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      dispatch(setError(validationErrors));
    } else {
      dispatch(updateFormData(formData));
    }
  };
  return (
    <div className="signup-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Display name"
          type="text"
          placeholder="Display name"
          required
          value={formData.displayName}
          onChange={handleChange}
        />
        {errors.displayName && (
          <p style={{ color: "red" }}>{errors.displayName}</p>
        )}
        <FormInput
          label="Email"
          type="email"
          placeholder="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <FormInput
          label="Password"
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <FormInput
          label="Confirm Password"
          type="password"
          placeholder="confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <CustomButton className="custom-button" type="submit">
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
