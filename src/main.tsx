import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.js";
// bring in our tailwind styles
import "./main.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
