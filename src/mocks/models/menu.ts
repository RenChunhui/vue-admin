import { nullable, primaryKey } from '@mswjs/data'

export const menuModel = {
  id: primaryKey(Number),
  parentId: nullable(Number),
  code: String,
  label: String
}
