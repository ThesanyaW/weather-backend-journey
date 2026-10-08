import { cities } from "./types";
import { fetchWeather } from "./api";

declare const process: {
  argv: string[];
  exit: (code?: number) => never;
};

async function showAllCities() {
  const [colombo, kandy, galle] =
    await Promise.all([
      fetchWeather(6.9271, 79.8612),
      fetchWeather(7.2906, 80.6337),
      fetchWeather(6.0328, 80.2168),
    ]);

  console.log("\n📍 Colombo");
  console.log(
    `🌡 Temperature: ${colombo.current.temperature_2m}°C`
  );

  console.log("\n📍 Kandy");
  console.log(
    `🌡 Temperature: ${kandy.current.temperature_2m}°C`
  );

  console.log("\n📍 Galle");
  console.log(
    `🌡 Temperature: ${galle.current.temperature_2m}°C`
  );
}

async function main() {
  const cityName = process.argv[2];

  if (cityName === "--all") {
  await showAllCities();
  return;
}

  if (!cityName) {
    console.log(
      "Usage: bun run src/index.ts <city> | --all"
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