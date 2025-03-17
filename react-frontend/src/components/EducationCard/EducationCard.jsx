import { useState } from "react";
import CourseCard from "../CourseCard/CourseCard.jsx";
import './educationCard.css'

export default function EducationCard({education}){
    const [showCourses, setShowCourses] = useState(false);

    return (
        <div className="education-card">
            <p className="text-sm">
                {new Date(education.startYear).getFullYear()} - {new Date(education.endYear).getFullYear()}
            </p> 
            <h4>
                {education.degree}
            </h4>
            
            <h6 className="subheading">
                {education.school}
            </h6>
        
            <p className="education-info text-sm">
                {education.description}
            </p>

            {
                education.grade && 
                <p className="education-grade text-sm">
                    Grade: {education.grade}
                </p>
            }
        
            {education.courses && education.courses.length > 0 && 
                (   
                    <>
                        <button
                            className="courses-toggle"
                            aria-expanded={showCourses}
                            onClick={() => setShowCourses(!showCourses)}
                        >
                            {showCourses ? "Hide Courses" : "View Courses"}
                        </button>

                        <div className={`courses-content ${showCourses ? 'active' : ''}`}>
                            {education.courses.map((course, index) => (
                                <CourseCard key={index} course={course} />
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    );
}
