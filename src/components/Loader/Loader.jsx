import './Loader.css'
import Logo from '../Logo/Logo.jsx'
export default function Loader() {
    return (
        <div className="loader-container">
            <div className="loader-icon"><Logo styling={'small-logo'}/></div>
        </div>
    );
}
