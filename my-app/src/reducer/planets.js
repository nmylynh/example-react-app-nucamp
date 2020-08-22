import {
    FETCH_PLANETS_START,
    FETCH_PLANETS_SUCCESS,
    FETCH_PLANETS_FAILURE,
  } from "../actions";
  
  const INITIAL_STATE = {
    planets: [],
    currentPlanet: "",
    fetching: false,
    error: {},
  };
  
  export const planetsReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
      case FETCH_PLANETS_START:
        return {
          ...state,
          fetching: true,
        };
      case FETCH_PLANETS_SUCCESS:
        return {
          ...state,
          planets: payload, // an array
          fetching: false,
        };
      case FETCH_PLANETS_FAILURE:
        return {
          ...state,
          error: payload,
          fetching: false,
        };
      default:
        return state;
    }
  };

export default planetsReducer