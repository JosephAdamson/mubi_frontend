import { type MubiApiData } from "./types/mubiApi.schema";
import {
    type Review,
    type FilmWithReview,
    FilmWithReviewSchema,
} from "./types/application.schema";
import { z } from "zod";

/* 
Returns a clipped version of a string with an ellipsis tacked on the end.

@param  string  text
*/
function truncateText(text: string) {
    if (text && text.length > 0) {
        return text.length >= 200 ? `${text.slice(0, 200)}...` : `${text}...`;
    }
}

/* 
Combines our Mubi film API data with review data (stored locally) into a object
type that we can pass to our UI components.

@param  MubiApiData     filmApiData
@param  Review[]        reviewData
*/
function combineFilmsAndReviews(
    filmApiData: MubiApiData,
    reviewData: Review[]
) {
    try {
        const reviewMap = new Map<string, FilmWithReview>();
        for (let review of reviewData) {
            const film = filmApiData.find((film) => film.id === review.filmId);

            if (!film) {
                return null;
            }

            // just in case of multiple directors
            let directorResult = film.cast
                .filter((castMember) => castMember.credits.includes("Director"))
                .map((castMember) => castMember.name);

            const director = directorResult
                ? directorResult.join(", ")
                : "unknown";

            const combinedData: FilmWithReview = {
                id: film.id,
                title: film.title,
                director: director,
                releaseYear: film.release_year,
                imageURL: film.image_url,
                videoURL: film.video_url,
                reviewContent: review.content,
                createdAt: review.createdAt,
            };

            const validatedCombinedData =
                FilmWithReviewSchema.parse(combinedData);
            reviewMap.set(film.id, validatedCombinedData);
        }

        return reviewMap;
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error(error.issues);
        } else if (error instanceof Error) {
            console.log(error);
        }
    }
}

export { truncateText, combineFilmsAndReviews };
