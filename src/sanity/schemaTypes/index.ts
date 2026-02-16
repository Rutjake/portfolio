import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project'
import resume from './resume'
import skill from './skill'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, resume, skill],
}