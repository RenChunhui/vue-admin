import { primaryKey } from '@mswjs/data'

export const userModel = {
  id: primaryKey(Number),
  username: String,
  password: String
}
