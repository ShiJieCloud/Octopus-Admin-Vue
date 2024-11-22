<script setup lang="ts" name="RegisterForm"></script>

<template>
  <div class="w-full h-full">
    <el-form ref="ruleFormRef" size="large">
      <el-form-item prop="username">
        <el-input placeholder="用户名" clearable>
          <template #prefix>
            <SvgIcon iconName="user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input placeholder="手机号码">
          <template #prefix>
            <SvgIcon iconName="phone" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="captcha">
        <div class="flex items-center w-full gap-4">
          <el-input placeholder="请输入验证码" class="w-2/3">
            <template #prefix>
              <SvgIcon iconName="captcha" iconClass="size-5" />
            </template>
          </el-input>
          <div class="w-1/3 h-10 bg-gray-300 cursor-pointer">
            <el-image fit="contain" class="w-full" src="" alt="Captcha" />
          </div>
        </div>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="密码" type="password" show-password clearable>
          <template #prefix>
            <SvgIcon iconName="password" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="确认密码" type="password" show-password clearable>
          <template #prefix>
            <SvgIcon iconName="password" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" type="primary"> 点击注册</el-button>
        <div class="leading-6 flex w-full justify-center">
          <el-link class="text-md" type="primary" href="/login"> 已有账号？去登录</el-link>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
