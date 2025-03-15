import client from './sanityClient'

export const getProjects = async () => {
    const query = 
    `
        *[_type == "projectList"][0].projects[]{
            _key,
            title,
            description,
            date,
            "image": {
                "url": image.asset->url,
                "alt": image.alt,
            },
            tags[]->{
                _id,
                title
            },
            urls[]{
                _key,
                name,
                url
            }
        }
    `;
    const response = await client.fetch(query);
    return response;
}