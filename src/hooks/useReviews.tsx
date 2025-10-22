import { useState, useEffect } from "react";
import { type Review } from "@/types/application.schema";

const STORAGE_KEY = "mubi_app_reviews";

/* 
Retrieve previous reviews from localstorage (persistence) and load them
into state. Expose convience functions to create and delete reviews.

@hook
*/
export default function useReviews() {
    const [reviewsError, setReviewsError] = useState<string | null>(null);
    const [reviews, setReviews] = useState<Map<string, Review>>(() => {
        // init current state of reviews
        try {
            const storedReviews = localStorage.getItem(STORAGE_KEY);
            if (!storedReviews) {
                return new Map<string, Review>();
            }
            const parsedReviewData = JSON.parse(storedReviews) as [
                string,
                Review
            ][];

            return new Map(parsedReviewData);
        } catch (error) {
            console.error(`Failed to initialize reviews: ${error}`);
            return new Map<string, Review>();
        }
    });

    // persist changes when a review is updated.
    useEffect(() => {
        try {
            const serializedReviews = JSON.stringify(
                Array.from(reviews.entries())
            );
            localStorage.setItem(STORAGE_KEY, serializedReviews);
        } catch (error) {
            setReviewsError(`Local storage error: ${error}`);
        }
    }, [reviews]);

    // handlers create, delete
    const addReview = (reviewId: string, review: Review) => {
        const updatedReviewMap = new Map(reviews);
        updatedReviewMap.set(reviewId, review);
        setReviews(updatedReviewMap);
    };

    const deleteReview = (reviewId: string) => {
        const updatedReviewMap = new Map(reviews);
        updatedReviewMap.delete(reviewId);
        setReviews(updatedReviewMap);
    };

    return { reviews, addReview, deleteReview, reviewsError };
}
