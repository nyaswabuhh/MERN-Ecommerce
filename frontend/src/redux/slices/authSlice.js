import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//retrieve user info token from localstorage if available

const userFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfor"))
  : null;

//check for existing guest id in local storage

const initialGuestId =
  localStorage.getItem("guestId") || `guest_${new Date.now().getTime()}`;

localStorage.setItem("guestId", initialGuestId);

//initial state
const initialState = {
  user: userFromStorage,
  guestId: initialGuestId,
  loading: false,
  error: null,
};

//Asynch Thunk for User Login

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        userData
      );
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("userToken", response.data.token);

      return response.data.user; //return user object from response
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Asynch Thunk for User Registration

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
        userData
      );
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("userToken", response.data.token);

      return response.data.user; //return user object from response
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

