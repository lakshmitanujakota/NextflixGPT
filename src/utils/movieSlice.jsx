import {createSlice} from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState: {nowPlayingMovies:null,nowSecondMovieList:null, movieTrailer: null},

    reducers:{
       addNowPlayingMovie: (state, action) =>{
             state.nowPlayingMovies=action.payload
       },
       addSecondMovieList: (state, action) =>{
             state.nowSecondMovieList=action.payload
       },
       addMovieTrailer:(state, action)=>{
        state.movieTrailer=action.payload
       }
    }
})


export const {addNowPlayingMovie, addMovieTrailer, addSecondMovieList}=movieSlice.actions;
export default movieSlice.reducer;