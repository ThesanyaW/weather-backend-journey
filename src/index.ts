import { cities } from "./types";
import { fetchWeather } from "./api";

declare const process: {
  argv: string[];
  exit: (code?: number) => never;
};

async function main() {
  const cityName = process.argv[2];

  if (!cityName) {
    console.log(
      "Usage: bun run src/index.ts <city>"
    );

    process.exit(1);
  }

  const city =
    cities[cityName as keyof typeof cities];

  if (!city) {
    console.log("Unsupported city.");
    process.exit(1);
  }

  try {
    const weather = await fetchWeather(
      city.latitude,
      city.longitude
    );

    console.log(`📍 ${cityName}`);
    console.log();

    console.log(
      `🌡 Temperature: ${weather.current.temperature_2m}°C`
    );

    console.log(
      `💨 Wind Speed: ${weather.current.wind_speed_10m} km/h`
    );
  } catch (error) {
    console.error("❌ Error:");

    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

main();