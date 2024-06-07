import { factory,primaryKey } from '@mswjs/data'
import { userModel } from './models/user'

export const db = factory({
  user: userModel,
})
