import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, logoutApi, registerApi } from "../../apis/auth";
import { setMessage } from "./messageSlice";

const registerAction = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const res = await registerApi(data);
      thunkAPI.dispatch(setMessage(res.message));
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const loginAction = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const res = await loginApi(data);
    thunkAPI.dispatch(setMessage(res.message));
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const logoutAction = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const res = await logoutApi();
    thunkAPI.dispatch(setMessage(res.message));
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  userInfo: null,
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAction.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.userInfo = action.payload.data;
        if (state.userInfo) state.isLoggedIn = true;
        state.token = action.payload.accessToken;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.userInfo = null;
        state.token = null;
      });
  },
});

export { registerAction, loginAction, logoutAction };
export const authSelect = (state) => state.auth;
export const {} = authSlice.actions;
export default authSlice.reducer;
