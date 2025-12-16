import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowSecondMovieList: null,
    movieTrailer: null,
    selectedTrailer: null,
  },

  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addSecondMovieList: (state, action) => {
      state.nowSecondMovieList = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    setSelectedTrailer: (state, action) => {
      state.selectedTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addMovieTrailer,
  addSecondMovieList,
  setSelectedTrailer,
} = movieSlice.actions;
export default movieSlice.reducer;
