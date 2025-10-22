import { useState, type FormEvent } from "react";
import SearchForm from "./SearchForm";
import success from "/success.svg";
import { useFilmReviewAppContext } from "@/context/FilmReviewAppContext";
import { type Review } from "@/types/application.schema";

export default function ReviewForm() {
    const { addReview } = useFilmReviewAppContext();

    const [searchQueryFilmId, setSearchQueryFilmId] = useState<string | null>(
        null
    );
    const [reviewContent, setReviewContent] = useState<string>("");
    const [reviewSaved, setReviewSaved] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [characterLimitExceed, setcharacterLimitExceed] =
        useState<boolean>(false);

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        setError(false);
        e.preventDefault();
        console.log(searchQueryFilmId);
        console.log(reviewContent);
        // check for empty fields
        if (!searchQueryFilmId || !reviewContent.trim()) {
            setError(true);
            return;
        }
        // get deets to make review obj
        const newReview: Review = {
            filmId: searchQueryFilmId,
            content: reviewContent,
            createdAt: new Date().toISOString(),
        };
        addReview(searchQueryFilmId, newReview);
        setReviewSaved(true);
    };

    return (
        <section
            className={`w-full p-6 bg-white shadow-2xl flex items-center flex-col xl:pt-10 pb-20 min-h-[300px]`}
        >
            {reviewSaved ? (
                <div className="flex items-center gap-4 mt-20">
                    <img src={success} alt="" />
                    <span className="capitalize text-2xl">
                        review has been succesfully saved
                    </span>
                </div>
            ) : (
                <>
                    <div className="w-full md:w-2/3 mb-4 min-h-[24px]">
                        {error && (
                            <span className="text-red-500">
                                * Both film and review fields are required
                            </span>
                        )}
                    </div>
                    <div className="w-full md:w-2/3 mb-6">
                        <span className="capitalize">film</span>
                        <SearchForm
                            setSelectedFilmIdHandler={setSearchQueryFilmId}
                        ></SearchForm>
                    </div>
                    <form
                        action=""
                        onSubmit={onSubmitHandler}
                        className="flex flex-col w-full md:w-2/3 gap-10"
                    >
                        <label
                            htmlFor="review-content"
                            className="flex flex-col capitalize"
                        >
                            review content
                            <textarea
                                onChange={(e) => {
                                    if (e.target.value.length <= 855) {
                                        setcharacterLimitExceed(false);
                                        setReviewContent(e.target.value);
                                    } else {
                                        setcharacterLimitExceed(true);
                                    }
                                }}
                                value={reviewContent}
                                id="review-content"
                                name="review-content"
                                className={`border-2 p-2 rounded-sm h-[200px] overflow-auto`}
                            ></textarea>
                            <div className="min-h-[24px]">
                                {characterLimitExceed && (
                                    <span className="text-red-500">
                                        * Character limit has been exceeded.
                                    </span>
                                )}
                            </div>
                        </label>
                        <div className="w-full">
                            <button
                                className="capitalize border-2 border-mubi-grey px-10 py-1 rounded-sm hover:cursor-point"
                                aria-label="Save your review"
                            >
                                save
                            </button>
                        </div>
                    </form>
                </>
            )}
        </section>
    );
}
