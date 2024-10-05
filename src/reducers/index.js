import { combineReducers } from "@reduxjs/toolkit";
import place from "./place";
import tiff from "./tiff";

export default combineReducers({
  place,
  tiff,
});
