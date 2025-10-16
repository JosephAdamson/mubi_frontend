import addButton from "/add.svg";
import SearchForm from "./SearchForm";
import type { MubiApiData } from "@/types/mubiApi.schema";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import imagePlaceholder from "/image-placeholder.svg";

type HomeProps = {
    films: MubiApiData;
};

// dummy review data coming soon
const LOREM = `Lorem ipsum dolor sit amet consectetur adipiscing elit. 
Placerat in id cursus mi pretium tellus duis. Urna tempor pulvinar vivamus fringilla lacus nec metus. 
Integer nunc posuere ut hendrerit semper vel class. 
Conubia nostra inceptos himenaeos orci varius natoque penatibus. 
Mus donec rhoncus eros lobortis nulla molestie mattis. 
Purus est efficitur laoreet mauris pharetra vestibulum fusce. 
Sodales consequat magna ante condimentum neque at luctus. 
Ligula congue sollicitudin erat viverra ac tincidunt nam. 
Lectus commodo augue arcu dignissim velit aliquam imperdiet. 
Cras eleifend turpis fames primis vulputate ornare sagittis. 
Libero feugiat tristique accumsan maecenas potenti ultricies habitant. 
Cubilia curae hac habitasse platea dictumst lorem ipsum. 
Faucibus ex sapien vitae pellentesque sem placerat in. Tempus leo eu aenean sed diam urna tempor.`;

export default function Home({ films }: HomeProps) {
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
                    {/* dummy data */}
                    <ReviewCard
                        id={"apocalypse-now"}
                        title={"Apocalypse Now"}
                        director={"Fracis Ford Coppola"}
                        date={1972}
                        imgURL={imagePlaceholder}
                        content={LOREM}
                    />
                    <ReviewCard
                        id={"apocalypse-now"}
                        title={"Apocalypse Now"}
                        director={"Fracis Ford Coppola"}
                        date={1972}
                        imgURL={imagePlaceholder}
                        content={LOREM}
                    />
                    <ReviewCard
                        id={"apocalypse-now"}
                        title={"Apocalypse Now"}
                        director={"Fracis Ford Coppola"}
                        date={1972}
                        imgURL={imagePlaceholder}
                        content={LOREM}
                    />
                </section>
            </section>
        </div>
    );
}
