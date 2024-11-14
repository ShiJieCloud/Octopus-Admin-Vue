// src/utils/pageTitle.ts

// 获取应用的基础标题（从 .env 文件中获取）
const title = import.meta.env.VITE_APP_TITLE || 'Vue App'

/**
 * 根据页面标题和应用标题拼接新的页面标题
 * @param pageTitle 页面标题
 * @returns 拼接后的标题
 */
export default function getPageTitle(pageTitle?: string): string {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
