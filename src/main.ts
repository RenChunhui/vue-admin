import { createApp } from 'vue'

import App from './App.vue'
import { setupStore } from './stores'
import { setupMock } from './mocks'

async function bootstrap() {
  const app = createApp(App)

  // 状态管理
  setupStore(app)

  // 模拟数据
  await setupMock()

  app.mount('#app')
}

bootstrap()
