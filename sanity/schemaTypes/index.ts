
import { type SchemaTypeDefinition } from 'sanity'
import { Dogs } from '@/sanity/schemaTypes/Dog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Dogs],
}
