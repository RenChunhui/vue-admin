import { primaryKey } from '@mswjs/data'
import { fakerZH_CN as faker } from '@faker-js/faker'

export const userModel = {
  id: primaryKey(() => faker.string.uuid()),
  username: () => faker.internet.userName(),
  email: () => faker.internet.email(),
  password: () => faker.internet.password()
}
