import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowSecondMovieList: null,
    nowTopMovieList:null,
    backgroundMovieId: null,
    movieTrailer: null,
    selectedTrailer: null,
    selectedMovieId: null,
  },

  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addSecondMovieList: (state, action) => {
      state.nowSecondMovieList = action.payload;
    },
    addTopMovieList: (state, action) => {
      state.nowTopMovieList = action.payload;
    },
    setBackgroundMovieId: (state, action) => {
      state.backgroundMovieId = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    setSelectedTrailer: (state, action) => {
      state.selectedTrailer = action.payload;
    },
    setSelectedMovieId: (state, action) => {
      state.selectedMovieId = action.payload;
    },
    clearTrailerKey: (state) => {
      state.selectedTrailer = null;
        state.selectedMovieId = null;
    },
  },
});

export const {
  addNowPlayingMovie,
  addMovieTrailer,
  addSecondMovieList,
  addTopMovieList,
  setBackgroundMovieId,
  setSelectedTrailer,
  setSelectedMovieId,
  clearTrailerKey,
} = movieSlice.actions;
export default movieSlice.reducer;