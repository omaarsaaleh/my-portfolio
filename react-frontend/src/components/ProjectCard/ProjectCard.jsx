
import Tag from '../Tag/Tag.jsx'
import './project-card.css'
import LinkIcon from './LinkIcon.jsx'
  

export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-content">
                <h4>
                    {project.title}
                </h4>
                <p className="text-base">
                    {new Date(project.date).toLocaleString('default', { month: 'short', year: 'numeric' })}
                </p>
                <p className='text-sm'>
                    {project.description}
                </p>
                {
                    project.urls && 
                        <div className="urls-wrapper">
                            {project.urls.map(url => (
                                <a key={url._key} href={url.url} target="_blank" rel="noopener noreferrer" className='text-xs'> 
                                    <LinkIcon/>
                                    {url.name}
                                </a>
                            ))}
                        </div>
                }
                <div className="tags-wrapper">
                    {project.tags.map((tag, index) => (
                        <Tag key={index} title={tag.title} />
                    ))}
                </div>
            </div>
            <img src={project.image.url} alt={project.image.alt} className="project-image" loading='lazy' />
        </div>
    );
}
