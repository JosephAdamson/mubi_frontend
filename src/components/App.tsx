// for client-side routing
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/components/Home.js";
import { useFetchMubiApiData } from "@/hooks/useFetchMubiApiData";
import ReviewDetail from "./ReviewDetail";

/* 
Main application, contains top-level data and routing logic.
*/
export default function App() {
    // bring in our data at the top level.
    const { mubiApiData, loading, error} = useFetchMubiApiData();

    // jazz these up
    if (loading) {
      return <div>loading...</div>
    }

    if (error) {
      return <div>{error}</div>
    }

    if (!mubiApiData) {
      return <div>failed to fetch data.</div>
    }
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home films={mubiApiData} />} />
                <Route path="/reviews/:id" element={<ReviewDetail />}/>
            </Routes>
        </BrowserRouter>
    );
}
