import addButton from "/add.svg";
import SearchForm from "./SearchForm";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { useFilmReviewAppContext } from "@/context/FilmReviewAppContext";

/* 
Render the main review list view
*/
export default function Home() {
    const { filmsWithReviews } = useFilmReviewAppContext();
    const [searchQuery, setSearchQuery] = useState<string | null>(null);

    useEffect(() => {
        console.log(searchQuery);
    }, [searchQuery]);

    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <section
                id="home-header"
                className="w-full flex justify-center relative items-center bg-mubi-grey py-4"
            >
                <h1 className="capitalize text-3xl text-white">film log</h1>
                <button
                    className="absolute right-8 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Add new review"
                >
                    <img src={addButton} alt="" />
                </button>
            </section>
            <section
                id="home-data-container"
                className="w-full flex flex-col py-6 h-full"
            >
                <SearchForm setSearchQueryHandler={setSearchQuery} />
                <section
                    id="film-review-list"
                    className="flex flex-col gap-6 items-center py-10 overflow-y-scroll w-full"
                >
                    {Array.from(filmsWithReviews.values()).map((review) => (
                        <ReviewCard
                            key={review.id}
                            reviewData={review}
                        ></ReviewCard>
                    ))}
                </section>
            </section>
        </div>
    );
}
