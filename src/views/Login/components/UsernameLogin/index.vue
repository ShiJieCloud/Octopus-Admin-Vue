<script setup lang="ts" name="UsernameLogin">
import { useThemeStore } from '@/stores/Theme'
import { LoginMode } from '@/constants/LoginMode'

const themeStore = useThemeStore()
</script>

<template>
    <!-- 表单 -->
    <el-form ref="loginFormRef" size="large" status-icon>
      <el-form-item prop="username">
        <el-input placeholder="请输入用户名" clearable>
          <template #prefix>
            <SvgIcon iconName="user" iconClass="size-5" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="请输入密码" type="password" show-password clearable>
          <template #prefix>
            <SvgIcon iconName="password" iconClass="size-5" />
          </template>
        </el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="captcha" class="mb-2">
        <div class="flex items-center w-full gap-4">
          <el-input placeholder="请输入验证码" class="w-2/3">
            <template #prefix>
              <SvgIcon iconName="verify-code" iconClass="size-5" />
            </template>
          </el-input>
          <div class="w-1/3 bg-gray-300 cursor-pointer">
            <img src="https://via.placeholder.com" alt="Captcha" class="cursor-pointer" />
          </div>
        </div>
      </el-form-item>
      <el-form-item class="mb-2">
        <div class="flex items-center">
          <el-checkbox>
            <div class="flex items-center gap-1">
              <span>7天内免登录</span>
              <el-tooltip content="勾选并登录后，规定天数内无需输入用户名和密码会自动登入系统" placement="top">
                <SvgIcon iconName="tips" iconClass="size-4" />
              </el-tooltip>
            </div>
          </el-checkbox>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" type="primary"> 登录 </el-button>
        <div class="leading-6 flex w-full justify-between">
          <el-link type="primary"> 忘记密码? </el-link>
          <el-link class="text-md" type="primary"> 还没有账号？去注册 </el-link>
        </div>
      </el-form-item>
    </el-form>

    <div class="hidden md:block">
      <div class="flex w-full items-center justify-between">
        <el-button @click="themeStore.setLoginMode(LoginMode.PHONE)">手机登录</el-button>
        <el-button>二维码登录</el-button>
        <el-button>邮箱登录</el-button>
      </div>

      <el-divider>
        <span class="text-xs text-gray-400">第三方登录</span>
      </el-divider>

      <div class="flex items-center justify-between">
        <el-link :underline="false" href="/register">
          <SvgIcon iconName="qq" iconClass="size-6" />
        </el-link>
        <el-link :underline="false" href="/register">
          <SvgIcon iconName="weixin" iconClass="size-6" />
        </el-link>
        <el-link :underline="false" href="/register">
          <SvgIcon iconName="github" iconClass="size-6" />
        </el-link>
        <el-link :underline="false" href="/register">
          <SvgIcon iconName="gitee" iconClass="size-6" />
        </el-link>
        <el-link :underline="false" href="/register">
          <SvgIcon iconName="gitcode" iconClass="size-6" />
        </el-link>
      </div>
    </div>

</template>

<style scoped></style>
