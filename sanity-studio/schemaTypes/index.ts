import Author from './Author'
import Tag from './Partials/Tag'
import Project from './Projects/Project'
import Education from './Education/Education'
import DomainSkills from './About/DomainSkills'
import Contact from './About/Contact'
import CodingProfile from './About/CodingProfile'
import Summary from './About/Summary';


export const schemaTypes = [
    Author, 
    Tag, 
    ...Project, 
    Education,
    DomainSkills, 
    Contact, 
    CodingProfile,
    ...Summary

]
