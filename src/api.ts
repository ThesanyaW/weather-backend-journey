import { WeatherSchema } from "./schema";

const LATITUDE = 6.9271;
const LONGITUDE = 79.8612;

export async function fetchWeather() {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${LATITUDE}` +
    `&longitude=${LONGITUDE}` +
    `&current=temperature_2m,wind_speed_10m`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Weather API failed");
  }

  const json = await response.json();

  return WeatherSchema.parse(json);
}