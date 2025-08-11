import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

export const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      state.favorite.push(payload);
    },
    removeFavorite(state, { payload }) {
      state.favorite = state.favorite.filter((el) => el !== payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
