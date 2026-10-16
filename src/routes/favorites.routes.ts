import { FastifyInstance } from "fastify";
import {
  createFavorite,
  getFavorites,
  getFavoriteById,
  updateFavorite,
  deleteFavorite,
} from "../services/favorites.service.js";
import {
  FavoritesResponseSchema,
  FavoriteResponseSchema,
  CreateFavoriteSchema,
} from "../schemas/favorite.schema.js";

export default async function (
  app: FastifyInstance
) {
  app.get(
  "/",
  {
    schema: {
      response: {
        200: FavoritesResponseSchema,
      },
    },
  },
  async () => {
    return getFavorites();
  }
);

  app.post(
  "/",
  {
    schema: {
      body: CreateFavoriteSchema,
      response: {
        200: FavoriteResponseSchema,
        404: {
          type: "object",
          properties: {
            message: { type: "string" },
          },
          required: ["message"],
        },
      },
    },
  },
  async (request: { body: unknown }) => {
    return createFavorite(request.body as any);
  }
);

app.get("/:id", async (request: any, reply) => {
  const favorite = getFavoriteById(
    request.params.id
  );

  if (!favorite) {
    return reply.code(404).send({
      message: "Favorite not found",
    });
  }

  return favorite;
});

app.put(
  "/:id",
  {
    schema: {
      body: CreateFavoriteSchema,
      response: {
        200: FavoriteResponseSchema,
        404: {
          type: "object",
          properties: {
            message: { type: "string" },
          },
          required: ["message"],
        },
      },
    },
  },
  async (request: any, reply) => {
    const favorite = updateFavorite(
      request.params.id,
      request.body
    );

    if (!favorite) {
      return reply.code(404).send({
        message: "Favorite not found",
      });
    }

    return favorite;
  }
);

app.delete(
  "/:id",
  {
    schema: {
      response: {
        404: {
          type: "object",
          properties: {
            message: { type: "string" },
          },
          required: ["message"],
        },
      },
    },
  },
  async (request: any, reply) => {
  const deleted = deleteFavorite(
    request.params.id
  );

  if (!deleted) {
    return reply.code(404).send({
      message: "Favorite not found",
    });
  }

  return {
    message: "Deleted successfully",
  };
  }
);
}

