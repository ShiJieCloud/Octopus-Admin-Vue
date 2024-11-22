<script setup lang="ts" name="Register">
import { AppConfig } from '@/config/AppConfig'
import RegisterForm from '@/views/Register/components/RegisterForm.vue'
</script>

<template>
  <div class="w-full h-full xl:bg-gray-200 flex justify-center items-center">
    <div class="w-full xl:w-3/4 xl:rounded-md xl:drop-shadow-md bg-white flex
       justify-center items-center transition-all duration-500 ease-in-out aspect-video"
    >
      <div class="w-full lg:w-2/5 h-full flex flex-col items-center justify-center">
        <!--   LOGO   -->
        <div class="flex flex-col items-center justify-center mb-4 space-y-2">
          <SvgIcon iconName="logo" :iconSize="24" />
          <span class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {{ AppConfig.getAppTitle() }}
          </span>
        </div>

        <!--   注册表单   -->
        <div class="w-full flex items-center justify-center max-w-xs md:max-w-sm">
          <RegisterForm />
        </div>
      </div>
      <div class="lg:w-1/2 h-full bg-contain bg-center bg-[url('@/assets/images/login.svg')] bg-no-repeat" />
    </div>
  </div>
</template>

<style scoped></style>
