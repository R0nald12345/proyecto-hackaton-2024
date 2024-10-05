import axios from "axios";
import { GET_TIFF, GET_TIFFES } from "./types";

export const getTiff = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000");

    dispatch({
      type: GET_TIFF,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getTiffes = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000");

    dispatch({
      type: GET_TIFFES,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
