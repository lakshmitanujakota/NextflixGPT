import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import searchReducer from "./searchSlice";
import languageReducer from "./languageSlice";


const appStore = configureStore({
  reducer: { user: userReducer, movies: moviesReducer, search: searchReducer, language: languageReducer },
});

export default appStore;
