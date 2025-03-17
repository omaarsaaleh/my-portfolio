import './Hero.css';
import { useQuery } from "@tanstack/react-query";
import { getHero } from '../../APIs/hero';

export default function Hero() {
    const { data: heroData = {}, isLoading } = useQuery({
        queryKey: ["hero"],
        queryFn: getHero,
        staleTime: Infinity,
    });

    if (isLoading) {
        return (
            <div className='hero'>
                <div className='hero-text'>
                    <div className='skeleton-box' style={{ width: '60%', height: '40px' }}>&nbsp;</div>
                    <div className='skeleton-box' style={{ width: '40%', height: '20px' }}>&nbsp;</div>
                </div>
            </div>
        );
    }


    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>{heroData.name}</h1>
                <h4>
                    {heroData.profession}
                </h4>
            </div>
        </div>
    );
}