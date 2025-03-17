import { defineType } from "sanity";

export default defineType({
    name: 'domain',
    title: 'Domain Skills',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Domain Name',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Skill Name',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        },
                        {
                            name: 'logo',
                            title: 'Skill Logo',
                            type: 'image',
                            validation: (rule) => rule.required(),
                        }
                    ]
                }
            ]
        }
    ]
});
  