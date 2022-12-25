import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: "Title of the Project",
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      title: 'Summary',
      name: 'summary',
      type: 'text',
    }),
    defineField({
      title: 'Summary2',
      name: 'summary2',
      type: 'text',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: "reference", to: { type: "skill" } }]
    }),
    defineField({
      name: 'linkToBuild',
      title: 'Link to Build',
      type: 'url',
    }),
  ],
})
