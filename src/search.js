import { fetchWeather } from "./data.js"


export class SearchHandler {
    constructor() {
        const bar = document.querySelector("#search-bar");
        const search = document.querySelector("#search-button");
        
        search.addEventListener("click", () => {
            if(bar.value.trim() !== "") {
                this.displayWeather(bar.value);
            }
        }) 
    }

    async displayWeather(city) {
        const weatherInfo = await fetchWeather(city); 

        console.log(weatherInfo.city);
        console.log(weatherInfo.temp);
        console.log(weatherInfo.feelsLike);
        console.log(weatherInfo.humidity);
        console.log(weatherInfo.conditions);
        console.log(weatherInfo.windSpeed);
        console.log(weatherInfo.visibility);
    }
}