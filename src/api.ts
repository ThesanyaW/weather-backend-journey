import { WeatherSchema } from "./schema";

export async function fetchWeather(
  LATITUDE: number,
  LONGITUDE: number
) {
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

  const result =
  WeatherSchema.safeParse(json);

  if (!result.success) {
 throw new Error(
  result.error.message
);
}

return result.data;

}