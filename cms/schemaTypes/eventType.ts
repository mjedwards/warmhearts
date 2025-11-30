import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'eventTitle',
      title: 'Event Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'eventTitle'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventImage',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true, // Enables hotspot for better image cropping
      },
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
      name: 'eventDescription',
      title: 'Event Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'eventTimeRange',
      title: 'Event Time Range',
      type: 'string',
      description: 'e.g., "6:00 PM - 8:00 PM"',
    }),
    defineField({
      name: 'eventClosed',
      title: 'Event Closed',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'eventStatus',
      title: 'Event Status',
      type: 'string',
      options: {
        list: [
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'Past', value: 'past'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
      initialValue: 'upcoming',
      description: 'Select whether this event is upcoming or past to control which section it appears in',
    }),
  ],
})
