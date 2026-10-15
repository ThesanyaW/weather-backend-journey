import { FastifyInstance } from "fastify";

export async function registerOnResponseHook(
  app: FastifyInstance
) {
  app.addHook(
    "onResponse",
    async (request, reply) => {
      request.log.info(
        `[onResponse] ${reply.statusCode}`
      );
    }
  );
}