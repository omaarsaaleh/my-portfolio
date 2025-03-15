import client from './sanityClient';

export const getSummaryCards = async () => {
    const query = `
        *[_type == "summaryList"][0]{
            summaries[] {
                _key,
                icon,
                title,
                content,
                birthdate
            }
        }
    `;

    const response = await client.fetch(query);

    if (!response || !response.summaries) {
        return [];
    }

    const computedResponse = response.summaries.map((card) => {
        if (card.title === 'Age' && card.birthdate) {
            return {
                ...card,
                content: `${calculateAge(card.birthdate)} Years`
            };
        }
        return card;
    });

    return computedResponse;
};

const calculateAge = (birthdate) => {
    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth() - birthDateObj.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }
    return age;
};
