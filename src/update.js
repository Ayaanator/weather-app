import test_icon from "./images/test.jpg"

import sunrise from "./images/sunrise.svg"
import sunset from "./images/sunset.svg"
import visibility from "./images/visibility.svg"
import humidity from "./images/humidity.svg"
import wind_speed from "./images/wind-speed.svg"
import wind_direction from "./images/wind-direction.svg"

export class WeatherUpdater {
    icons = require.context("./images/icons", false, /\.svg$/);

    formatTime(timeString) {
        const [hoursStr, minutesStr] = timeString.split(":");
        let hours = parseInt(hoursStr, 10);
        const minutes = parseInt(minutesStr, 10);

        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
    }

    add_main(weatherInfo) {
        const main_info = document.querySelector("#main-info");
        /*console.log(weatherInfo.city);
        console.log(weatherInfo.temp);
        console.log(weatherInfo.feelsLike);
        console.log(weatherInfo.humidity);
        console.log(weatherInfo.conditions);
        console.log(weatherInfo.windSpeed);
        console.log(weatherInfo.visibility);*/
        console.log(weatherInfo.icon);

        const html = `
        <div id="left-info">
                <div id="info-header">
                    <h2 class="primary">${weatherInfo.city}</h2>
                    <h3 class="secondary">Monday, September 8, 2025 at 12:45 PM.</h3>
                </div>

                <div id="temp">
                    <h2 id="temp-text" class="primary">${weatherInfo.temp}°F</h2>
                    <div id="sub-temp">
                        <h3 class="secondary">${weatherInfo.conditions}</h3>
                        <h3 class="secondary">Feels Like ${weatherInfo.feelsLike}°F</h3>
                    </div>
                </div>
                <h3 class="secondary">${weatherInfo.description}</h3>
            </div>

            <img src="${this.icons(`./${weatherInfo.icon}.svg`)}" id="weather-icon">
        `
        main_info.innerHTML = html;
    }

    add_second(weatherInfo) {
        const second_info = document.querySelector("#secondary-info");

        const html = `
        <h2 class="primary">Today's Weather Details</h2>

            <div id="section-container">
                <div class="section">
                    <img src="${sunrise}">
                    <h3 class="secondary">Sunrise</h3>
                    <h3 class="secondary">${this.formatTime(weatherInfo.sunrise)}</h3>
                </div>

                <div class="section">
                    <img src="${sunset}">
                    <h3 class="secondary">Sunset</h3>
                    <h3 class="secondary">${this.formatTime(weatherInfo.sunset)}</h3>
                </div>

                <div class="section">
                    <img src="${visibility}">
                    <h3 class="secondary">Visibility</h3>
                    <h3 class="secondary">${weatherInfo.visibility} km</h3>
                </div>

                <div class="section">
                    <img src="${humidity}">
                    <h3 class="secondary">Humidity</h3>
                    <h3 class="secondary">${weatherInfo.humidity}%</h3>
                </div>

                <div class="section">
                    <img src="${wind_speed}">
                    <h3 class="secondary">Wind Speed</h3>
                    <h3 class="secondary">${weatherInfo.windSpeed}km/h</h3>
                </div>
                
                <div class="section">
                    <img src="${wind_direction}">
                    <h3 class="secondary">Wind Direction</h3>
                    <h3 class="secondary">${weatherInfo.windDirection}°</h3>
                </div>
            </div>
        `
        second_info.innerHTML = html;
    }
}