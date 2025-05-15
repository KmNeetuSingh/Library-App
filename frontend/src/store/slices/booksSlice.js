import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Async thunks
export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/books`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchMyBooks = createAsyncThunk(
  "books/fetchMyBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/mybooks`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addToMyBooks = createAsyncThunk(
  "books/addToMyBooks",
  async (bookId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/mybooks`,
        { bookId },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateMyBook = createAsyncThunk(
  "books/updateMyBook",
  async ({ bookId, status, rating, review, notes }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${API_URL}/mybooks/${bookId}`,
        { status, rating, review, notes },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromMyBooks = createAsyncThunk(
  "books/removeFromMyBooks",
  async (bookId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/mybooks/${bookId}`, {
        withCredentials: true,
      });
      return bookId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// New: Async thunk for adding a new book
export const addBook = createAsyncThunk(
  "books/addBook",
  async (bookData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/books`, bookData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  books: [],
  myBooks: [],
  loading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Books
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        // Append new books if needed, or just replace
        state.books = action.payload.books; // Assuming payload is { books: [...], ...pagination }
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch books";
      })
      // Fetch My Books
      .addCase(fetchMyBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.myBooks = action.payload;
      })
      .addCase(fetchMyBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch your books";
      })
      // Add to My Books
      .addCase(addToMyBooks.fulfilled, (state, action) => {
        state.myBooks.push(action.payload);
      })
      // Update My Book
      .addCase(updateMyBook.fulfilled, (state, action) => {
        const index = state.myBooks.findIndex(
          (book) => book._id === action.payload._id
        );
        if (index !== -1) {
          state.myBooks[index] = action.payload;
        }
      })
      // Remove from My Books
      .addCase(removeFromMyBooks.fulfilled, (state, action) => {
        state.myBooks = state.myBooks.filter(
          (book) => book._id !== action.payload
        );
      })
      // New: Add Book cases
      .addCase(addBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.loading = false;
        // Optionally add the new book to the public books list, or just refetch
        // state.books.push(action.payload); // This might mess up pagination/sorting
        // A better approach might be to refetch books on the homepage after adding
      })
      .addCase(addBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to add book";
      });
  },
});

export const { clearError } = booksSlice.actions;
export default booksSlice.reducer;
