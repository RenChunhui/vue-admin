<script setup lang="ts">
const schema = [
  { label: '用户名', prop: 'username' },
  { label: '邮箱', prop: 'email' },
  { label: '角色', prop: '' },
  { label: '操作', prop: '' },
]

const { data, execute } = useHttp('/api/users').get().json()

onMounted(async() => {
  await execute()
})
</script>

<template>
  <BaseTable :data="data" :schema="schema">
  </BaseTable>
</template>
