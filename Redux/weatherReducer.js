import {weatherApi, forecast} from '../api'

export let initialState = {
    weatherValue: "",
    country: "",
    cloud: "",
    lat: "",
    lon: "",
    ll: "",
    wind: "",
};

let SET_WEATHER_VALUE = "SET_WEATHER_VALUE";
let SET_COUNTRY = "SET_COUNTRY";
let SET_CLOUD = "SET_CLOUD";
let SET_FORECAST = "SET_FORECAST";
let SET_LAT = "SET_LAT";
let SET_LON = "SET_LON";
let SET_ll = "SET_ll"
let SET_WIND = "SET_WIND";

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WEATHER_VALUE: {
            return {...state, weatherValue: action.weatherValue};
        }

        case SET_COUNTRY: {
            return {...state, country: action.country}
        }
        
        case SET_CLOUD: {
            return {...state, cloud: action.cloud}
        }
        
        case SET_FORECAST: {
            return {...state, forecast: action.forecast}
        }

        case SET_LAT: {
            return {...state, lat: action.lat}
        }

        case SET_LON: {
            return {...state, lon: action.lon}
        }

        case SET_ll: {
            return {...state, ll: action.ll}
        }

        case SET_WIND: {
            return {...state, wind: action.wind}
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

export const setCloud = (cloud) => {
    return {type: SET_CLOUD, cloud: cloud}
}

export const setForecast = (forecast) => {
    return {type: SET_FORECAST, forecast: forecast}
}

function Title(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const setLat = (lat) => {
    return {type: SET_LAT, lat: lat}
}

const setLon = (lon) => {
    return {type: SET_LON, lon: lon}
}

const setWind = (wind) => {
    return {type: SET_WIND, wind: wind}
}

export const getWeatherThunkCreator = (lat , lon) => (dispatch) => {
        weatherApi.getWeather().then((weather) => {
            console.log(weather);
            dispatch(setWeatherValue(Math.round(weather.data.main.temp)))
            dispatch(setCountry(weather.data.name));
            dispatch(setCloud(Title(weather.data.weather[0].description)))
            dispatch(setLat(weather.data.coord.lat))
            dispatch(setLon(weather.data.coord.lon))
            dispatch(setWind(Math.round(weather.data.wind.speed)))
            // getWeatherForecastThunkCreator(lat, lon)
        })
}

// export const getWeatherForecastThunkCreator = (lat , lon) => (dispatch) => {
//     forecast.getForecast(lat, lon).then((forecast) => {
//         dispatch(setll(forecast))
//         console.log(forecast);
//     })
// }

export default weatherReducer;