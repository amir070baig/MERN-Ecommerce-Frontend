// Import tools from Redux Toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Import axios to make HTTP requests
import axios from "axios";
import { API_BASE_URL } from "../config";

// 🌍 Base URL for backend
// const API_URL = "https://mern-ecommerce-backend-mnc3.onrender.com"; 
// Replace with your actual backend URL


// --------------------- REGISTER ---------------------
export const registerUser = createAsyncThunk(
  "auth/register",   // 🔹 Action type prefix → generates "auth/register/pending", "auth/register/fulfilled", "auth/register/rejected"
  async (userData, thunkAPI) => {  // 🔹 Async function (payload creator). userData = data from form, thunkAPI = helper object
    try {
      // Make POST request to backend with user data
      const res = await axios.post(`${API_BASE_URL}/register`, userData);
      return res.data;  // 🔹 On success → return data. Goes to `fulfilled`
    } catch (err) {
      // 🔹 On failure → send error message to `rejected`
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);


// --------------------- LOGIN ---------------------
export const loginUser = createAsyncThunk(
  "auth/login",   // 🔹 Action type prefix
  async (userData, thunkAPI) => {
    try {
      // Make POST request to backend for login
      const res = await axios.post(`${API_BASE_URL}/login`, userData);
      return res.data;  // 🔹 On success → goes to `fulfilled`
    } catch (err) {
      // 🔹 On error → goes to `rejected`
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);


// --------------------- SLICE ---------------------
const authSlice = createSlice({
  name: "auth",   // 🔹 Slice name → used as prefix in Redux actions
  initialState: {
    // 🔹 Check if "user" already exists in localStorage
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")) // If exists → load it
      : null,                                    // If not → null
    loading: false,  // 🔹 For showing loader during API calls
    error: null,     // 🔹 For storing error messages
  },

  // 🔹 Reducers → synchronous state updates
  reducers: {
    logout: (state) => {
      state.user = null;              // Remove user from state
      localStorage.removeItem("user"); // Also clear from localStorage
    },
  },

  // 🔹 extraReducers → handle async actions created by createAsyncThunk
  extraReducers: (builder) => {
    builder
      // ---------------- REGISTER ----------------
      .addCase(registerUser.pending, (state) => {
        state.loading = true;   // Show loading spinner
        state.error = null;     // Reset error
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;         // Stop loading
        state.user = action.payload;   // Save user data
        localStorage.setItem("user", JSON.stringify(action.payload)); // Save in localStorage
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;   // Stop loading
        state.error = action.payload; // Save error message
      })

      // ---------------- LOGIN ----------------
      .addCase(loginUser.pending, (state) => {
        state.loading = true;   // Show loading spinner
        state.error = null;     // Reset error
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;         // Stop loading
        state.user = action.payload;   // Save user data
        localStorage.setItem("user", JSON.stringify(action.payload)); // Save in localStorage
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;   // Stop loading
        state.error = action.payload; // Save error message
      });
  },
});

// 🔹 Export synchronous action
export const { logout } = authSlice.actions;

// 🔹 Export reducer so Redux store can use it
export default authSlice.reducer;
