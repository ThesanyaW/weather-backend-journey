import { Type } from "@sinclair/typebox";

export const CreateFavoriteSchema = Type.Object({
  city: Type.String({
    minLength: 2,
  }),

  country: Type.String({
    minLength: 2,
  }),

  notes: Type.Optional(
    Type.String()
  ),
});

export const FavoriteResponseSchema =
  Type.Object({
    id: Type.String(),

    city: Type.String(),

    country: Type.String(),

    notes: Type.Optional(
      Type.String()
    ),
  });

export const FavoritesResponseSchema =
  Type.Array(
    FavoriteResponseSchema
  );

export const FavoriteParamsSchema = Type.Object({
  id: Type.String(),
});