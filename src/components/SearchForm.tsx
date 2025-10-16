import { useState, type ChangeEvent, type FormEvent } from "react";
import searchIcon from "/search-icon.svg";

type SearchFormProps = {
    setSearchQueryHandler: (searchQuery: string) => void;
};

/* 
Search form with controlled elements, serach for film by name

@component
@param      function    setSearchQuery
*/
export default function SearchForm({ setSearchQueryHandler }: SearchFormProps) {
    const [searchInputvalue, setSearchInputValue] = useState<string>("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(e.target.value);
    };

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
            <div className="w-full sm:w-2/3 xl:w-/12 relative">
                <input
                    type="text"
                    className="w-full p-2 border-2 border-mubi-grey rounded-sm"
                    onChange={onChangeHandler}
                    value={searchInputvalue}
                />
                <button className="p-2 hover:cursor-pointer border-mubi-grey border-2 absolute right-0 rounded-r-sm">
                    <img src={searchIcon} alt="" />
                </button>
            </div>
        </form>
    );
}
