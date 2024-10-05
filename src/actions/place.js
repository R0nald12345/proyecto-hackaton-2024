import axios from "axios";
import { GET_PLACE, GET_PLACES, REMOVE_PLACE } from "./types";

export const getPlace =
  ({ position }) =>
  async (dispatch) => {
    console.log(position);

    clearPlace();

    //const res = axios.post("http://localhost:5000", position);

    dispatch({
      type: GET_PLACE,
      payload: position,
    });
  };

export const getPlaces = () => async (dispatch) => {
  const res = axios.get("http://localhost:5000", position);

  dispatch({
    type: GET_PLACES,
    payload: res.data,
  });
};

export const clearPlace = () => async (dispatch) => {
  dispatch({
    type: REMOVE_PLACE,
  });
};
