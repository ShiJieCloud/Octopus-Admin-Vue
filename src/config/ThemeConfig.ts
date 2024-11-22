import { NumberRange } from '@/constants/NumberRange'
import { LoginMode } from '@/constants/LoginMode'

// 系统主题配置类
export class ThemeConfig {
  // 图标基础大小
  private static readonly iconBaseSize: number = NumberRange.Twenty
  private static readonly defaultLoginMode: LoginMode = LoginMode.USERNAME

  public static getIconBaseSize(): number {
    return this.iconBaseSize
  }

  public static getDefaultLoginMode(): LoginMode {
    return this.defaultLoginMode
  }
}
