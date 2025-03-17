import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import { getProjects } from "../APIs/projects.js";
import { useQuery } from "@tanstack/react-query";


export default function Projects(){
    
    const { data: projects = [], isLoading } = useQuery({
        queryKey: ["projects"],
        queryFn: getProjects,
        staleTime: Infinity, // 5 minutes
    });

    
    if (isLoading) {
        return (
            <div>
            {[...Array(3)].map((_, index) => (
                <div key={index} className="project-card skeleton">
                <div className="project-content">
                    <div className="skeleton-box" style={{ width: '70%', height: '36px' }}></div>
                    <div className="skeleton-box" style={{ width: '25%', height: '16px' }}></div>
                    <div className="skeleton-box" style={{ width: '85%', height: '86px' }}></div>
                    <div className="tags-wrapper">
                    <div className="skeleton-box" style={{ width: '15%', height: '16px' }}></div>
                    <div className="skeleton-box" style={{ width: '15%', height: '16px' }}></div>
                    <div className="skeleton-box" style={{ width: '15%', height: '16px' }}></div>
                    </div>
                </div>
                <div className="skeleton-box project-image" style={{ width: '50%', maxWidth: '200px', height: '140px' }}></div>
                </div>
            ))}
            </div>
        );
    }

    return (
        <div>
            {projects && projects.map(project => (
                <ProjectCard key={project._key} project={project} />
            ))}
           
        </div>
    )
}

