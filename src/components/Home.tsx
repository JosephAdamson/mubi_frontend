import { useFetchMubiApiData } from "@/hooks/useFetchMubiApiData";
import { useEffect } from "react";

export default function Home() {
    const { mubiApiData, loading, error } = useFetchMubiApiData();

    useEffect(() => {
        console.log(mubiApiData);
    }, [mubiApiData]);

    return (
        <h1>Welcome home</h1>
    );
}