import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconKey',
      title: 'Icon Key',
      type: 'string',
      options: {
        list: [
          {title: 'Sports Massage', value: 'sports-massage'},
          {title: 'Deep Tissue', value: 'deep-tissue'},
          {title: 'Thai Massage', value: 'thai-massage'},
          {title: 'Swedish Massage', value: 'swedish-massage'},
          {title: 'Abhyanga', value: 'abhyanga'},
          {title: 'Reflexology', value: 'reflexology'},
          {title: 'Sport Stretching', value: 'sport-stretching'},
          {title: 'Hatha Yoga', value: 'hatha-yoga'},
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
      media: 'image',
    },
  },
})
