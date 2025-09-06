let city = "toronto";

export async function fetchWeather() {

    const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=9V4VDBHX7V28LW987NTMLCKH8`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const cc = data.currentConditions;

    const weatherInfo = {
        city: data.resolvedAddress,
        temp: cc.temp,
        feelsLike: cc.feelslike,
        humidity: cc.humidity,
        conditions: cc.conditions,
        windSpeed: cc.windspeed,
        visibility: cc.visibility
    };

  return weatherInfo;
}