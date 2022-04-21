import * as axios from "axios";


const weather = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
})



export const weatherApi = {
    getWeather(){
        return weather.get("weather?q=Ижевск&lang=ru&appid=6a808b6c7e0615adfaa9bf695e0ed8f0&units=metric").then((response) => {
            return response;
        })
    }
}

// export const forecast = {
//     getForecast(lat, lon){
//         return weather.get(`onecall?lat=${lat}&lon=${lon}&lang=ru&appid=bbbd0a78d888c77a669b3cd7164b7014&units=metric`).then((response) => {
//             return response;
//         })
//     }
// }

