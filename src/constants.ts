import { type Review } from "./types/application.schema";

export const API_URL =
    "https://mubi-dev-assets.s3.amazonaws.com/dev-interview-films.json";

export const LOREM = `Lorem ipsum dolor sit amet consectetur adipiscing elit. 
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

  // react-select doesn't support tailwind.
export const REACT_SELECT_STYLES = {
    control: (provided: any) => ({
        ...provided,
        borderRadius: "0px",
        borderWidth: "1.2px",
        borderColor: "#999999", // mubi-grey
        padding: "0.25rem",
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isFocused
            ? "#bfdbfe"
            : state.isSelected
            ? "#93c5fd"
            : "white",
        color: "black",
        cursor: "pointer",
    }),
    menu: (provided: any) => ({
        ...provided,
        zIndex: 10,
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: "black",
    }),
};

// For testing/display only.
export const DUMMY_REVIEWS = new Map<string, Review>();
DUMMY_REVIEWS.set("annie-hall", {
    filmId: "annie-hall",
    content: LOREM,
    createdAt: "2025-10-22T20:58:17.739Z",
});
DUMMY_REVIEWS.set("breathless", {
    filmId: "breathless",
    content: LOREM,
    createdAt: "2025-10-22T20:58:17.739Z",
});
DUMMY_REVIEWS.set("blue-velvet", {
    filmId: "breathless",
    content: "She was wearing BLUEEEEEEEE VELVEEEET",
    createdAt: "2025-10-22T20:58:17.739Z",
});
DUMMY_REVIEWS.set("aguirre-the-wrath-of-god", {
    filmId: "aguirre-the-wrath-of-god",
    content: LOREM,
    createdAt: "2025-10-22T20:58:17.739Z",
});
