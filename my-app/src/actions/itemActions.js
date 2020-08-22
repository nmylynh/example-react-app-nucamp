import axios from 'axios'

export const FETCH_ITEMS_START = 'FETCH_ITEMS_START'

export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'

export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE'

const BASE_URL = 'https://tft-db.herokuapp.com/api/items'

export const fetchItems = () => async (dispatch) => {
    dispatch({ type: FETCH_ITEMS_START })
    try {
        const res = await axios.get(`${BASE_URL}`)
        dispatch({
            type: FETCH_ITEMS_SUCCESS,
            payload: res.data
        })        
    } catch (err) {
        dispatch({
            type: FETCH_ITEMS_FAILURE,
            payload: err
        })
    }
}