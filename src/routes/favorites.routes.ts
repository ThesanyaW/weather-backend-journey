import {
  createFavorite,
  getFavorites,
} from "../services/favorites.service.js";

export default async function (
  app: any
) {
  app.get("/", async () => {
    return getFavorites();
  });

  app.post("/", async (request: any) => {
    return createFavorite(
      request.body as any
    );
  });
}
