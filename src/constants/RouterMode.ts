/**
 * @enum RouterMode
 *
 * 路由模式枚举，定义了两种常见的路由方式：`Hash` 和 `History`。
 * 1. `Hash`：使用 URL 的 `#` 部分表示路由。
 * 2. `History`：使用 HTML5 History API，更简洁的 URL。
 */
export enum RouterMode {
  /**
   * `Hash` 模式：路由路径以 `#` 开头，如 `example.com/#/home`。
   * 优点：无需后端支持，易于在浏览器管理。
   * 缺点：URL 包含 `#`，不够整洁。
   */
  Hash = 'hash',

  /**
   * `History` 模式：URL 更简洁，无 `#`，如 `example.com/home`。
   * 优点：URL 干净，符合传统网页结构。
   * 缺点：需要后端支持处理路由重定向。
   */
  History = 'history',
}
