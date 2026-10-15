import app from "./fastify-server.js";
import corsPlugin from "./plugins/cors.js";
import swaggerPlugin from "./plugins/swagger.js";

await app.register(corsPlugin);
await app.register(swaggerPlugin);

app.get("/health", async () => {
  return {
    status: "healthy",
  };
});

export default app;