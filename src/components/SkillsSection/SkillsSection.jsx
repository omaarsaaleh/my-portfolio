import { getDomainSkills } from "../../APIs/domainSkills";
import { useQuery } from "@tanstack/react-query";
import IconCard from "../IconCard/IconCard";
import './SkillsSection.css'
import Loader from "../Loader/Loader";

export default function SkillsSection(){
    const { data: domainSkills = [], isLoading } = useQuery({
        queryKey: ["domainSkills"],
        queryFn: getDomainSkills,
        staleTime: Infinity
    });

    if(isLoading){
        return <Loader/>
    }

    return (
        <section className="skills-section">
            <h3>Skills</h3>
            <div className="domains-wrapper">
            {
                domainSkills.map(domain =>(
                    <div className="domain" key={domain._id}>
                        <h5>{domain.name}</h5>
                        <div className="icons-wrapper">
                            {domain.skills.map(skill=>(
                                    <IconCard image={skill.image} key={skill._key} 
                                    name={skill.name}/>
                            ))}
                        </div>
                            
                    </div>
                ))
            }
            </div>
        </section>
    );
}