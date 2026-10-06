import { fetchWeather } from "./api";

async function main() {
  try {
    const weather = await fetchWeather();

    console.log("📍 Colombo");
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