import { FastifyInstance } from "fastify";

export async function registerOnRequestHook(
  app: FastifyInstance
) {
  app.addHook("onRequest", async (request) => {
    request.log.info(
      `[onRequest] ${request.method} ${request.url}`
    );
  });
}