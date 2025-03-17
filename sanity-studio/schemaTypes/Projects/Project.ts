import { defineType } from 'sanity';

const project = defineType({
    name: "project",
    title: 'Project',
    type: "object",
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (rule) => rule.required(),
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'MM-YYYY',
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                },
            ],
            validation: (rule) => rule.required(),
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'tag' }] }],
        },
        {
            name: 'urls',
            title: 'URLs',
            type: 'array',
            of: [{ 
                type: 'object',
                fields: [
                    {
                        name: 'name',
                        title: 'Name',
                        type: 'string',
                        validation: (rule) => rule.required(),
                    },
                    {
                        name: 'url',
                        title: 'URL',
                        type: 'url',
                        validation: (rule) => rule.required(),
                    }
                ]
            }],
        }
    ]
});

const projectList = defineType({
    name: 'projectList',
    title: 'Project List',
    type: 'document',
    fields: [
        {
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [{  type: 'project'  }],
            options: { sortable: true }, 
        },
    ],
});

export default [project, projectList];
