import {
  FETCH_ITEMS_START,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  data: [],
  currentCharacter: "",
  fetching: false,
  error: {},
};

export const itemsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_ITEMS_START:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        data: payload, // an array
        fetching: false,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        error: payload,
        fetching: false,
      };
    default:
      return state;
  }
};

export default itemsReducer