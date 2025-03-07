import './Footer.css'

export default function Footer(){

    return(
        <>
        <hr style={{margin: '15px 0 0 0'}}/>
        <footer>
            <p className='text-base'>Built with:</p>
            <ul>
                <li><div><img src="./react.svg" alt="React Logo"/></div><p>React</p></li>
                <li><div><img src="./sanity.svg" alt="Sanity Logo"/></div><p>Sanity</p></li>
                <li><div><img src="./vercel.svg" alt="Vercel Logo"/></div><p>Vercel</p></li>
            </ul>
        </footer>
        </>
    );
}