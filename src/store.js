import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./Features/Signup/signup-slice";

const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});

export default store;
