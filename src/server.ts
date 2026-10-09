import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Weather API");
});

app.get("/weather/:city", async (c) => {
  const city = c.req.param("city");

  return c.json({
    city,
  });
});

export default app;