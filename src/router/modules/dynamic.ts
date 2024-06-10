import BaseLayout from '@/layouts/BaseLayout.vue'
import type { RouteRecordRaw } from 'vue-router'
import rbacRoutes from './rbac'

const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
  },
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
      },
      ...rbacRoutes
    ],
  },
]

export default dynamicRoutes
