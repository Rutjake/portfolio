const resumeSchema = {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    { 
      name: 'experience', 
      type: 'array', 
      title: 'Experience', 
      of: [{ type: 'block' }] 
    },
    { 
      name: 'education', 
      type: 'array', 
      title: 'Education', 
      of: [{ type: 'block' }] 
    },
    {
      name: 'certifications',
      type: 'array',
      title: 'Certifications',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'issuer', type: 'string', title: 'Issuer' },
          { 
            name: 'icon', 
            type: 'image', 
            title: 'Icon',
            options: { hotspot: true }
          }
        ]
      }]
    },
    {
      name: 'skills',
      type: 'array',
      title: 'Skills & Tools',
      of: [{ 
        type: 'reference', 
        to: [{ type: 'skill' }] 
      }]
    },
  ]
};

export default resumeSchema;