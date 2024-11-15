/// <reference types="vite/client" />
// 定义泛型 Recordable，键类型为字符串、值类型为 T
declare type Recordable<T = any> = Record<string, T>;

// 定义接口 ViteEnv，描述项目的环境变量结构
declare interface ViteEnv {
  // 运行环境，可选值为 'development', 'production' 或 'test'
  VITE_NODE_ENV: 'development' | 'production' | 'test'
  // 应用标题
  VITE_APP_TITLE: string
  // 应用信息
  VITE_APP_DESCRIPTION: string
  // 服务端口
  VITE_SERVER_PORT: number
  // 是否自动在浏览器打开应用
  VITE_SERVER_OPEN: boolean
  // 公共路径
  VITE_BASE_URL: string
  // 全局 API 地址
  VITE_API_URL: string
  // API 超时时间
  VITE_API_TIMEOUT: number
  // 路由模式
  VITE_ROUTER_MODE: string
  // UI 默认布局
  VITE_UI_DEFAULT_LAYOUT: string
  // UI 默认主题
  VITE_UI_DEFAULT_THEME: string
  // 代理配置
  VITE_PROXY: [string, string][]
}

/* 声明对象 __APP_INFO__ 包含应用程序的元数据 */
declare const __APP_INFO__: {
  // 应用程序包的信息
  pkg: {
    // 应用程序包的名称
    name: string;
    // 应用程序包的版本
    version: string;
    // 应用程序的依赖项记录，其中键为依赖项名称，值为版本
    dependencies: Recordable<string>;
    // 应用程序的开发依赖项记录，其中键为依赖项名称，值为版本
    devDependencies: Recordable<string>;
  };
  // 应用程序最后构建的时间戳
  lastBuildTime: string;
}
