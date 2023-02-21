import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getListFriendsApi,
  getListFollowersApi,
  acceptFriendApi,
} from "../../apis/user";

const initialState = {
  friends: [],
  followers: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const getListFriendsAction = createAsyncThunk(
  "users/list-friends",
  async (userId, thunkAPI) => {
    try {
      return await getListFriendsApi(userId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getListFollowersAction = createAsyncThunk(
  "users/list-followers",
  async (userId, thunkAPI) => {
    try {
      return await getListFollowersApi(userId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const acceptFriendAction = createAsyncThunk(
  "users/accept-friend",
  async (data, thunkAPI) => {
    try {
      return await acceptFriendApi(data.userId, data.followerId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListFriendsAction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.friends = action.payload.data;
        state.message = action.payload.message;
      })

      .addCase(getListFollowersAction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.followers = action.payload.data;
        state.message = action.payload.message;
      })

      .addCase(acceptFriendAction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      });
  },
});

export const usersSelect = (state) => state.users;
export { getListFriendsAction, getListFollowersAction, acceptFriendAction };
export const {} = userSlice.actions;
export default userSlice.reducer;
