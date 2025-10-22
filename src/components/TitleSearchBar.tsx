import Select from "react-select";
import { useFilmReviewAppContext } from "@/context/FilmReviewAppContext";
import { REACT_SELECT_STYLES } from "@/constants";
import type { MubiFilm } from "@/types/mubiApi.schema";

type TitleSearchFormProps = {
    setSelectedFilmIdHandler: (filmId: string) => void;
    placeholder?: string;
};

/* 
Filter review film review results by title.

*/
export default function TitleSearchBar({
    setSelectedFilmIdHandler,
    placeholder,
}: TitleSearchFormProps) {
    const { mubiApiData } = useFilmReviewAppContext();

    type FilmOption = {
        value: string;
        label: string;
        original: MubiFilm;
    };

    // Map films to react-select options
    const filmOptions: FilmOption[] = mubiApiData.map((film: MubiFilm) => ({
        value: film.id,
        label: film.title,
        original: film,
    }));

    return (
        <Select
            options={filmOptions}
            onChange={(filmOption: FilmOption | null) => {
                if (filmOption) {
                    setSelectedFilmIdHandler(filmOption?.value ?? null);
                } else {
                    setSelectedFilmIdHandler("");
                }
            }}
            placeholder={placeholder}
            isClearable
            styles={REACT_SELECT_STYLES}
            className="w-full"
        />
    );
}
