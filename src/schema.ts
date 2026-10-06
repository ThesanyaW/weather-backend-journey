import { z } from "zod";

export const WeatherSchema = z.object({
  current: z.object({
    temperature_2m: z.number(),
    wind_speed_10m: z.number()
  })
});

export type Weather = z.infer<typeof WeatherSchema>;