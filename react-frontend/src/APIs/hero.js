import client from './sanityClient';

export const getHero = async () => {
    const query = `*[_type == "author"]{
        name,
        profession,
    }[0]`;
    const response = await client.fetch(query);
    return response;
}