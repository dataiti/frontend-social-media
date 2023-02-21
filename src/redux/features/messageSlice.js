import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      console.log(action);
      state.message = action.payload;
    },
    clearMessage: (state) => {
      state.message = "";
    },
  },
});

export const messageSelect = (state) => state.message;
export const { setMessage, clearMessage } = messageSlice.actions;
export default messageSlice.reducer;
