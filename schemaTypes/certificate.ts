import {defineField, defineType} from 'sanity'

export const certificateType = defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Certificate title',
      type: 'string',
      description:
        'e.g. "Nuad Bo-Rarn Thai Massage | International Training Massage School (ITM) in Thailand"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Certificate image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers show first. Leave empty to show newest last.',
    }),
  ],
  orderings: [
    {title: 'Display order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', media: 'image', order: 'order'},
    prepare: ({title, media, order}) => ({
      title,
      subtitle: order != null ? `Order: ${order}` : undefined,
      media,
    }),
  },
})
