import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../../APIs/summary";
import './summarySection.css';
import Loader from "../Loader/Loader";

export default function SummarySection() {
    const { data: summaryData, isLoading } = useQuery({
        queryKey: ["summary"],
        queryFn: getSummary,
        staleTime: Infinity
    });

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <section className="summary-section">
            <img src={summaryData.image.url} alt={summaryData.image.alt} className="summary-gif" />
            <div className="summary-text">
                {summaryData.points.map((point, index) => (
                    <p key={index} className="text-base">{point}</p>
                ))}
            </div>
        </section>
    );
}
