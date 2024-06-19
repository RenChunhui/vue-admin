import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import BaseLayout from '@/layouts/BaseLayout.vue'

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '',
    name: 'root',
    redirect: '/home',
    component: BaseLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('@/views/rbac/users/index.vue')
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('@/views/rbac/roles/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...constantRoutes
  ]
})

export function setupRouter(app:App) {
  app.use(router)
}
