import { nullable, primaryKey } from '@mswjs/data'

export const menuModel = {
  id: primaryKey(Number),
  pid: nullable(Number),
  name: String,
  code: String
}
