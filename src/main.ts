import "@/styles/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { setupMocks } from "./mocks";

async function bootstrap() {
  const app = createApp(App);
  app.use(createPinia());
  app.use(router);

  await setupMocks();

  app.mount("#app");
}

bootstrap();
