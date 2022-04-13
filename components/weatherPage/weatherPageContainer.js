import React from "react";

import weatherPage from './weatherPage'

import {getWeatherThunkCreator, setWeatherValue, setCountry} from '../../Redux/weatherReducer'

import {connect} from "react-redux"

let mapStateToProps = (state) => {
    return {
        weatherValue: state.weatherPage.weatherValue,
        country: state.weatherPage.country,
    }
}


const weatherPageContainer = connect(mapStateToProps, {
    getWeatherThunkCreator,
    setCountry,
    setWeatherValue,
}
) (weatherPage) 


export default weatherPageContainer;
