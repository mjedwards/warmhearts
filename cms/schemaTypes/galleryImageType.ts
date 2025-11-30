import {defineField, defineType} from 'sanity'

export const galleryImageType = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the image',
    }),
    defineField({
      name: 'image',
      title: 'Image',
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
          description: 'Important for SEO and accessibility.',
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Carousel', value: 'carousel'},
          {title: 'Gallery', value: 'gallery'},
          {title: 'Both', value: 'both'},
        ],
        layout: 'radio',
      },
      description: 'Where should this image appear?',
      validation: (rule) => rule.required(),
      initialValue: 'gallery',
    }),
    defineField({
      name: 'event',
      title: 'Related Event',
      type: 'reference',
      to: [{type: 'event'}],
      description: 'Optional: Link this image to a specific event',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which image appears (lower numbers appear first)',
      validation: (rule) => rule.required().min(0),
      initialValue: 0,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Image',
      type: 'boolean',
      description: 'Mark as featured to prioritize in displays',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'order', direction: 'asc'},
      ],
    },
  ],
})
