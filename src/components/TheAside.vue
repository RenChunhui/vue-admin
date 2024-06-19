<script setup lang="ts">
import { coverListToTree } from '@/utils/array'

const menus = ref<any[]>([])

const { data, execute } = useHttp('/api/user/menus').get().json()

onMounted(async() => {
  await execute()
  menus.value = coverListToTree(data.value)
})
</script>

<template>
  <ElMenu router>
    <ElSubMenu
      v-for="menu in menus"
      :key="menu.id"
      :index="menu.id.toString()">
      <template #title>
        <span>{{ menu.name }}</span>
      </template>
      <ElMenuItem
        v-for="submenu in menu.children"
        :key="submenu.id"
        :route="{ name: submenu.code }"
        :index="submenu.id.toString()">
        <template #title>
          <span>{{ submenu.name }}</span>
        </template>
      </ElMenuItem>
    </ElSubMenu>
  </ElMenu>
</template>
