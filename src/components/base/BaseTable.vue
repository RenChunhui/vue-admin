<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  /** 数据 */
  data: {
    type: Array,
    default: () => []
  },
  /** 数据结构 */
  schema: {
    type: Array as PropType<{ label: string, prop?: string}[]>,
    default: () => []
  },
  /** 是否加载中 */
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <ElTable :data="props.data">
    <ElTableColumn
      v-for="(item,index) in schema"
      :key="index"
      :prop="item.prop"
      :label="item.label" />
  </ElTable>
</template>
