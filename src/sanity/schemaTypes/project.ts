import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projekti',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Otsikko' }),
    
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
    defineField({ name: 'descriptionFi', type: 'text', title: 'Kuvaus (FI)' }),
    defineField({ name: 'descriptionEn', type: 'text', title: 'Kuvaus (EN)' }),
    
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
              type: 'string',
              title: 'Kuvan teksti / Jakson nimi',
            }
          ]
        }
      ]
    }),

    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tagit' }),
  ],
})