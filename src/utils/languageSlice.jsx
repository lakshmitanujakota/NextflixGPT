import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: { changeLanguage: "en" },
  reducers: {
    onLanguageChange: (state, action) => {
      state.changeLanguage = action.payload;
    },
  },
});


export const{onLanguageChange}=languageSlice.actions;
export default languageSlice.reducer;