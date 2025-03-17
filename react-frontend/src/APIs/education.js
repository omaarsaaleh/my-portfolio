import client from "./sanityClient";

export const getEducation = async () => {
    const query = `
        *[_type == "education"] | order(startYear asc){
            _id,
            school,
            degree,
            startYear,
            endYear,
            description,
            grade,
            courses[]{
                _key,
                name,
                grade,
                description,
                tags[]->{
                    _id,
                    title
                }
            }
        }
    `
    const response = await client.fetch(query);
    return response;
}