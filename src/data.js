export async function fetchWeather(city) {

    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=9V4VDBHX7V28LW987NTMLCKH8`
        );
        
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const cc = data.currentConditions;
        console.log(data);

        const weatherInfo = {
            city: data.resolvedAddress,
            temp: cc.temp,
            feelsLike: cc.feelslike,
            humidity: cc.humidity,
            conditions: cc.conditions,
            windSpeed: cc.windspeed,
            visibility: cc.visibility,
            description: data.description,
            sunrise: cc.sunrise,
            sunset: cc.sunset
        };

        console.log(weatherInfo);
        return weatherInfo;
    } catch {
        console.error("fetchWeather failed: ", error.message);
        return null;
    }
}