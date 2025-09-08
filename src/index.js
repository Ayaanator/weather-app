import "./styles.css";
import { fetchWeather } from "./data.js"
import { SearchHandler } from "./search.js"


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

const handler = new SearchHandler();