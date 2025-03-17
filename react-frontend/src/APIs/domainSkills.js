import client from './sanityClient'

export const getDomainSkills = async () =>{
    const query = 
    `
        *[_type == "domain"]{
            _id,
            name,
            skills[]{
                _key,
                name,
                "image":{
                    "url": logo.asset->url
                }
            }
        }
    `;
    const response = await client.fetch(query);
    return response;
}