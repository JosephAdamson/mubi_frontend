import { type Review } from "./types/application.schema";

export const API_URL = 'https://mubi-dev-assets.s3.amazonaws.com/dev-interview-films.json'

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

export const dummyReviews = new Map<string, Review>();
dummyReviews.set("annie-hall", {
    filmId: "annie-hall",
    content: LOREM,
    createdAt: "01.01.25 00:00:00"
});
dummyReviews.set("breathless", {
    filmId: "breathless",
    content: LOREM,
    createdAt: "01.01.25 00:00:00"
});
dummyReviews.set("aguirre-the-wrath-of-god", {
    filmId: "aguirre-the-wrath-of-god",
    content: LOREM,
    createdAt: "01.01.25 00:00:00"
});