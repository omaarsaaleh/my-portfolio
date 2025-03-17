import { defineType } from 'sanity';

const summary = defineType({
    name: 'summary',
    title: 'Summary',
    type: 'object',
    fields: [
        {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
            hidden: ({ parent }: { parent?: { title?: string } }) => 
                parent?.title?.trim()?.toLowerCase() === 'age' || false,
        },
        {
            name: 'birthdate',
            title: 'Birthdate',
            type: 'date',
            hidden: ({ parent }: { parent?: { title?: string } }) => 
                parent?.title?.trim()?.toLowerCase() !== 'age' || false,
            validation: (rule) =>
                rule.custom((value, context) => {
                    const title = (context.parent as { title?: string })?.title;
                    if (title && typeof title === 'string' && title.trim().toLowerCase() === 'age' && !value) {
                        return 'Birthdate is required for the Age card.';
                    }
                    return true;
                }),
        },
        
    ],
});

const summaryList = defineType({
    name: 'summaryList',
    title: 'Summary List',
    type: 'document',
    fields: [
        {
            name: 'summaries',
            title: 'Summaries',
            type: 'array',
            of: [{ type: 'summary' }],
        },
    ],
});

export default [summary, summaryList]; 
