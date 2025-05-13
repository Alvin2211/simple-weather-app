import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_API_KEY;;  // Replace with your OpenWeatherMap API key

export const getWeather = async (city) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric", // Use "imperial" for Fahrenheit
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
