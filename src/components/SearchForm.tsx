import { useState, type FormEvent } from "react";
import searchIcon from "/search-icon.svg";
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from "@headlessui/react";
import { type MubiFilm } from "@/types/mubiApi.schema";
import { useFilmReviewAppContext } from "@/context/FilmReviewAppContext";

type SearchFormProps = {
    setSelectedFilmIdHandler: (filmId: string) => void;
    placeholder?: string
};

/* 
Search form with controlled elements, search for film by name.

@component
@param      function    setSearchQuery
*/
export default function SearchForm({
    setSelectedFilmIdHandler,
    placeholder
}: SearchFormProps) {
    const { mubiApiData } = useFilmReviewAppContext();
    const [selectedFilmId, setSelectedFilmId] = useState<string | undefined>(
        undefined
    );
    const [query, setQuery] = useState<string>("");

    const filteredFilms =
        query === ""
            ? mubiApiData
            : mubiApiData.filter((film) => {
                  return film.title.toLowerCase().includes(query.toLowerCase());
              });

    const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedFilmId !== undefined) {
            console.log(selectedFilmId);
            setSelectedFilmIdHandler(selectedFilmId);
        }
    };

    return (
        <form
            action=""
            onSubmit={onSubmitHandler}
            className="h-fit w-full flex justify-center items-center relative"
        >
            <Combobox<MubiFilm>
                onChange={(film) => {
                    console.log(film);
                    if (film) {
                        setSelectedFilmId(film.id);
                    } else {
                        setSelectedFilmId("");
                    }
                    setQuery(film?.title ?? "");
                }}
            >
                <div className="relative w-full">
                    <ComboboxInput
                        placeholder={placeholder}
                        className="w-full border-2 border-gray-300 rounded-sm p-2"
                        aria-label="Film query"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        onBlur={() => selectedFilmId && setSelectedFilmIdHandler(selectedFilmId)}
                    />
                    <ComboboxOptions className="absolute mt-1 w-full bg-white border border-gray-300 rounded-sm max-h-60 overflow-auto z-10">
                        {filteredFilms.map((film) => (
                            <ComboboxOption
                                key={film.id}
                                value={film}
                                className="cursor-pointer px-2 py-1 hover:bg-blue-100 data-selected:bg-blue-200"
                            >
                                {film.title}
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </div>
            </Combobox>
            <button className="p-2 hover:cursor-pointer absolute right-0 hover:brightness-75">
                <img src={searchIcon} alt="" />
            </button>
        </form>
    );
}
