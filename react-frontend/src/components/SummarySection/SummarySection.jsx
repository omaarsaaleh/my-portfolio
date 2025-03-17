import { useQuery } from "@tanstack/react-query";
import { getSummaryCards } from "../../APIs/summaryCards.js";
import './summarySection.css';
import Loader from "../Loader/Loader";

import SummaryCard from "../SummaryCard/SummaryCard.jsx";

export default function SummarySection() {
    const { data: summaryData, isLoading } = useQuery({
        queryKey: ["summary"],
        queryFn: getSummaryCards,
        staleTime: Infinity
    });

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <section className="summary-section">
            <div className="summary-cards">
                 {summaryData.map((card) => (
                    <SummaryCard key={card._key} card={card} />
                ))} 
            </div>
            
        </section>
    );
}
