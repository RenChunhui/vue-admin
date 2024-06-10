import { factory } from '@mswjs/data'
import { userModel } from './models/user'
import { menuModel } from './models/menu'
import { organizeModel } from './models/organize'

export const db = factory({
  user: userModel,
  menu: menuModel,
  organize: organizeModel
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
  db.menu.create({ code: 'users', label: '用户管理' })
  db.menu.create({ code: 'roles', label: '角色管理' })
  db.menu.create({ code: 'organize', label: '组织架构' })
}

// 初使化组织架构
function bootstrapOrganize() {
  db.organize.create({ id: 1, name: '项目经理' })
  db.organize.create({ id: 2, name: '产品经理', parentId: 1 })
  db.organize.create({ id: 3, name: '技术经理', parentId: 1 })
  db.organize.create({ id: 4, name: 'UI 设计师', parentId: 2 })
  db.organize.create({ id: 5, name: '产品助理', parentId: 2 })
  db.organize.create({ id: 6, name: '前端组长', parentId: 3 })
  db.organize.create({ id: 7, name: '后端组长', parentId: 3 })
  db.organize.create({ id: 8, name: '运维经理', parentId: 3 })
  db.organize.create({ id: 9, name: '测试经理', parentId: 3 })

  db.organize.create({ id: 10, name: '前端工程师', parentId: 6 })
  db.organize.create({ id: 11, name: '后端工程师', parentId: 7 })
  db.organize.create({ id: 12, name: '运维工程师', parentId: 8 })
  db.organize.create({ id: 13, name: '测试人员', parentId: 9 })
}

async function onApplicationBootstrap() {
  bootstrapUsers()
  bootstrapMenus()
  bootstrapOrganize()
}

onApplicationBootstrap()
