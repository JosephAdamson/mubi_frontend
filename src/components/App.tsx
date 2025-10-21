// for client-side routing
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/components/Home.js";
import ReviewDetail from "./ReviewDetail";

/* 
TODO
- Add Route for adding review (or include this as a modal?)

Main application contains routing logic.
*/
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reviews/:id" element={<ReviewDetail />}/>
            </Routes>
        </BrowserRouter>
    );
}
