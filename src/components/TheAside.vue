<script setup lang="ts">
const router = useRouter()
const { data, execute } = useHttp('/api/menus').get().json()

onMounted(async () => {
  await execute()
})

function handleSelect(key:string) {
  router.push({ name: key})
}
</script>

<template>
  <aside class="fixed top-0 bottom-0 left-0 w-64">
    <ElMenu @select="handleSelect">
      <ElMenuItem
        v-for="menu in data"
        :key="menu.id"
        :index="menu.code">
        {{ menu.label }}
      </ElMenuItem>
    </ElMenu>
  </aside>
</template>
