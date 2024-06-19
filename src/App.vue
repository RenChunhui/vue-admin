<template>
  <RouterView v-slot="{ Component }">
    <Transition>
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
