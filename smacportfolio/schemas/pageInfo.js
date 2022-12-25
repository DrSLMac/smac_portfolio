import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true},
    }),
    defineField({
      name: 'backgroundInformation1',
      title: 'Background Info P1',
      type: 'text',
    }),
    defineField({
      name: 'backgroundInformation2',
      title: 'Background Info P2',
      type: 'text',
    }),
    defineField({
      name: 'profilePic',
      title: 'Profile Pic',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: "reference", to: { type: "social" } }]
    }),
    defineField({
      name: 'design1',
      title: 'Design 1',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'design2',
      title: 'Design 2',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'design3',
      title: 'Design 3',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'design4',
      title: 'Design 4',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'design5',
      title: 'Design 5',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'upArrow',
      title: 'Up Arrow',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
