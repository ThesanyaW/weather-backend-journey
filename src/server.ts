import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Weather API");
});

export default app;