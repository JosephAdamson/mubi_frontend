import { useFilmReviewAppContext } from "@/context/FilmReviewAppContext";
import { type MubiFilm } from "@/types/mubiApi.schema";
import Select from "react-select";
import { REACT_SELECT_STYLES } from "@/constants";

type GenreSearchBarProps = {
    placeholder: string;
    setSelectedGenresHandler: (genres: string[]) => void;
};

/*
Filter film review results by genre. 

@component
*/
export default function GenreSearchBar({
    placeholder,
    setSelectedGenresHandler,
}: GenreSearchBarProps) {
    const { mubiApiData } = useFilmReviewAppContext();

    // extract our genre options
    type GenreOption = {
        value: string;
        label: string;
    };

    const uniqueGenreOptions: GenreOption[] = Array.from(
        mubiApiData.reduce((genreSet: Set<string>, film: MubiFilm) => {
            film.genres.forEach((genre: string) => {
                genreSet.add(genre);
            });
            return genreSet;
        }, new Set<string>())
    ).map((genre) => {
        return {
            value: genre,
            label: genre,
        };
    });

    return (
        <Select
            placeholder={placeholder}
            options={uniqueGenreOptions}
            onChange={(options) => {
                const genres = options.map(option => option.value);
                console.log(genres);
                setSelectedGenresHandler(genres);
            }}
            isMulti
            isClearable
            styles={REACT_SELECT_STYLES}
        />
    );
}
