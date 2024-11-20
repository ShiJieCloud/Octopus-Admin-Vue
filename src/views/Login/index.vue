<script setup lang="ts" name="Login">
import { AppConfig } from '@/config/AppConfig'
import UsernameLogin from '@/views/Login/components/UsernameLogin/index.vue'
import { ref, computed } from 'vue'

type LoginMode = 'username'

const loginModeMap = {
  username: UsernameLogin,
}

const loginModeKey = ref<LoginMode>('username')

// 使用 computed 动态获取当前组件
const loginMode = computed(() => loginModeMap[loginModeKey.value])
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="lg:w-1/2 h-full bg-contain bg-center bg-[url('@/assets/images/login.svg')] bg-no-repeat" />
    <div class="w-full lg:w-2/5 h-full flex flex-col items-center justify-center">
      <!--   LOGO   -->
      <div class="flex flex-col items-center justify-center mb-4 space-y-2">
        <SvgIcon iconName="logo" :iconSize="24" />
        <span class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          {{ AppConfig.getAppTitle() }}
        </span>
      </div>

      <!--   登录表单   -->
      <div class="w-full max-w-xs md:max-w-sm">
        <component :is="loginMode" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
