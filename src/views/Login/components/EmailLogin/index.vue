<script setup lang="ts" name="EmailLogin">
import { LoginMode } from '@/constants/LoginMode'
import { reactive, ref } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { EmailLoginData } from '@/types/login'

import { useThemeStore } from '@/stores/Theme'
import { TimeUnit } from '@/constants/TimeEnums'

const { setLoginMode } = useThemeStore()

const emailLoginFormRef = ref<FormInstance>()

const emailLoginForm = ref<EmailLoginData>({
  email: '',
  captcha: ''
})

const emailLoginFormRules = reactive<FormRules<EmailLoginData>>({
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,4}$/,
      message: '邮箱格式不正确',
      trigger: 'blur'
    },
  ],
  captcha: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    {
      len: 6,
      message: '验证码必须是6位',
      trigger: 'blur'
    },
  ],
})

// 验证码配置
const sendCaptchaConfig = reactive({
  isLoading: false,
  text: '获取验证码',
  isDisabled: false,
  countdown: 0,
})

// 发送验证码的方法
const sendCaptcha = () => {
  if (sendCaptchaConfig.countdown > 0) return // 如果倒计时还在进行中，则不执行

  sendCaptchaConfig.isLoading = true
  sendCaptchaConfig.isDisabled = true
  sendCaptchaConfig.text = '发送中...'

  startCountdown()

  sendCaptchaConfig.isLoading = false
}

// 倒计时更新发送验证码按钮状态
const startCountdown = () => {
  sendCaptchaConfig.countdown = 60
  sendCaptchaConfig.text = `${sendCaptchaConfig.countdown}s后重新获取`

  const interval = setInterval(() => {
    sendCaptchaConfig.countdown--

    if (sendCaptchaConfig.countdown <= 0) {
      clearInterval(interval)
      sendCaptchaConfig.text = '获取验证码'
      sendCaptchaConfig.isDisabled = false
    } else {
      sendCaptchaConfig.text = `${sendCaptchaConfig.countdown}s后重新获取`
    }
  }, TimeUnit.Second)
}

// 登录处理函数
const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  // 调用 form.validate 方法触发表单验证
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    }
  })
}

</script>

<template>
  <el-form ref="emailLoginFormRef" :rules="emailLoginFormRules" size="large" :model="emailLoginForm">
    <el-form-item prop="email">
      <el-input placeholder="邮箱" v-model="emailLoginForm.email">
        <template #prefix>
          <SvgIcon iconName="email" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="captcha">
      <div class="flex w-full justify-between gap-3">
        <el-input placeholder="短信验证码" maxlength="6" v-model="emailLoginForm.captcha" class="2/3">
          <template #prefix>
            <SvgIcon iconName="verify-code" />
          </template>
        </el-input>
        <el-button
          plain
          @click="sendCaptcha"
          :loading="sendCaptchaConfig.isLoading"
          :disabled="sendCaptchaConfig.isDisabled"
        >
          {{ sendCaptchaConfig.text }}
        </el-button>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button class="w-full" type="primary" @click="handleLogin(emailLoginFormRef)"> 登录</el-button>
    </el-form-item>
    <el-form-item>
      <el-button class="w-full" plain @click="setLoginMode(LoginMode.USERNAME)"> 返回</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped></style>
