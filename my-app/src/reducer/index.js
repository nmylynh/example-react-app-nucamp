
import { combineReducers } from 'redux';
import itemsReducer from './items'
import planetsReducer from './planets'

export default combineReducers({
    planets: planetsReducer,
    items: itemsReducer
});