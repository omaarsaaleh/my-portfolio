import client from './sanityClient'

export const getContacts = async () =>{
    const query = 
    `
        *[_type == "contact"]{
            _id,
            name,
            url,
            "image":{
                "url": logo.asset->url,
            }
        }
    `;
    const response = await client.fetch(query);
    return response;
}