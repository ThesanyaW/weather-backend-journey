import { Hono } from "hono";
import { logger } from "hono/logger";
import { cities } from "./types";
import { fetchWeather } from "./api";

declare const process: {
  env: Record<string, string | undefined>;
};

const port = process.env.PORT ?? "3000";

console.log(`Server configured to run on port ${port}`);

const app = new Hono();

app.use("*", logger());

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

app.get("/cities", (c) => {
  return c.json(Object.keys(cities));
});

app.get("/health", (c) => {
  return c.json({
    status: "healthy",
  });
});

export default app;