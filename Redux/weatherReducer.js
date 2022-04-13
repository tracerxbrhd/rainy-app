import {weatherApi} from '../api'

let initialState = {
    weatherValue: "",
    country: "",
};

let SET_WEATHER_VALUE = "SET_WEATHER_VALUE";
let SET_COUNTRY = "SET_COUNTRY";

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WEATHER_VALUE: {
            return {...state, weatherValue: action.weatherValue};
        }

        case SET_COUNTRY: {
            return {...state, country: action.country}
        }

        default: return{...state}
    }
}

export const setWeatherValue = (weatherValue) => {
    return {type: SET_WEATHER_VALUE, weatherValue: weatherValue}
}
export const setCountry = (country) => {
    return {type: SET_COUNTRY, country: country}
}


export const getWeatherThunkCreator = () => (dispatch) => {
        weatherApi.getWeather().then((weather) => {
            dispatch(setWeatherValue(weather))
        })
}

export default weatherReducer;