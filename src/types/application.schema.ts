import { z } from "zod";

// type(s) defined to be used in-application, I've use snake case here to keep it consistent 
// with the other json derived schemas, forgive me.

// Define shape of data to be stored in localstorage.
export const ReviewSchema = z.object({
    filmId: z.string(),
    content: z.string(),
    createdAt: z.string()
});

// Combined data, composed from locally stored review data and film 
// data from mubi API. Type passed to components for render.
export const FilmWithReviewSchema = z.object({
    id: z.string(),
    title: z.string(),
    director: z.string(),
    releaseYear: z.number(),
    imageURL: z.url(),
    videoURL: z.url(),
    reviewContent: z.string(),
    genres: z.array(z.string()),
    createdAt: z.string()
});

export const AppErrorSchema = z.object({
    source: z.enum(["mubiApi", "reviews", "unknown"]),
    message: z.string()
});

export type Review = z.infer<typeof ReviewSchema>;
export type FilmWithReview = z.infer<typeof FilmWithReviewSchema>;
export type AppError = z.infer<typeof AppErrorSchema>;