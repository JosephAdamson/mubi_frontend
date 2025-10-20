import { createContext, useContext, useState, useEffect } from "react";
import { type Review, type FilmWithReview, type AppError } from "@/types/application.schema";
import useFetchMubiApiData from "@/hooks/useFetchMubiApiData";
import { combineFilmsAndReviews } from "@/helpers";
import useReviews from "@/hooks/useReviews";

interface FilmReviewAppContext {
    mubiDataLoading: boolean;
    mubiDataError: string | null;
    filmsWithReviews: Map<string, FilmWithReview>;
    addReview: (reviewId: string, review: Review) => void;
    deleteReview: (reviewId: string) => void;
    errors: AppError[];
}

const FilmReviewAppContext = createContext<FilmReviewAppContext | null>(null);

/* 
Top level context provider for Review application. Lifting up app data into it's own
context saves passing review state to canonical routes (which can go stale or get erased on refresh).

@context
*/
function FilmReviewAppProvider({ children }: { children: React.ReactNode }) {
    const { mubiApiData, mubiDataLoading, mubiDataError } =
        useFetchMubiApiData();
    const { reviews, addReview, deleteReview, reviewsError } = useReviews();
    const reviewData: Review[] = Array.from(reviews.values());
    const [errors, setErrors] = useState<AppError[]>([]);
;
    const [filmsWithReviews, setFilmsWithReviews] = useState<
        Map<string, FilmWithReview>
    >(new Map());

    // handles our data
    useEffect(() => {
        if (mubiApiData) {
            const combinedFilmsAndReviews = combineFilmsAndReviews(
                mubiApiData,
                reviewData
            );
            if (combinedFilmsAndReviews) {
                setFilmsWithReviews(combinedFilmsAndReviews);
            }
        } else {
            
        }
    }, [mubiApiData]);

    // manages any errors we might have
    useEffect(() => {
        if (mubiDataError) {
            setErrors(prev => [...prev, {source: "mubiApi", message: mubiDataError}]);
        } 

        if (reviewsError) {
            setErrors(prev => [...prev, {source: "reviews", message: reviewsError}]);
        }
    }, [mubiDataError, reviewsError]);

    return (
        <FilmReviewAppContext.Provider
            value={{
                filmsWithReviews,
                addReview,
                deleteReview,
                mubiDataLoading,
                mubiDataError,
                errors
            }}
        >
            {children}
        </FilmReviewAppContext.Provider>
    );
}

function useFilmReviewAppContext() {
    const context = useContext(FilmReviewAppContext);
    if (!context) {
        throw new Error(
            "useFilmReviewApp must be used inside FilmReviewProvider"
        );
    }
    return context;
}

export { FilmReviewAppProvider, useFilmReviewAppContext };
