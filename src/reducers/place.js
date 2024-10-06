import {
  GET_PLACES,
  GET_PLACE,
  REMOVE_PLACE,
  SET_PLACE,
} from "../actions/types";

const initialState = {
  places: [],
  place: [],
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PLACE:
      return {
        ...state,
        place: payload,
        error: null,
        loading: false,
      };

    case GET_PLACES:
      return {
        ...state,
        places: payload,
        error: null,
        loading: false,
      };

    case REMOVE_PLACE:
      return {
        ...state,
        place: null,
        error: null,
        loading: false,
      };

    case SET_PLACE:
      return {
        ...state,
        place: payload,
        error: null,
        loading: false,
      };

    default: {
      return state;
    }
  }
}
