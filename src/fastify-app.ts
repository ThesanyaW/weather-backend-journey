import app from "./fastify-server.js";
import corsPlugin from "./plugins/cors.js";
import swaggerPlugin from "./plugins/swagger.js";
import {
  registerOnRequestHook,
} from "./hooks/on-request.js";

import {
  registerPreHandlerHook,
} from "./hooks/pre-handler.js";

import {
  registerOnResponseHook,
} from "./hooks/on-response.js";
import favoritesRoutes
  from "./routes/favorites.routes.js";

await app.register(corsPlugin);
await app.register(swaggerPlugin);
await registerOnRequestHook(app);
await registerPreHandlerHook(app);
await registerOnResponseHook(app);
await app.register(
  favoritesRoutes,
  {
    prefix: "/favorites",
  }
);

app.get("/health", async () => {
  return {
    status: "healthy",
  };
});

export default app;