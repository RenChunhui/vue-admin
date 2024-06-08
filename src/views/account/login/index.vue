<script setup lang="ts">
const router = useRouter()
const payload = reactive({
  username: '',
  password: ''
})

const { execute, statusCode } = useHttp('/api/auth/login').post(payload).json()

watch(statusCode,(val:number) => {
  if(val === 200) {
    router.push({ name: 'home' })
  }
})
</script>

<template>

  <ElForm
    :model="payload"
    label-width="auto"
    class="w-96 mx-auto mt-20">
    <ElFormItem>
      <ElInput v-model="payload.username" placeholder="请输入用户名" />
    </ElFormItem>
    <ElFormItem>
      <ElInput
        v-model="payload.password"
        placeholder="请输入密码"
        type="password" />
    </ElFormItem>
    <ElFormItem>
      <div class="flex justify-between w-full">
        <ElCheckbox>记住密码</ElCheckbox>
        <ElLink type="primary" :underline="false">忘记密码？</ElLink>
      </div>
    </ElFormItem>
    <ElFormItem>
      <ElButton
        type="primary"
        class="w-full"
        @click="execute()">
        登录
      </ElButton>
    </ElFormItem>
  </ElForm>
  <span>{{ statusCode }}</span>
</template>
