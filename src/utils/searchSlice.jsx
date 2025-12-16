import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    onSearchChange: false,
    movieName: null,
    tmdbResults: {
      movies: [], // ✅ safe default
    },
  },
  reducers: {
    toggleSearchView: (state) => {
      state.onSearchChange = !state.onSearchChange;
    },
    movieSearchList: (state, action) => {
      const { movieName, tmdbResults } = action.payload;
      state.movieName = movieName;
      state.tmdbResults = tmdbResults;
    },
  },
});

export const { toggleSearchView, movieSearchList } = searchSlice.actions;
export default searchSlice.reducer;
