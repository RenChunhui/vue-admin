import type { RouteRecordRaw } from 'vue-router'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/account/login/index.vue'),
  },
]

export default constantRoutes
