import "./styles.css";
import { fetchWeather } from "./data.js"

const stored_build = localStorage.getItem("BUILD_ID");

if (stored_build != __BUILD_ID__) {
  console.log("New build detected!");
  const new_build_id = __BUILD_ID__;

  localStorage.clear();
  localStorage.setItem("BUILD_ID", new_build_id);
}

if (process.env.NODE_ENV === "development") {
  console.log("Running in development mode!");
} else if (process.env.NODE_ENV === "production") {
  console.log("Running in production mode!");
}

async function displayWeather() {
  const weatherInfo = await fetchWeather(); // wait for the Promise to resolve

  console.log(weatherInfo.city);
  console.log(weatherInfo.temp);
  console.log(weatherInfo.feelsLike);
  console.log(weatherInfo.humidity);
  console.log(weatherInfo.conditions);
  console.log(weatherInfo.windSpeed);
  console.log(weatherInfo.visibility);
}

// Call the async function
displayWeather();