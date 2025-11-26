import { setupDexie } from "./db";

export async function setupMock() {
  await setupDexie()
}
