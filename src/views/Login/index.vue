<script setup lang="ts" name="Login">
import { AppConfig } from '@/config/AppConfig'
import UsernameLogin from '@/views/Login/components/UsernameLogin/index.vue'

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
      <UsernameLogin />
    </div>
  </div>
</template>

<style scoped></style>
