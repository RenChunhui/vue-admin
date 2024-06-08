import { createFetch } from '@vueuse/core'

export const useHttp = createFetch({
  options: {
    immediate: false,
    beforeFetch(ctx) {
      return ctx
    },
    afterFetch(ctx) {
      return ctx
    },
    onFetchError(ctx) {
      return ctx
    },
  },
})
