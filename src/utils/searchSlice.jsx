import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { onSearchChange: false },
  reducers: {
    toggleSearchView: (state) => {
      state.onSearchChange = !state.onSearchChange;
    },
  },
});

export const { toggleSearchView } = searchSlice.actions;
export default searchSlice.reducer;
