import { http, delay, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'
import { authHandlers } from './handlers/auth.handler'
import { userHandlers } from './handlers/user.handler'

export async function setupMock() {
  await setupWorker(
    http.all('*', async () => {
      await delay(1000)
    }),
    ...authHandlers,
    ...userHandlers
  ).start()
}
