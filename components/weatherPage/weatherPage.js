import React from 'react';
import axios from 'axios'; 
import { useEffect } from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const weatherPage = ({weatherValue,getWeatherThunkCreator, setWeatherValue, setCountry, country}) => {

    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/weather?lat=56.8497600&lon=53.2044800&lang=ru&&appid=6a808b6c7e0615adfaa9bf695e0ed8f0")
        .then(responce => {
            console.log(responce.data.name);
            setCountry(responce.data.name)
            setWeatherValue(Math.round(responce.data.main.temp - 273.15))
        })
    }, [])

    console.log(country);
    return (
        <View style={style.page}>
            <ImageBackground source={require('../../assets/giphy.gif')} style={style.image}>
                <View style={style.header}>
                    <Text style={style.headerText}>
                        {country}
                    </Text>
                </View>
                <View style={style.body}>
                    <Text style={style.bodyText}>
                        {weatherValue}°
                    </Text>
                </View>
            </ImageBackground>
        </View> 
    )
}

const style = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        color: "black",
    },
    image: {
        flex: 3,
    },
    header: {
        width: '100%',
        height: '11%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        color: "white",
        fontSize: 19, 
        marginTop: "8%",
        fontWeight: "bold"
    },
    body: {
        marginTop: "10%",
        marginLeft: "11%",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    bodyText: {
        color: "white",
        fontSize: 110,
        marginBottom: "50%",
    }
})



export default weatherPage;