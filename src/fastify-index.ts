import app from "./fastify-app.js";

const port = Number(process.env.PORT ?? 3000);

try {
  await app.listen({
    port,
    host: "0.0.0.0",
  });

  app.log.info(
    `Fastify server running on port ${port}`
  );
} catch (error) {
  app.log.error(error);
  process.exit(1);
}