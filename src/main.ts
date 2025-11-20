import { createApp } from 'vue'

import App from './App.vue'
import { setupMock } from './mocks/browser'
import { setupStore } from './stores'

async function bootstrap() {
  const app = createApp(App)

  // 状态管理
  setupStore(app)

  // 模拟数据
  await setupMock()

  app.mount('#app')
}

bootstrap()
