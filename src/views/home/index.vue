<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  test()
})
async function test() {
  const res = await fetch('/users')
    .then(response => response.json())
    .then(json => {
      return json
    })
    .catch(err => console.log('Error', err));
  console.log('data:',res)
}
</script>

<template>
  <div>home</div>
</template>
