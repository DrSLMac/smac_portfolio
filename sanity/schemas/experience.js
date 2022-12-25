import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      title: 'Number',
      name: 'number',
      type: "number",
    }),
    defineField({
      title: 'Job Title',
      name: 'jobTitle',
      type: 'string',
    }),
    defineField({
      title: 'Company Image',
      name: 'companyImage',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      title: 'Company',
      name: 'company',
      type: 'text',
    }),
    defineField({
      title: 'Date Started',
      name: 'dateStarted',
      type: 'date',
    }),
    defineField({
      title: 'Date Ended',
      name: 'dateEnded',
      type: 'date',
    }),
    defineField({
      title: 'Is Currently Working Here',
      name: 'isCurrentlyWorkingHere',
      type: 'boolean',
    }),
    defineField({
      title: 'Technologies',
      name: 'technologies',
      type: 'array',
      of: [{ type: "reference", to: { type: "skill" } }]
    }),
    defineField({
      title: 'Points',
      name: 'points',
      type: 'array',
      of: [{ type: "string" }]
    }),
  ],
  orderings: [
    {
      title: 'Date Started, New',
      name: 'dateStartedDesc',
      // type: 'date',
      by: [
        {field: 'dateStarted', direction: 'asc'}
      ]
    },
    {
      title: 'Job order',
      name: 'number',
      by: [
        {field: 'number', direction: 'desc'}
      ]
    }
  ]
})
