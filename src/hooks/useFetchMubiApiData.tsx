import { useState, useEffect } from "react";
import { MubApiDataSchema, type MubiApiData} from "@/types/mubiApi.schema";
import { z } from "zod";
import { API_URL } from "@/constants";

// fetch our film data from mubi api
export function useFetchMubiApiData() {
    const [mubiApiData, setMubiApiData] = useState<MubiApiData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    // could use useCallback here to cache function (necessary?)
    const fetchMubiApiData = async () => {
        try {
            setLoading(true);
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
                setError("Validation error: error does not match Mubi API data schema.");
                console.error(error.issues);
            } else if (error instanceof Error) {
                setError(`Data fetch error: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMubiApiData();
        // we only need to fetch this once on application load for this implementation.
    }, []);

    return { mubiApiData, loading, error }
}