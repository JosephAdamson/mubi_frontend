import addButton from "/add.svg";
import TitleSearchBar from "./TitleSearchBar";
import GenreSearchBar from "./GenreSearchBar";
import { useState } from "react";
import ReviewCard from "./ReviewCard";
import { useFilmReviewAppContext } from "@/context/FilmReviewAppContext";
import Modal from "./Modal";
import ReviewForm from "./ReviewForm";
import mubiLogo from "/logo.svg";
import vega from "/vincent-vega.gif";

/* 

Render the main review list view.

@component
*/
export default function Home() {
    const { filmsWithReviews } = useFilmReviewAppContext();
    const [searchQueryFilmId, setSearchQueryFilmId] = useState<string | null>(
        null
    );
    const [searchQueryGenres, setSearchQueryGenres] = useState<string[] | null>(
        null
    );
    const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false);

    // I've kept the filtering logic seperate here, just for readibility.
    // filter by title
    let displayReviews = searchQueryFilmId
        ? Array.from(filmsWithReviews.values()).filter(
              (review) => review.id === searchQueryFilmId
          )
        : Array.from(filmsWithReviews.values());

    // filter by genre
    displayReviews =
        searchQueryGenres && searchQueryGenres.length !== 0
            ? displayReviews.filter((review) => {
                  return searchQueryGenres.every((genre) =>
                      review.genres.includes(genre)
                  );
              })
            : displayReviews;

    return (
        <div className="min-h-screen flex flex-col">
            <section
                id="home-header"
                className="w-full flex justify-between items-center bg-mubi-blue px-6 xl:px-10 min-h-[100px] sticky top-0 left-0 z-30"
            >
                <img
                    src={mubiLogo}
                    style={{
                        height: "100px",
                        width: "100px",
                    }}
                    alt=""
                />
                <button
                    onClick={() => {
                        setReviewModalOpen(true);
                    }}
                    className="right-8 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Add new review"
                >
                    <img src={addButton} alt="" />
                </button>
            </section>
            <section
                id="home-data-container"
                className="w-full flex flex-col h-full"
            >
                <div
                    id="filter-bar"
                    className="w-full flex flex-col lg:flex-row justify-center items-center 
                    py-4 sticky top-[100px] bg-mubi-light-grey gap-4 border-b-[1.2px] 
                    border-mubi-grey"
                >
                    <div className="w-full md:w-2/3 xl:w-4/12 px-4">
                        <TitleSearchBar
                            placeholder={"Search your review logs..."}
                            setSelectedFilmIdHandler={setSearchQueryFilmId}
                        />
                    </div>
                    <div className="w-full md:w-2/3 xl:w-1/4 px-4">
                        <GenreSearchBar
                            placeholder={"Filter by genre..."}
                            setSelectedGenresHandler={setSearchQueryGenres}
                        />
                    </div>
                </div>
                <section
                    id="film-review-list"
                    className="flex flex-col gap-6 items-center"
                >
                    {displayReviews.length > 0 ? (
                        displayReviews.map((review) => (
                            <ReviewCard
                                key={review.id}
                                reviewData={review}
                            ></ReviewCard>
                        ))
                    ) : (
                        <div className="flex flex-col gap-6 mt-10">
                            <div className="flex flex-col items-center text-xl">
                                <p>Oops, no reviews here yet.</p>
                                <p>
                                    Click the{" "}
                                    <span className="font-semibold">
                                        icon in the top right
                                    </span>{" "}
                                    to add a new review to your log.
                                </p>
                            </div>
                            <img src={vega} alt="" />
                        </div>
                    )}
                </section>
            </section>
            <Modal
                isOpen={reviewModalOpen}
                setIsOpenHandler={setReviewModalOpen}
            >
                <ReviewForm />
            </Modal>
        </div>
    );
}
