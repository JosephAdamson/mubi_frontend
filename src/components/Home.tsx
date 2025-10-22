import addButton from "/add.svg";
import SearchForm from "./SearchForm";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { useFilmReviewAppContext } from "@/context/FilmReviewAppContext";
import Modal from "./Modal";
import ReviewForm from "./ReviewForm";
import mubiLogo from "/logo.svg";
import vega from "/vincent-vega.gif";

/* 
TODO
- Add genre search
- Think about loading of card items

Render the main review list view
*/
export default function Home() {
    const { filmsWithReviews } = useFilmReviewAppContext();
    const [searchQueryFilmId, setSearchQueryFilmId] = useState<String | null>(
        null
    );
    const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false);

    const displayReviews = searchQueryFilmId
        ? Array.from(filmsWithReviews.values()).filter(
              (review) => review.id === searchQueryFilmId
          )
        : Array.from(filmsWithReviews.values());

    useEffect(() => {
        console.log(searchQueryFilmId);
        console.log(displayReviews);
        if (searchQueryFilmId === "") {
            console.log("nullable");
        }
    }, [searchQueryFilmId]);

    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <section
                id="home-header"
                className="w-full flex justify-between items-center bg-mubi-blue px-6 xl:px-10 min-h-[100px]"
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
                className="w-full flex flex-col py-6 h-full"
            >
                <div className="w-full flex flex-col items-center py-4">
                    <div className="w-full md:w-2/3 xl:w-6/12 px-4">
                        <SearchForm
                            placeholder={"Search your review logs..."}
                            setSelectedFilmIdHandler={setSearchQueryFilmId}
                        />
                    </div>
                </div>
                <section
                    id="film-review-list"
                    className="flex flex-col gap-6 items-center py-10 overflow-y-scroll"
                >
                    {displayReviews.length > 0 ? (
                        displayReviews.map((review) => (
                            <ReviewCard
                                key={review.id}
                                reviewData={review}
                            ></ReviewCard>
                        ))
                    ) : (
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-xl">
                                <p>
                                    Oops looks like you haven't reviewed this
                                    film yet.
                                </p>
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
