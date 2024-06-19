import '@/styles/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import { setupRouter } from './router'
import { setupMocks } from './mocks'

async function bootstrap() {
  const app = createApp(App)

  // 挂载路由
  setupRouter(app)

  // 模拟数据
  await setupMocks()

  app.mount('#app')
}

bootstrap()
