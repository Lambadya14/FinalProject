import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

// Create the store
export default configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
