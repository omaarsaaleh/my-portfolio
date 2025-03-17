import {getEducation} from "../APIs/education.js";
import { useQuery } from "@tanstack/react-query";
import EducationCard from "../components/EducationCard/EducationCard.jsx";
import Loader from "../components/Loader/Loader.jsx";

export default function Education(){
    const { data: educationList = [], isLoading } = useQuery({
        queryKey: ["education"],
        queryFn: getEducation,
        staleTime: Infinity
    });

    if(isLoading){
        return (
            <div className="education-section">
                <div className="education-card skeleton">
                    <div className="skeleton-box" style={{ width: '20%', height: '16px' }}></div>
                    <div className="skeleton-box" style={{ width: '60%', height: '24px' }}></div>
                    <div className="skeleton-box" style={{ width: '30%', height: '18px' }}></div>
                    <div className="skeleton-box" style={{ width: '100%', height: '66px' }}></div>
                    <div className="skeleton-box" style={{ width: '40%', height: '16px' }}></div>
                    <div className="skeleton-box" style={{ width: '120px', height: '32px' }}></div>
                </div>
            </div>
        );
    }

    return (
        <div className="education-section">
               {educationList.map(education => (
                    <EducationCard key={education._id} education={education} />
               )
            )}
        </div>
    )
}
