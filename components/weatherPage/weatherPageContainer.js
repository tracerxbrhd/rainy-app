import React from "react";

import weatherPage from '../weatherPage/weatherPage'

import {setWeatherValue} from '../../Redux/weatherReducer'

import {connect} from "react-redux"

let mapStateToProps = (state) => {
    return {
        weatherValue: state.weatherPage.weatherValue,
    }
}


const weatherPageContainer = connect(mapStateToProps, 
    setWeatherValue,
) (weatherPage) 


export default weatherPageContainer;
