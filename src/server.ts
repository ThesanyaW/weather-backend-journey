import { Hono } from "hono";
import { cities } from "./types";
import { fetchWeather } from "./api";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Weather API");
});

app.get("/weather/:city", async (c) => {
  const city = c.req.param("city");

  const cityData =
    cities[city as keyof typeof cities];

  const weather = await fetchWeather(
    cityData.latitude,
    cityData.longitude
  );

  return c.json({
    city,
    temperature:
      weather.current.temperature_2m,
    windSpeed:
      weather.current.wind_speed_10m,
  });
});

export default app;