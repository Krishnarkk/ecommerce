import { useEffect, useState } from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import "./sign-up.scss";
import axios from "axios";
import { useForm, useFormState } from "react-hook-form";
const SignUpInHouseState = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target, name, value);
  };
  //   const [displayName, setDisplayName] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [isSubmit, setIsSubmit] = useState(false);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { errors } = useFormState({ control });
  //   useEffect(() => {
  //     const newErrors = {};
  //     if (!email) {
  //       newErrors.email = "Email is required";
  //     } else if (!/\S+@\S+\.\S+/.test(email)) {
  //       newErrors.email = "Email address is invalid";
  //     } else if (password.length < 6) {
  //       newErrors.password = "Password should be of minimum length 6";
  //     }
  //   }, [email, password]);

  //   const onSubmit = async ({
  //     displayName,
  //     email,
  //     password,
  //     confirmPassword,
  //   }) => {
  //     e.preventDefault();
  //     setIsSubmit(true);
  //     if (password !== confirmPassword) {
  //       alert("Password not matched");
  //     }
  //     // if (Object.keys(errors).length === 0) {
  //       try {
  //         const response = await axios.post("http://localhost:3000/user", {
  //           displayName,
  //           email,
  //           password,
  //         });
  //         alert("Sign up is successful");
  //       } catch (err) {
  //         console.error("Sign up failed", err);
  //         alert("Sign up failed please try again!!");
  //       }
  //     // } else {
  //     //   alert("please fix the errors before submit");
  //     // }
  //     setIsSubmit(false);
  //   };

  const submitToApi = async ({ displayName, email, password }) => {
    try {
      const response = axios.post("http://localhost:3000/user", {
        displayName,
        email,
        password,
      });
      alert("user created successfully");
    } catch (er) {
      alert("Error while creating the user", er.message);
    }
  };

  const onSubmit = (data) => {
    const { displayName, email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      alert("Password doesn't match!");
      return;
    }
    submitToApi({ displayName, email, password });
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
          {...register("displayName", { required: "display name is required" })}
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
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <FormInput
          label="Password"
          type="password"
          placeholder="password"
          {...register("password", {
            required: "password is required !!",
          })}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <FormInput
          label="Confirm Password"
          type="password"
          placeholder="confirm password"
          {...register("confirmPassword", {
            required: "confirm password is required!",
          })}
        />
        <CustomButton className="custom-button" type="submit">
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUpInHouseState;
