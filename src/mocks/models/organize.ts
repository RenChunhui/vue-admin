import { nullable, primaryKey } from '@mswjs/data'

export const organizeModel = {
  id: primaryKey(Number),
  parentId: nullable(Number),
  name: String
}
