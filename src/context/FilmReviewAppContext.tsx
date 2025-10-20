import { createContext, useContext, useState, useEffect } from "react";
import {
    type Review,
    type FilmWithReview,
} from "@/types/application.schema";
import useFetchMubiApiData from "@/hooks/useFetchMubiApiData";
import { dummyReviews } from "@/constants";
import { combineFilmsAndReviews } from "@/helpers";

interface FilmReviewAppContext {
    filmsWithReviews: Map<string, FilmWithReview>;
}

const FilmReviewAppContext = createContext<FilmReviewAppContext | null>(null);

/* 
Top level context provider for Review application. Lifting up app data into it's own
context saves passing review state to canonical routes (which can go stale or get erased on refresh).
*/
function FilmReviewAppProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const { mubiApiData, mubiDataLoading, mubiDataError } =
        useFetchMubiApiData();
    // need a hook to fetch review data in local storage as well
    const reviewData: Review[] = Array.from(dummyReviews.values());

    const [filmsWithReviews, setFilmsWithReviews] = useState<
        Map<string, FilmWithReview>
    >(new Map());

    useEffect(() => {
        if (mubiApiData) {
            const combinedFilmsAndReviews = combineFilmsAndReviews(
                mubiApiData,
                reviewData
            );
            if (combinedFilmsAndReviews) {
                setFilmsWithReviews(combinedFilmsAndReviews);
            }
        }
    }, [mubiApiData]);

    return (
        <FilmReviewAppContext.Provider
            value={{
                filmsWithReviews,
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

export {
    FilmReviewAppProvider,
    useFilmReviewAppContext
}
