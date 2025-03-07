import client from './sanityClient'

export const getProjects = async () => {
    const query = 
    `
        *[_type == "project"]{
            _id,
            title,
            description,
            date,
            "image":{
                "url": image.asset->url,
                "alt": image.alt,
            } ,
            tags[]->{
                _id,
                title
            },
            urls,
        }
    `;
    const response = await client.fetch(query);
    return response;
}