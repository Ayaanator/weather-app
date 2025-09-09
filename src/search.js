import { fetchWeather } from "./data.js"
import { WeatherUpdater } from "./update.js";

export class SearchHandler {
    updater = new WeatherUpdater();

    constructor() {
        

        const bar = document.querySelector("#search-bar");
        const search = document.querySelector("#search-button");
        
        search.addEventListener("click", () => {
            if(bar.value.trim() !== "") {
                this.displayWeather(bar.value);
            }
        })

        bar.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && bar.value.trim() !== "") {
                this.displayWeather(bar.value.trim());
            }   
        });
    }

    async displayWeather(city) {
        const weatherInfo = await fetchWeather(city); 
        this.updater.add_main(weatherInfo);
    }
}