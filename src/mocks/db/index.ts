import Dexie, { type Table } from 'dexie'
import { fakerZH_CN as faker } from '@faker-js/faker'
import type { Role, User } from './schema'

class AppDB extends Dexie {
  user!: Table<User, number>
  role!: Table<Role, number>

  constructor() {
    super('dexie')

    this.version(1).stores({
      user: '++id, &username, sex,phone, email, createdAt, updatedAt',
      role: '++id, &code, name, createdAt, updatedAt'
    })
  }
}

export const db = new AppDB()


export async function setupDexie() {
  const exists = await db.user.count()

  if (exists > 0) return

  const now = new Date()

  // 创建管理员角色
  const adminRole = await db.role.add({
    name: '管理员',
    code: 'admin',
    createdAt: now,
    updatedAt: now
  })

  const roleList: Role[] = Array.from({ length: 8 }, (_, k) => {
    return {
      name: faker.helpers.arrayElement([
        '运营主管',
        '产品经理',
        '财务主管',
        '技术经理',
        '销售主管',
        '人事专员',
        '行政主管',
        '客户经理']),
      code: faker.string.alphanumeric(6).toLowerCase(),
      createdAt: now,
      updatedAt: now
    }
  })
  const roleIds = await db.role.bulkAdd(roleList, { allKeys: true })
  const allRoleIds = [adminRole, ...roleIds]

  // 创建用户
  await db.user.add({
    username: 'admin',
    password: 'admin',
    email: 'admin@example.com',
    phone: '13000000000',
    roleIds: [adminRole],
    createdAt: now,
    updatedAt: now
  })

  const userList: User[] = Array.from({ length: 50 }, (_, k) => {
    return {
      username: faker.internet.username(),
      password: '123456',
      realname: faker.person.fullName(),
      address: faker.location.streetAddress(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      roleIds: faker.helpers.arrayElements(allRoleIds),
      createdAt: faker.date.past(),
      updatedAt: now
    }
  })

  await db.user.bulkAdd(userList)
}
