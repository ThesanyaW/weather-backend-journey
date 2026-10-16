import fp from "fastify-plugin";

export default fp(async (app) => {
  app.setErrorHandler(
    (error, request, reply) => {
      request.log.error(error);

      const status =
        typeof error === "object" &&
        error !== null &&
        "statusCode" in error &&
        typeof error.statusCode === "number"
          ? error.statusCode
          : 500;

      const detail =
        error instanceof Error ? error.message : String(error);

      reply.status(status).send({
        type:
          status === 400
            ? "/errors/validation"
            : "/errors/internal",

        title:
          status === 400
            ? "Validation Error"
            : "Internal Server Error",

        status,

        detail,

        instance: request.url,
      });
    }
  );
});