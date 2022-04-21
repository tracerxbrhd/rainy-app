import React from "react";

import weatherPage from './weatherPage'

import {getWeatherThunkCreator, setWeatherValue, getWeatherForecastThunkCreator} from '../../Redux/weatherReducer'

import {connect} from "react-redux"

let mapStateToProps = (state) => {
    return {
        weatherValue: state.weatherPage.weatherValue,
        country: state.weatherPage.country,
        cloud: state.weatherPage.cloud,
        lat: state.weatherPage.lat,
        lon: state.weatherPage.lon,
        wind: state.weatherPage.wind,
    }
}


const weatherPageContainer = connect(mapStateToProps, {
    getWeatherThunkCreator,
    // getWeatherForecastThunkCreator,
    setWeatherValue,
}
) (weatherPage) 


export default weatherPageContainer;
