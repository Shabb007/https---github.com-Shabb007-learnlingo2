import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachersAsync } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPending = (state) => {
  state.isLoading = true;
};

const isRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachersAsync.pending, isPending)
      .addCase(fetchTeachersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTeachersAsync.rejected, isRejected);
  },
});

export const teacherReducer = teachersSlice.reducer;
