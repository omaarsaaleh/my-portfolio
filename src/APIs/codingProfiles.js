import client from './sanityClient'

export const getCodingProfiles = async () =>{
    const query = 
    `
        *[_type == "codingProfile"]{
            _id,
            name,
            url,
            "image":{
                "url": logo.asset->url
            }
        }

    `;
    const response = await client.fetch(query);
    return response;
}