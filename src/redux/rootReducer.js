import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import userReducer from "./features/userSlice";
import messageReducer from "./features/messageSlice";
import postReducer from "./features/postSlice";
import authReducer from "./features/authSlice";

const commonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const userConfig = {
  ...commonConfig,
  key: "user",
};

const rootReducer = combineReducers({
  message: messageReducer,
  users: userReducer,
  posts: postReducer,
  auth: persistReducer(userConfig, authReducer),
});

export default rootReducer;
