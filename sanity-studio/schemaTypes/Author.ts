import { defineType } from 'sanity';

export default defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        {
            name: 'name', 
            title: 'Name', 
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'profession', 
            title: 'Profession', 
            type: 'string',
            validation: (rule) => rule.required(),
        },
        

    ]


})