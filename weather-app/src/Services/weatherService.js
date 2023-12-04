import axios from "axios";

const apiKey = "f5efd948ba4c46f499f210033230412";
const baseUrl = "http://api.weatherapi.com/v1";

const getCurrentWeather = (city) => {
  const url = `${baseUrl}/current.json?key=${apiKey}&q=${city}`;
  return axios.get(url);
};

const getForecastWeather = (city) => {
  const url = `${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=7`;
  return axios.get(url);
};

export { getCurrentWeather, getForecastWeather };
