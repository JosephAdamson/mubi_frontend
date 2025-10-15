import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/components/App.js";
import Home from "@/components/Home.js";
// bring in our tailwind styles
import "./main.css";
// for client-side routing
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
