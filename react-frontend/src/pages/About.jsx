import SummarySection from "../components/SummarySection/SummarySection";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import GenericIconsSection from "../components/GenericIconsSection/GenericIconsSection";
import { getCodingProfiles } from "../APIs/codingProfiles";
import { getContacts } from "../APIs/contacts";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader/Loader.jsx";

export default function About(){
    const { data: codingProfiles = [], isLoading1 } = useQuery({
        queryKey: ["codingProfiles"],
        queryFn: getCodingProfiles,
        staleTime: Infinity
    });
    
    const { data: contact = [], isLoading2 } = useQuery({
        queryKey: ["contact"],
        queryFn: getContacts,
        staleTime: Infinity
    });

    if(isLoading1 || isLoading2){
        return <Loader></Loader>
    }

    return (
        <>
            <SummarySection/>
            <SkillsSection/>
            <GenericIconsSection
            heading="Coding Profiles" data={codingProfiles}/>
            <GenericIconsSection
            heading="Contact" data={contact}/>
        
        </>
    )
}