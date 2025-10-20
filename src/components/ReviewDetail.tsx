import { useParams, Link } from "react-router";
import imagePlaceholder from "/image-placeholder.svg";
import { LOREM } from "@/constants";
import { useFilmReviewAppContext } from "@/context/FilmReviewAppContext";

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

    return reviewData ? (
        <div
            id="review-detail-container"
            className="h-screen flex flex-col items-center gap-20"
        >
            <section
                id="review-detail-header"
                className="w-full flex justify-between items-center bg-mubi-grey py-4 px-4"
            >
                <Link
                    to="/"
                    className="hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    back
                </Link>
                <button
                    className="hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Delete current review"
                >
                    trash
                </button>
            </section>
            <section
                id="review-detail-main-content"
                className="w-full xl:w-2/3 flex flex-col gap-10"
            >
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 flex flex-col mb-4 md:mb-0">
                        <h3 className="capitalize font-semibold text-2xl mb-4">
                            {reviewData.title}
                        </h3>
                        <span className="text-lg">{reviewData.director}</span>
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
                <div id="review-detail-content">{LOREM}</div>
            </section>
        </div>
    ) : (
        <div>Whoops, this isn't working</div>
    );
}
