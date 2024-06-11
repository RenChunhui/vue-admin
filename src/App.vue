<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
</script>

<template>
  <ElConfigProvider>
    <RouterView v-slot="{ Component }">
      <Transition>
        <component :is="Component" />
      </Transition>
    </RouterView>
  </ElConfigProvider>
</template>
