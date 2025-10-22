import { useParams, Link } from "react-router";
import imagePlaceholder from "/image-placeholder.svg";
import { useFilmReviewAppContext } from "@/context/FilmReviewAppContext";
import chevronLeft from "/chevron-left.svg";
import trashcan from "/trashcan.svg";
import deadComputer from "/dead-computer.svg";

/* 
Main view for user-generated film review.

@component
*/
export default function ReviewDetail() {
    const { id } = useParams();
    const { filmsWithReviews } = useFilmReviewAppContext();

    if (!id) {
        return <div>Whoops</div>;
    }

    const reviewData = filmsWithReviews.get(id)
        ? filmsWithReviews.get(id)
        : null;

    return (
        <div
            id="review-detail-container"
            className="h-screen flex flex-col items-center gap-20"
        >
            <section
                id="review-detail-header"
                className="w-full min-h-[100px] flex justify-between items-center bg-mubi-blue py-4 px-8"
            >
                <Link
                    to="/"
                    className="hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <img src={chevronLeft} alt="" />
                </Link>
                <button
                    className="hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Delete current review"
                >
                    <img src={trashcan} alt="" />
                </button>
            </section>
            <section
                id="review-detail-main-content"
                className="w-full xl:w-2/3 flex flex-col gap-10"
            >
                {reviewData ? (
                    <>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 flex flex-col mb-4 md:mb-0">
                                <h3 className="capitalize font-semibold text-2xl mb-4">
                                    {reviewData.title}
                                </h3>
                                <span className="text-lg">
                                    {reviewData.director}
                                </span>
                                <span className="text-lg">
                                    {reviewData.releaseYear}
                                </span>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-center border-mubi-grey border-2 rounded-sm">
                                <img
                                    src={
                                        reviewData.imageURL
                                            ? reviewData.imageURL
                                            : imagePlaceholder
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div id="review-detail-content">
                            {reviewData.reviewContent}
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center text-xl">
                        <p>
                            Oops, looks like we could not retrieve your review...
                        </p>
                        <img
                            src={deadComputer}
                            alt=""
                            style={{
                                width: 200,
                                height: 300,
                            }}
                        />
                    </div>
                )}
            </section>
        </div>
    );
}
