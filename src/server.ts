import { Hono } from "hono";
import { cities } from "./types";
import { fetchWeather } from "./api";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Weather API");
});

app.get("/weather/:city", async (c) => {
  try {
    const city = c.req.param("city");

    const cityData =
      cities[city as keyof typeof cities];

    if (!cityData) {
      return c.json(
        { error: "Unsupported city" },
        404
      );
    }

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
  } catch (error) {
    console.error(error);

    return c.json(
      {
        error: "Internal server error",
      },
      500
    );
  }
});

export default app;