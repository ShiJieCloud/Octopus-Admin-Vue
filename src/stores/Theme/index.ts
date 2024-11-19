import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { ThemeConfig } from '@/config/ThemeConfig'

export const useThemeStore = defineStore(
  'Theme',
  () => {
    const iconSize = ref(ThemeConfig.getIconBaseSize())

    const resetIconSize = () => {
      iconSize.value = ThemeConfig.getIconBaseSize()
    }

    return {
      iconSize,
      resetIconSize
    }
  },
  {
    persist: true,
  },
)
