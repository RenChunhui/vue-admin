import { createRouter, createWebHistory } from 'vue-router'
import accountRoutes from './modules/account'
import BaseLayout from '@/layouts/BaseLayout.vue'
import rbacRoutes from './modules/rbac'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: BaseLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: 'organize',
          name: 'organize',
          component: () => import('@/views/organize/index.vue')
        },
        ...rbacRoutes
      ]
    },
    ...accountRoutes
  ]
})

export default router
