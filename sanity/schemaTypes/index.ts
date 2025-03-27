import { type SchemaTypeDefinition } from 'sanity'
import { blogSchema } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogSchema],
}
