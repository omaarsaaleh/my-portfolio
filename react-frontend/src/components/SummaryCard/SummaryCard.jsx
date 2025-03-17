
import './SummaryCard.css'

export default function SummaryCard({card}){
    return (
        <div className="summary-card">
            <div className="summary-icon">{card.icon}</div>
            <div className="summary-title">{card.title}</div>
            <div className="summary-content">{card.content}</div>
        </div>
    );
}