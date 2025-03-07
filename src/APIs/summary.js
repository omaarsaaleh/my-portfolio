import client from './sanityClient'

export const getSummary = async () => {
    const query = 
    `
        *[_type == "summary"]{
            _id,
            points,
            "image":{
                "url": image.asset->url,
                "alt": image.alt,
            } ,
        }[0]
    `;
    const response = await client.fetch(query);
    return response;
}