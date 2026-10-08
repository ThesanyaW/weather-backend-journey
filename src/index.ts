import { fetchWeather } from "./api";

declare const process: {
  argv: string[];
};

async function main() {

  const cityName = process.argv[2];

  if (!cityName) {
    console.log("Usage: bun run src/index.ts <city>");

    return;
  }

  try {
    const weather = await fetchWeather();

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