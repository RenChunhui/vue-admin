import { factory } from '@mswjs/data'
import { userModel } from './models/user'
import { menuModel } from './models/menu'

export const db = factory({
  user: userModel,
  menu: menuModel
})

// 初使化用户数据
function bootstrapUsers() {
  db.user.create({ id: 1, username: 'admin', password: 'admin' })
  for (let i = 0; i < 100; i++) {
    db.user.create({ id: i+2 })
  }
}

// 初使化菜单
function bootstrapMenus() {
  db.menu.create({ id: 1, name: '系统管理'})
  db.menu.create({ id: 2,pid:1, code: 'users', name: '用户管理' })
  db.menu.create({ id: 3,pid:1, code: 'roles', name: '角色管理' })
}

async function onApplicationBootstrap() {
  bootstrapUsers()
  bootstrapMenus()
}

onApplicationBootstrap()
