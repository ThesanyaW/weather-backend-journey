import { FastifyInstance } from "fastify";
import {
  createFavorite,
  getFavorites,
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
      },
    },
  },
  async (request: { body: unknown }) => {
    return createFavorite(request.body as any);
  }
);
}
