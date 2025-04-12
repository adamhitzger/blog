import { type SchemaTypeDefinition } from 'sanity'
import { blogSchema } from './blog'
import { emailSchema } from './mail'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogSchema, emailSchema],
}
