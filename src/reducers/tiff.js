import { GET_TIFF, GET_TIFFES } from "../actions/types";

const initialState = {
  tiffes: [],
  tiff: null,
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TIFF:
      return {
        ...state,
        tiff: payload,
        error: null,
      };

    case GET_TIFFES:
      return {
        ...state,
        tiffes: payload,
        error: null,
      };

    default: {
      return state;
    }
  }
}
