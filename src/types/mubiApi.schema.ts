import { z } from "zod";

// Based on json shape found @ https://mubi-dev-assets.s3.amazonaws.com/dev-interview-films.json

export const CastSchema = z.object({
    id: z.string(),
    name: z.string(),
    credits: z.array(z.string()).default([])
});

export const FilmSchema = z.object({
    id: z.string(),
    title: z.string(),
    release_year: z.number(),
    genres: z.array(z.string()),
    cast: z.array(CastSchema).default([])
});

export const MubApiDataSchema = z.array(FilmSchema);

export type Cast = z.infer<typeof CastSchema>;
export type Film = z.infer<typeof FilmSchema>;
export type MubiApiData = z.infer<typeof MubApiDataSchema>;