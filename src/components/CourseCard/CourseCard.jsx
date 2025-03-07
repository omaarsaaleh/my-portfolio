import Tag from '../Tag/Tag.jsx'
import './courseCard.css'

export default function CourseCard ({ course }){
    return (
        <div className="course-item">
            <h5>{course.name}</h5>
            <p>Grade: {course.grade}</p>
            <p className='text-xs'>{course.description}</p>
            {course.tags && (
                <div className="tags-wrapper">
                    {course.tags.map((tag, index) => (
                        <Tag key={index} title={tag.title} />
                    ))}
                </div>
            )}
        </div>
    );
};
