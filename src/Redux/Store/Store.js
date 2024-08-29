import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slices/states/CounterSlice";
import userReducer from "../Slices/states/UserSlice";
import { postApi } from "../Slices/Api/PostApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    MyUser: userReducer,
    [postApi.reducerPath]: postApi.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),

});