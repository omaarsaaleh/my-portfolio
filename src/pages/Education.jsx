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
        return <Loader></Loader>
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
