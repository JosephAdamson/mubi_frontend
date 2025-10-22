import { z } from "zod";

// Based on json shape found @ https://mubi-dev-assets.s3.amazonaws.com/dev-interview-films.json
// we are using snake case here to be consistent with the API.
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
    cast: z.array(CastSchema).default([]),
    image_url: z.url(),
    video_url: z.url()
});

export const MubiApiDataSchema = z.array(FilmSchema);

export type MubiCast = z.infer<typeof CastSchema>;
export type MubiFilm = z.infer<typeof FilmSchema>;
export type MubiApiData = z.infer<typeof MubiApiDataSchema>;