import type { RouteRecordRaw } from 'vue-router'

const rbacRoutes: Array<RouteRecordRaw> = [
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/users/index.vue'),
  },
  {
    path: '/roles',
    name: 'roles',
    component: () => import('@/views/roles/index.vue'),
  },
]

export default rbacRoutes
