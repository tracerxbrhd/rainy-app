import { createStore, combineReducers} from "redux";

import weatherReducer from './weatherReducer'

let reducers = combineReducers({
    weatherPage: weatherReducer,
})

const store = createStore(reducers);

export default store;