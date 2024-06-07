import { setupWorker } from "msw/browser";
import { delay, http } from "msw";
import { authHandlers } from "./api/auth";
import { usersHandlers } from "./api/users";

export const worker = setupWorker(
  http.all('*',async () => {
    await delay(1000)
  }),

  ...authHandlers,
  ...usersHandlers
)
