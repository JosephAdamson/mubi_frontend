import { Link } from "react-router";
import { truncateText } from "@/helpers";
import { type FilmWithReview } from "@/types/application.schema";
import imagePlaceholder from "/image-placeholder.svg";

type ReviewCardProps = {
    reviewData: FilmWithReview;
};

/* 
Card view for review data. Used for homepage listing.

@component
*/
export default function ReviewCard({ reviewData }: ReviewCardProps) {

    return (
        <div className="w-full md:w-2/3 xl:w-6/12 py-6 px-4 border-b-[1.2px] border-mubi-grey">
            <section className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex flex-col mb-4 md:mb-0">
                    <h3 className="capitalize font-semibold text-2xl mb-4">
                        {reviewData.title}
                    </h3>
                    <span className="text-lg">{reviewData.director}</span>
                    <span className="text-lg">{reviewData.releaseYear}</span>
                    <span className="text-lg">{reviewData.genres.join(", ")}</span>
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
            </section>
            <p className="mt-10 mb-6">
                {truncateText(reviewData.reviewContent)}
            </p>
            <Link
                className="capitalize font-semibold text-mubi-blue hover:underline"
                to={`/reviews/${reviewData.id}`}
                state={reviewData}
            >
                read more
            </Link>
        </div>
    );
}
