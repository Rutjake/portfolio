const skillSchema = {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Skill Name' },
    { 
      name: 'icon', 
      type: 'image', 
      title: 'Icon',
      options: { hotspot: true }
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Cyber Security', value: 'cyber' },
          { title: 'Developing', value: 'dev' },
          { title: 'UX Design', value: 'ux' },
          { title: 'Automation', value: 'automation' },
          { title: 'Tools/Other', value: 'tools' },
        ]
      }
    }
  ]
};

export default skillSchema;