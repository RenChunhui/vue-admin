import { createFetch } from "@vueuse/core";

export const useHttp = createFetch({
  options: {
    beforeFetch(ctx) {
      return ctx;
    },
    afterFetch(ctx) {
      return ctx;
    },
    onFetchError(ctx) {
      return ctx;
    },
  },
});
