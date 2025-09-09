import test_icon from "./images/test.jpg"

export class WeatherUpdater {
    add_main(weatherInfo) {
        const main_info = document.querySelector("#main-info");
        console.log(weatherInfo.city);
        console.log(weatherInfo.temp);
        console.log(weatherInfo.feelsLike);
        console.log(weatherInfo.humidity);
        console.log(weatherInfo.conditions);
        console.log(weatherInfo.windSpeed);
        console.log(weatherInfo.visibility);

        const html = `
        <div id="left-info">
                <div id="info-header">
                    <h2 class="primary">${weatherInfo.city}</h2>
                    <h3 class="secondary">Monday, September 8, 2025 at 12:45 PM.</h3>
                </div>

                <div id="temp">
                    <h2 id="temp-text" class="primary">${weatherInfo.temp}°C</h2>
                    <div id="sub-temp">
                        <h3 class="secondary">${weatherInfo.conditions}</h3>
                        <h3 class="secondary">Feels Like ${weatherInfo.feelsLike}°F</h3>
                    </div>
                </div>
                <h3 class="secondary">${weatherInfo.description}</h3>
            </div>

            <img src="${test_icon}">
        `
        main_info.innerHTML = html;
    }
}