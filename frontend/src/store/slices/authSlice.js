import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "/api/auth";

// Get user from localStorage (initial state only, will be replaced by /me check)
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user || null,
  isLoading: false,
  error: null,
  isAuthenticated: !!user, // Derive isAuthenticated from user presence
};

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      // localStorage.setItem('user', JSON.stringify(response.data)); // Remove local storage storage
      return response.data.user; // Assuming backend returns { user: userData, token: ... }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, userData);
      // localStorage.setItem('user', JSON.stringify(response.data)); // Remove local storage storage
      return response.data.user; // Assuming backend returns { user: userData, token: ... }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Load user from cookie (check session on app load)
export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/me`);
      return response.data.user; // Assuming backend returns { user: userData }
    } catch (error) {
      // If /me fails, user is not authenticated
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      // localStorage.removeItem('user'); // Remove local storage removal
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      // Call backend logout endpoint to clear cookie
      axios
        .post(`${API_URL}/logout`)
        .catch((err) => console.error("Logout backend call failed:", err));
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register cases
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload?.message || "Registration failed";
      })
      // Login cases
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload?.message || "Login failed";
      })
      // Load user cases
      .addCase(loadUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload?.message || "Authentication failed";
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
