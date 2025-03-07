import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import { getProjects } from "../APIs/projects.js";
import { useQuery } from "@tanstack/react-query";
import Loader from '../components/Loader/Loader.jsx'


export default function Projects(){
    
    const { data: projects = [], isLoading } = useQuery({
        queryKey: ["projects"],
        queryFn: getProjects,
        staleTime: Infinity, // 5 minutes
    });

    
    if (isLoading) {
        return <Loader/>;
    }

    return (
        <div>
            {projects && projects.map(project => (
                <ProjectCard key={project._id} project={project} />
            ))}
        </div>
    )
}

