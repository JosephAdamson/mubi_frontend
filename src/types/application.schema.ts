import { z } from "zod";

// type(s) defined to be used in-application, I've use snake case here to keep it consistent 
// with the other json derived schemas, forgive me.
export const ReviewSchema = z.object({
    id: z.string(),
    film_id: z.string(),
    content: z.string(),
    created_at: z.string()
});

export type Review = z.infer<typeof ReviewSchema>;