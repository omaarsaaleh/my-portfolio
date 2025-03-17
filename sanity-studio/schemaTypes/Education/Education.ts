import { defineType } from "sanity";

export default defineType({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'school',
            title: 'School',
            type: 'string',
            validation: (rule) => rule.required()
        }
        ,{
            name: 'degree',
            title: 'Degree',
            type : 'string',
            validation: (rule) => rule.required()
        },
        {
            name: 'startYear',
            title: 'Start Year',
            type: 'date',
            options: { dateFormat: 'YYYY' },
            validation: (rule) => rule.required()
        },
        {
            name: 'endYear',
            title: 'End Year',
            type: 'date',
            options: { dateFormat: 'YYYY' },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (rule) => rule.required()
        },
        {
            name: 'grade',
            title: 'Grade',
            type: 'string',
        },
        {
            name: 'courses',
            title: 'Courses',
            type: 'array',
            of: [{
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Course Name',
                            type: 'string',
                        },
                        {
                            name: 'grade',
                            type: 'string',
                            title: 'Grade',
                        },
                        {
                            name: 'description',
                            type: 'text',
                            title: 'Course Description',
                        },
                        {
                            name: 'tags',
                            title: 'Tags',
                            type: 'array',
                            of: [{ type: 'reference', to: [{ type: 'tag' }] }],
                        },
                    ],
            }]
        }
    ]
})