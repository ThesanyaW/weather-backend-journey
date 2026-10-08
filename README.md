# 🌦️ Weather CLI

A command-line weather application built with **Bun**, **TypeScript**, and **Zod** that fetches real-time weather data from the **Open-Meteo API** and displays it in the terminal.

This project was developed as part of **Phase 1: Runtimes & Modern TypeScript Core**, focusing on runtime comparison, TypeScript best practices, asynchronous programming, API integration, schema validation, and CLI development.

---

## 🚀 Features

- Fetch real-time weather data from Open-Meteo
- Support multiple cities
- Command-line argument parsing
- Runtime API response validation using Zod
- Error handling with `try/catch`
- Safe validation using `safeParse()`
- Concurrent API requests using `Promise.all()`
- Bun-native TypeScript execution
- Benchmark comparison between Bun and Node.js

---

## 🛠️ Technologies Used

| Technology     | Purpose                   |
| -------------- | ------------------------- |
| Bun            | Runtime & package manager |
| TypeScript     | Application development   |
| Zod            | Runtime schema validation |
| Open-Meteo API | Weather data provider     |
| Node.js + tsx  | Runtime benchmarking      |

---

## 📁 Project Structure

```text
weather-cli/
│
├── src/
│   ├── api.ts
│   ├── index.ts
│   ├── schema.ts
│   └── types.ts
│
├── package.json
├── tsconfig.json
├── bun.lock
└── README.md
```

---

## 📚 Concepts Implemented

### Runtime Comparison

This project explores and compares:

- Bun
- Node.js

through runtime benchmarking and performance analysis.

### TypeScript Features

Implemented:

- Strict typing
- Type inference
- Type aliases
- Module organization
- Runtime-safe API handling

Example:

```ts
export type Weather = z.infer<typeof WeatherSchema>;
```

### Async Programming

The application uses:

```ts
async / await;
```

for API communication.

Example:

```ts
const weather = await fetchWeather(city.latitude, city.longitude);
```

The project also demonstrates concurrent execution using:

```ts
Promise.all();
```

### Schema Validation

API responses are validated using Zod before being processed.

Example:

```ts
const result = WeatherSchema.safeParse(json);
```

Benefits:

- Prevents application crashes
- Detects malformed API responses
- Improves reliability and type safety

---

## 🌍 Weather API

This application uses the Open-Meteo API.

Example request:

```text
https://api.open-meteo.com/v1/forecast
?latitude=6.9271
&longitude=79.8612
&current=temperature_2m,wind_speed_10m
```

No API key is required.

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone <repository-url>
cd weather-cli
```

### Install Dependencies

Using Bun:

```bash
bun install
```

Or using npm:

```bash
npm install
```

---

## ▶️ Running the Application

### Development Mode

```bash
bun run dev Colombo
```

Example output:

```text
📍 Colombo

🌡 Temperature: 29.8°C
💨 Wind Speed: 10.1 km/h
```

### Using the Start Script

```bash
bun run start Colombo
```

---

## 🌆 Supported Cities

| City    | Latitude | Longitude |
| ------- | -------- | --------- |
| Colombo | 6.9271   | 79.8612   |
| Kandy   | 7.2906   | 80.6337   |
| Galle   | 6.0328   | 80.2168   |

Examples:

```bash
bun run dev Colombo
```

```bash
bun run dev Kandy
```

```bash
bun run dev Galle
```

---

## 🔀 Display Weather for All Cities

This feature demonstrates concurrent API requests using `Promise.all()`.

Run:

```bash
bun run dev --all
```

Example output:

```text
📍 Colombo
🌡 Temperature: 29.8°C

📍 Kandy
🌡 Temperature: 25.1°C

📍 Galle
🌡 Temperature: 28.3°C
```

Implementation:

```ts
await Promise.all([
  fetchWeather(...),
  fetchWeather(...),
  fetchWeather(...)
]);
```

---

## ✅ Validation Strategy

### Using `parse()`

```ts
WeatherSchema.parse(data);
```

Behavior:

```text
Valid Data   ✅ Returns data
Invalid Data ❌ Throws an error
```

### Using `safeParse()`

```ts
const result = WeatherSchema.safeParse(data);
```

Behavior:

```text
Valid Data   ✅ success = true
Invalid Data ✅ success = false
```

Example:

```ts
if (!result.success) {
  throw new Error("Invalid response structure");
}
```

---

## 🛡️ Error Handling

### API Request Validation

```ts
if (!response.ok) {
  throw new Error("Weather API request failed");
}
```

### Response Structure Validation

```ts
if (!result.success) {
  throw new Error("Invalid response structure");
}
```

### Runtime Exception Handling

```ts
try {
  // Application logic
} catch (error) {
  console.error(error);
}
```

---

## 📈 Runtime Benchmark

The Weather CLI was benchmarked using both Bun and Node.js.

### Benchmark Commands

Bun:

```bash
bun run dev Colombo
```

Node.js:

```bash
npx tsx src/index.ts Colombo
```

### Results

| Runtime    | Execution Time |
| ---------- | -------------- |
| Bun        | 718.95 ms      |
| Node + tsx | 2115.43 ms     |

### Conclusion

Bun executed the Weather CLI approximately **3× faster** than Node.js with `tsx` during testing.

This highlights:

- Faster startup performance
- Native TypeScript execution
- Reduced runtime overhead

---

## 📖 Learning Outcomes

Through this project, the following concepts were successfully applied:

- Bun Runtime
- TypeScript Strict Mode
- REST API Consumption
- Async Programming with `async/await`
- Promise Handling
- Runtime Schema Validation
- Zod `parse()` and `safeParse()`
- Error Handling
- CLI Development
- Concurrent Requests with `Promise.all()`
- Runtime Benchmarking

---

## 🎯 Phase 1 Objectives Achieved

- ✅ Bun project setup
- ✅ TypeScript configuration
- ✅ Open-Meteo API integration
- ✅ Async/await implementation
- ✅ CLI argument parsing
- ✅ Dynamic city lookup
- ✅ Zod validation
- ✅ `safeParse()` error handling
- ✅ `Promise.all()` concurrency
- ✅ Bun vs Node.js benchmarking

---

## 👨‍💻 Author

**Thesanya Wijayasundara**

Phase 1 Backend Engineering Intern Roadmap

Weather CLI built with Bun, TypeScript, and Zod.
