import { useParams } from "react-router";

export default function ReviewDetail() {
    const pageParams = useParams();

    return (
        <div>
            <span>I am a detailed review: {pageParams.id}</span>
        </div>
    )
}