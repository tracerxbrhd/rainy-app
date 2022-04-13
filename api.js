



export const weatherApi = {
    getWeather(){
        return instans.post().then((response) => {
            return response;
        })
    }
}