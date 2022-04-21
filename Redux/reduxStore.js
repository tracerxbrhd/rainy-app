import { createStore, combineReducers} from "redux";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"

import weatherReducer from './weatherReducer'

let reducers = combineReducers({
    weatherPage: weatherReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;