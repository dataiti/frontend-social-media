import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const userSelector = (state) => state.user;
export const {} = postSlice.actions;
export default postSlice.reducer;
