import axios from 'axios'

export const FETCH_PLANETS_START = 'FETCH_PLANETS_START'

export const FETCH_PLANETS_SUCCESS = 'FETCH_PLANETS_SUCCESS'

export const FETCH_PLANETS_FAILURE = 'FETCH_PLANETS_FAILURE'

const BASE_URL = `https://swapi.dev/api`

export const fetchPlanets = () => async (dispatch) => {
    dispatch({ type: FETCH_PLANETS_START })
    try {
        const res = await axios.get(`${BASE_URL}/planets`)
        dispatch({
            type: FETCH_PLANETS_SUCCESS,
            payload: res.results
        })        
    } catch (err) {
        dispatch({
            type: FETCH_PLANETS_FAILURE,
            payload: err
        })
    }
}