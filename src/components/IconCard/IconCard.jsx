import './IconCard.css'

export default function IconCard({image, name}){

    return (
        <div className="icon-wrapper">
            <img src={image.url} alt={name + " logo"} loading="lazy"/>
        </div>
    );
}