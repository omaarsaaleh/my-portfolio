import { defineType } from "sanity";

export default defineType({
    name: 'codingProfile',
    title: 'Coding Profile',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'url',
            title: 'url',
            type: 'url',
            validation: (rule) => rule.required(),
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            validation: (rule) => rule.required(),
        }
    ]
});
