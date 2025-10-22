import { useState, useEffect } from "react";
import { MubApiDataSchema, type MubiApiData} from "@/types/mubiApi.schema";
import { z } from "zod";
import { API_URL } from "@/constants";

/* 
Fetch our film data from mubi api.

@hook
*/
export default function useFetchMubiApiData() {
    const [mubiApiData, setMubiApiData] = useState<MubiApiData>([]);
    const [mubiDataError, setMubiDataError] = useState<string | null>(null);
    const [mubiDataLoading, setMubiDataLoading] = useState<boolean>(false);

    const fetchMubiApiData = async () => {
        try {
            setMubiDataLoading(true);
            const response = await fetch(API_URL);
            if (response.ok) {
                const apiJsonData = await response.json();
                const validatedData = MubApiDataSchema.parse(apiJsonData); 
                
                setMubiApiData(validatedData);
            } else {
                throw new Error(`Failed GET request to ${API_URL}`);
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                setMubiDataError("Validation error: error does not match Mubi API data schema.");
                console.error(error.issues);
            } else if (error instanceof Error) {
                setMubiDataError(`Data fetch error: ${error.message}`);
            }
        } finally {
            setMubiDataLoading(false);
        }
    }

    useEffect(() => {
        fetchMubiApiData();
        // we only need to fetch this once on application load for this implementation.
    }, []);

    return { mubiApiData, mubiDataLoading, mubiDataError }
}