import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import type { App } from 'vue'
import { useCookies } from '@vueuse/integrations'
import { ACCESS_TOKEN, HOME_NAME, LOGIN_NAME, WHITE_LIST } from '@/constants'
import { constantRoutes } from './modules/constant'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...constantRoutes
  ]
})

export default router

export function setupRouter(app: App) {
  app.use(router)

  router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const { get } = useCookies()

    if (get(ACCESS_TOKEN)) {
      if (to.name === LOGIN_NAME) {
        next({ name: HOME_NAME })
      } else {
        next()
      }
    } else {
      if (WHITE_LIST.includes(to.name)) {
        next()
      } else {
        to.name === LOGIN_NAME ? next() : next({ name: LOGIN_NAME })
      }
    }
  })

  router.afterEach(() => { })

  router.onError((error: Error) => { })
}
