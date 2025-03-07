import './Hero.css';
import { useQuery } from "@tanstack/react-query";
import { getHero } from '../../APIs/hero';
import Loader from '../Loader/Loader.jsx'

export default function Hero() {
    const { data: heroData = {}, isLoading } = useQuery({
        queryKey: ["hero"],
        queryFn: getHero,
        staleTime: Infinity,
    });

    if(isLoading){
        return <Loader></Loader>
    }


    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>{heroData.name}</h1>
                <h4>
                    {heroData.profession}
                </h4>
                <p className="hero-bio text-base">
                    {heroData.bio}
                </p>
            </div>
        </div>
    );
}