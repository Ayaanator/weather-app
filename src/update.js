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

    formatDate(dateString) {
        if(dateString === undefined) {
            const date = new Date();

            return date.toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true
            });
        } else {
            const [year, month, day] = dateString.split("-").map(Number);
            const date = new Date(year, month - 1, day);

            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);

            if (date.getTime() === tomorrow.getTime()) {
                return "Tomorrow"
            }

            return date.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric"
            });
        }
    }

    to_celsius(f) {
        return ((f - 32) * 5 / 9).toFixed(1);
    }

    to_km(m) {
        return (m * 1.60934).toFixed(1);
    }

    add_main(weatherInfo) {
        const main_info = document.querySelector("#main-info");

        const html = `
        <div id="left-info">
                <div id="info-header">
                    <h2 class="primary">${weatherInfo.city}</h2>
                    <h3 class="secondary">${this.formatDate()}</h3>
                </div>

                <div id="temp">
                    <h2 id="temp-text" class="primary">${this.to_celsius(weatherInfo.temp)}°C</h2>
                    <div id="sub-temp">
                        <h3 class="secondary">${weatherInfo.conditions}</h3>
                        <h3 class="secondary">Feels Like ${this.to_celsius(weatherInfo.feelsLike)}°C</h3>
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
                    <h3 class="secondary">${this.to_km(weatherInfo.visibility)} km</h3>
                </div>

                <div class="section">
                    <img src="${humidity}">
                    <h3 class="secondary">Humidity</h3>
                    <h3 class="secondary">${weatherInfo.humidity}%</h3>
                </div>

                <div class="section">
                    <img src="${wind_speed}">
                    <h3 class="secondary">Wind Speed</h3>
                    <h3 class="secondary">${this.to_km(weatherInfo.windSpeed)}km/h</h3>
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

    add_prediction(weatherInfo) {
        const prediction_info = document.querySelector("#prediction");
        const begin = 1;
        const end = 7;

        const html = `
        <h2 class="primary">${end} Day Forecast</h2>

            <div id="day-container">
                ${weatherInfo.days.slice(begin, end + begin).map((day) => 
                    `<div class="day">
                        <div class="day-left">
                            <h3 class="secondary">${this.formatDate(day.datetime, false)}</h3>
                            <img src="${this.icons(`./${day.icon}.svg`)}">
                            <h3 class="secondary">${day.conditions}</h3>
                        </div>

                        <div class="day-right">
                            <h3 class="primary">${this.to_celsius(day.temp)}°C</h3>
                        </div>
                    </div>`).join('')}
            </div>
        `
        prediction_info.innerHTML = html;
    }
}