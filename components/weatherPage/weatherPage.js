import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const weatherPage = () => {
    return (
        <View style={style.page}>
            <ImageBackground source={require('../../assets/OzV.gif')} style={style.image}>
                <View style={style.header}>
                    <Text style={style.headerText}>
                        Ижевск
                    </Text>
                </View>
                <View style={style.body}>
                    <Text style={style.bodyText}>
                        1
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
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    bodyText: {
        color: "white",
        fontSize: 120,
        marginBottom: "50%",
    }
})



export default weatherPage;