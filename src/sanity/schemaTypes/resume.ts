const resumeSchema = {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    { name: 'experienceFi', type: 'array', title: 'Työkokemus (FI)', of: [{ type: 'block' }] },
    { name: 'experienceEn', type: 'array', title: 'Experience (EN)', of: [{ type: 'block' }] },

    { name: 'educationFi', type: 'array', title: 'Koulutus (FI)', of: [{ type: 'block' }] },
    { name: 'educationEn', type: 'array', title: 'Education (EN)', of: [{ type: 'block' }] },

    {
      name: 'certifications',
      type: 'array',
      title: 'Certifications',
      of: [{
        type: 'object',
        fields: [
          { name: 'titleFi', type: 'string', title: 'Otsikko (FI)' },
          { name: 'titleEn', type: 'string', title: 'Title (EN)' },
          { name: 'issuer', type: 'string', title: 'Issuer' },
          { name: 'icon', type: 'image', title: 'Icon' }
        ]
      }]
    },
    {
      name: 'skills',
      type: 'array',
      title: 'Skills & Tools',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }]
    },
  ]
};

export default resumeSchema;