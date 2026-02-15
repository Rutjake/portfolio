import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projekti',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Otsikko' }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Kategoria',
      options: {
        list: [
          { title: 'Koodaus', value: 'koodi' },
          { title: 'Kyberturvallisuus', value: 'kyber' },
          { title: 'UX Design', value: 'ux' },
        ],
      },
    }),
    defineField({ name: 'image', type: 'image', title: 'Kansi', options: { hotspot: true } }),
    defineField({ name: 'descriptionFi', type: 'text', title: 'Kuvaus (FI)' }),
    defineField({ name: 'descriptionEn', type: 'text', title: 'Kuvaus (EN)' }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tagit' }),
  ],
})