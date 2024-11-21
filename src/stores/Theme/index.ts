import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ThemeConfig } from '@/config/ThemeConfig'
import { LoginMode } from '@/constants/LoginMode'

export const useThemeStore = defineStore(
  'Theme',
  () => {
    const iconSize = ref(ThemeConfig.getIconBaseSize())
    const loginMode = ref(ThemeConfig.getDefaultLoginMode())

    const resetIconSize = () => {
      iconSize.value = ThemeConfig.getIconBaseSize()
    }

    // 设置登录方式
    const setLoginMode = (mode: LoginMode): void => {
      loginMode.value = mode
    }

    return {
      iconSize,
      loginMode,
      resetIconSize,
      setLoginMode
    }
  },
  {
    persist: true,
  },
)
