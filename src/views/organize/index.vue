<script setup lang="ts">
const schema = ref([
  { label: '名称', prop: '' },
  { label: '操作' }
])
const { data, execute, isFetching } = useHttp('/api/organize').get().json()

onMounted(async() => {
  await execute()
})
</script>
<template>
  <BaseTable
    :data="data"
    :schema="schema"
    :loading="isFetching" />
</template>
