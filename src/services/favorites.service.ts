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

export function getFavoriteById(id: string) {
  return favorites.find(
    (favorite) => favorite.id === id
  );
}

export function updateFavorite(
  id: string,
  data: Omit<Favorite, "id">
) {
  const favorite = favorites.find(
    (favorite) => favorite.id === id
  );

  if (!favorite) {
    return null;
  }

  favorite.city = data.city;
  favorite.country = data.country;
  favorite.notes = data.notes;

  return favorite;
}

export function deleteFavorite(id: string) {
  const index = favorites.findIndex(
    (favorite) => favorite.id === id
  );

  if (index === -1) {
    return false;
  }

  favorites.splice(index, 1);

  return true;
}