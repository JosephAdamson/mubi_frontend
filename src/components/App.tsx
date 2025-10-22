// for client-side routing
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/components/Home.js";
import ReviewDetail from "./ReviewDetail";
import NotFound from "./NotFound";

/* 

Main application contains routing logic.
*/
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reviews/:id" element={<ReviewDetail />}/>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
