let initialState = {
    weatherValue: "",
};

let SET_WEATHER_VALUE = "SET_WEATHER_VALUE";

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WEATHER_VALUE: {
            return {...state, weatherValue: action.weatherValue};
        }

        default: return{...state}
    }
}

export const setWeatherValue = (weatherValue) => {
    return {type: SET_WEATHER_VALUE, weatherValue: weatherValue}
}

export default weatherReducer;