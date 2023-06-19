import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./authReducers";

export default combineReducers({
  auth: authReducers,
});
