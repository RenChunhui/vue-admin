export async function setupMocks() {
  const { worker } = await import('@/mocks/browser')

  return worker.start()
}
