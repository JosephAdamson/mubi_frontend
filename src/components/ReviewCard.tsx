import { Link } from "react-router";
import { truncateText } from "@/helpers";

type ReviewCardProps = {
    id: string;
    title: string;
    director: string;
    date: number;
    imgURL: string;
    content: string;
};

export default function ReviewCard({
    id,
    title,
    director,
    date,
    imgURL,
    content,
}: ReviewCardProps) {
    return (
        <div className="w-full sm:w-2/3 xl:w-3/5 py-6 px-4">
            <section className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex flex-col mb-4 md:mb-0">
                    <h3 className="capitalize font-semibold text-2xl mb-4">
                        {title}
                    </h3>
                    <span className="text-lg">{director}</span>
                    <span className="text-lg">{date}</span>
                </div>
                <div className="w-full md:w-1/2 flex justify-center border-mubi-grey border-2 rounded-sm">
                    <img src={imgURL} alt="" />
                </div>
            </section>
            <p className="mt-10 mb-6">{truncateText(content)}</p>
            <Link
                className="capitalize font-semibold text-mubi-blue hover:underline"
                to={`/reviews/${id}`}
            >
                read more
            </Link>
        </div>
    );
}
