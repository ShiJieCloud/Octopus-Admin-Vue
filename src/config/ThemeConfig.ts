import { NumberRange } from '@/constants/NumberRange'

// 系统主题配置类
export class ThemeConfig {

  // 图标基础大小
  private static readonly iconBaseSize: number = NumberRange.Twenty

  public static getIconBaseSize(): number {
    return this.iconBaseSize
  }

}
