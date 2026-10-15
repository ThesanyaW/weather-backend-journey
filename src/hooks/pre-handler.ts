import { FastifyInstance } from "fastify";

export async function registerPreHandlerHook(
  app: FastifyInstance
) {
  app.addHook("preHandler", async (request) => {
    request.log.info(
      `[preHandler] Processing ${request.url}`
    );
  });
}