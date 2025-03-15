import IconCard from "../IconCard/IconCard"; 
export default function GenericIconsSection({heading, data}){
    return(
        <section>
            <h4>{heading}</h4>
                <div className="icons-wrapper" style={{ margin: '27px auto' }} >
                    {data.map((icon) => (
                        <div className="icon-a-wrapper" key={icon._id}>
                            <a href={icon.url} target="_blank" rel="noopener noreferrer">
                                <IconCard key={icon._id} image={icon.image} name={icon.name} />
                            </a>
                        </div>
                    ))}
                </div>
            
        </section>
    );
}