import { faker } from '@faker-js/faker'
import { primaryKey } from '@mswjs/data'

export const menuModel = {
  id: primaryKey(() => faker.database.mongodbObjectId()),
  printId: String,
  code: String,
  label: String
}
