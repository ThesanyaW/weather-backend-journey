import { v4 as uuid } from "uuid";
import type { Favorite } from "../types/favorite.js";

const favorites: Favorite[] = [];

export function createFavorite(
  data: Omit<Favorite, "id">
): Favorite {
  const favorite = {
    id: uuid(),
    ...data,
  };

  favorites.push(favorite);

  return favorite;
}

export function getFavorites() {
  return favorites;
}