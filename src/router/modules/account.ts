import type { RouteRecordRaw } from 'vue-router'

const accountRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/account/login/index.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/account/register/index.vue'),
  },
]

export default accountRoutes
