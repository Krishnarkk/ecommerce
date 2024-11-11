import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 
export const signUpUserAsyncThunk = createAsyncThunk(
  "signUpUserAsyncThunk",
  async (formData, { rejectWithValue }) => {
    try {
      const resp = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!resp.ok) throw new Error("Signup Failed");
      return await resp.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
 
const signupSlice = createSlice({
  name: "signup",
  initialState: {
    formData: {
      displayName: "",
      email: "",
      password: "",
    },
    errors: {},
    status: "idle", // idle, loading, success, failed
    errorMessage: null,
  },
  reducers: {
    updateFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    setError(state, action) {
      state.errors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUserAsyncThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpUserAsyncThunk.fulfilled, (state) => {
        state.status = "success";
        state.formData = {
          displayName: "",
          email: "",
          password: "",
        };
        state.errors = {};
      })
      .addCase(signUpUserAsyncThunk.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.payload;
      });
  },
});
 
export const { updateFormData, setError } = signupSlice.actions;
export default signupSlice.reducer;
 