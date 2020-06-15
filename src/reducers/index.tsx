import { combineReducers } from 'redux'
import movies from './movies';

const stateStore = combineReducers({
    movies
})

export default stateStore;