import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// bring in our tailwind styles
import "./main.css";
import App from "@/components/App";
import { FilmReviewAppProvider } from "./context/FilmReviewAppContext";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <FilmReviewAppProvider>
            <App />
        </FilmReviewAppProvider>
    </StrictMode>
);
