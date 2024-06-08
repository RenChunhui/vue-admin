import { factory } from '@mswjs/data'
import { userModel } from './models/user'

export const db = factory({
  user: userModel,
})

db.user.create({ username: 'admin', password: 'admin'})
for(let i = 0; i < 1000; i++) {
  db.user.create()
}
