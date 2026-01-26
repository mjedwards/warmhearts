import {defineField, defineType} from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: (rule) => rule.required().min(40).max(400),
      description: 'Short summary used on the articles listing page.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Community Updates', value: 'community'},
              {title: 'Program Updates', value: 'program'},
              {title: 'In Memoriam', value: 'in_memoriam'},
              {title: 'Mentor Spotlight', value: 'mentor_spotlight'},
              {title: 'Student Spotlight', value: 'student_spotlight'},
            ],
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      initialValue: false,
      description: 'Only one article can be featured at a time.',
      validation: (rule) =>
        rule.custom(async (value, context) => {
          if (!value) return true
          const {document, getClient} = context
          const client = getClient({apiVersion: '2025-01-01'})
          const currentId = document?._id
          if (!currentId) return true
          const draftId = currentId.startsWith('drafts.') ? currentId : `drafts.${currentId}`
          const publishedId = currentId.replace('drafts.', '')
          const existing = await client.fetch(
            '*[_type == "article" && featured == true && !(_id in [$publishedId, $draftId])][0]',
            {publishedId, draftId},
          )
          return existing ? 'Only one article can be featured.' : true
        }),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'publishDate', direction: 'desc'},
      ],
    },
    {
      title: 'Publish Date',
      name: 'publishDateDesc',
      by: [{field: 'publishDate', direction: 'desc'}],
    },
  ],
})
