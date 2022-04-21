import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const weatherPage = ({weatherValue,getWeatherThunkCreator,country, cloud, wind, getWeatherForecastThunkCreator, lat, lon,}) => {

    const Data = new Date();
    
    const Hours = Data.getHours();

    const Minutes = Data.getMinutes();


    useEffect(() => {
        getWeatherThunkCreator(lat, lon)
    }, [])

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=ru&appid=bbbd0a78d888c77a669b3cd7164b7014&units=metric`).then((response) => {
                console.log(response);
        })
    }, [lat, lon])


    console.log(lat, lon);
    return (
        <View style={style.page}>
            <ImageBackground source={require('../../assets/giphy.gif')} style={style.image}>
                <View style={style.header}>
                    {/* <Text style={style.timeText}>  
                        {`${Hours}:${Minutes}`}
                    </Text> */}
                    <Text style={style.headerText}>
                        {country}
                    </Text>
                </View>
                <View style={style.body}>
                    <Text style={style.bodyText}>
                        {weatherValue}°
                    </Text>
                    <View style={style.other}>
                        <Text style={style.cloudText}>
                            {cloud}
                        </Text>
                    </View>
                    <Text style={style.windText}>
                            Скорость ветра: {wind} м/с
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
        display: "flex",
        marginTop: "15%",
        display: "flex",
        alignItems: "center",
    },
    headerText: {
        color: "white",
        fontSize: 19, 
        fontWeight: "bold",
        marginRight: "3%",
    },
    body: {
        marginTop: "10%",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "35%",
    },
    bodyText: {
        color: "white",
        fontSize: 110,
        marginLeft: "7%",
        marginBottom: "5%",
    },
    cloudText: {
        color: "white",
        fontSize: 26,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        padding: 10,
        borderRadius: 30,
        fontWeight: "300",
    },
    timeText: {
        color: "white",
        fontSize: 24,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        padding: 8,
        borderRadius: 25,
        marginRight: "15%",
        fontWeight: "300",
    },

    windText: {
        fontSize: 27,
        color: "white",
        fontWeight: "300",
        marginTop: "4%"
    },

    other: {
        
    }

})



export default weatherPage;