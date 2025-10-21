import { useState, type FormEvent } from "react";
import searchIcon from "/search-icon.svg";

type SearchFormProps = {
    setSearchQueryHandler: (searchQuery: string) => void;
};

/* 
Search form with controlled elements, search for film by name.

@component
@param      function    setSearchQuery
*/
export default function SearchForm({ setSearchQueryHandler }: SearchFormProps) {
    const [searchInputvalue, setSearchInputValue] = useState<string>("");

    const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchQueryHandler(searchInputvalue);
    };

    return (
        <form
            action=""
            onSubmit={onSubmitHandler}
            className="h-fit w-full flex justify-center items-center relative"
        >
                <input
                    type="text"
                    className="w-full p-2 border-2 border-mubi-grey rounded-sm"
                    onChange={(e) => {
                        setSearchInputValue(e.target.value);
                    }}
                    onBlur={() => {
                        setSearchQueryHandler(searchInputvalue);
                    }}
                    value={searchInputvalue}
                />
                <button className="p-2 hover:cursor-pointer absolute right-0 hover:brightness-75">
                    <img src={searchIcon} alt="" />
                </button>

        </form>
    );
}
