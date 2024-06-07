import { createRouter, createWebHistory } from 'vue-router'
import accountRoutes from './modules/account'
import BaseLayout from '@/layouts/BaseLayout.vue'

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
          name: 'index',
          component: () => import('@/views/home/index.vue')
        }
      ]
    },
    ...accountRoutes
  ]
})

export default router
