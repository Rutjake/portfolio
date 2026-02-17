import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projekti',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Otsikko (FI)' }),

    defineField({ name: 'titleEn', type: 'string', title: 'Otsikko (EN)' }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL-tunniste (Slug)',
      description: 'Klikkaa "Generate" kun otsikko on valmis',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

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

    defineField({ name: 'image', type: 'image', title: 'Pääkansi (Hero)', options: { hotspot: true } }),
    defineField({
      name: 'descriptionFi',
      title: 'Kuvaus (FI)',
      type: 'array',
      of: [{ type: 'block' }]
    }),

    defineField({
      name: 'descriptionEn',
      title: 'Kuvaus (EN)',
      type: 'array',
      of: [{ type: 'block' }]
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }]
    }),

    defineField({
      name: 'gallery',
      title: 'Kuvat',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              title: 'Kuvateksti',
              type: 'object',
              fields: [
                {
                  name: 'fi',
                  title: 'Suomi',
                  type: 'string'
                },
                {
                  name: 'en',
                  title: 'Englanti',
                  type: 'string'
                }
              ]
            }
          ]
        }
      ]
    }),

    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tagit' }),
  ],
})