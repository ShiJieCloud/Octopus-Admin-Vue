import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  // 对 .ts、.mts、.tsx 和 .vue 文件进行代码风格检查
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  // 忽略指定目录
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  // 合并配置集
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  // 跳过格式化相关的规则，避免 ESLint 和 Prettier 的格式化规则发生冲突
  skipFormatting,
  {
    rules: {
      // 强制使用单引号来保持一致的字符串风格
      'quotes': ['error', 'single'],

      // 强制在每个语句的末尾使用分号
      'semi': ['error', 'never'],

      // 禁止未使用的变量，避免引入冗余代码
      'no-unused-vars': ['warn'],

      // 强制变量声明按字母顺序排列
      'sort-vars': 'error',

      // 禁止使用 console.log，避免在生产环境中输出调试信息
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // 强制使用一致的行尾换行符（在 Unix 系统上使用 LF）
      'linebreak-style': ['error', 'unix'],

      // 强制使用全等运算符（=== 和 !==），避免隐式类型转换错误
      'eqeqeq': ['error', 'always'],

      // 强制函数调用时参数的换行风格
      'function-call-argument-newline': ['error', 'consistent'],

      // Vue 特有的规则：
      // 强制组件名称使用 PascalCase 风格，每个单词的首字母都大写，且不使用任何分隔符（如下划线或连字符）
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],

      // 强制使用简写形式（例如 v-bind="xxx" 而不是 v-bind:xxx）
      'vue/v-bind-style': ['error', 'shorthand'],

      // 强制 v-on 使用简写形式（例如 @click="handleClick"）
      'vue/v-on-style': ['error', 'shorthand'],

      // 禁止在模板中同时使用 v-if 和 v-for，防止代码复杂度过高
      'vue/no-v-for-template-key': 'error',

      // 强制 props 默认值与类型一致
      'vue/require-default-prop': 'warn',

      // 强制使用 v-slot 缩写语法
      'vue/v-slot-style': ['error', 'shorthand'],

      // 强制模板属性使用双引号
      'vue/html-quotes': ['error', 'double'],

      // TypeScript 特有的规则：
      // 可以使用 any 类型
      '@typescript-eslint/no-explicit-any': 'off',

      // 强制函数返回类型和模块边界类型显式声明
      '@typescript-eslint/explicit-module-boundary-types': 'warn',

      // 强制类成员使用一致的访问修饰符（public, private, protected）
      '@typescript-eslint/explicit-member-accessibility': 'warn',

      // 禁止无用的类型声明
      '@typescript-eslint/no-unused-vars': 'warn',

      // 强制函数参数添加类型注解
      '@typescript-eslint/parameter-properties': 'off',

      // 禁止魔法数字，推荐使用常量或者有意义的命名
      'no-magic-numbers': ['error', { ignore: [0, 1, -1] }],

      // 限制连续空行的数量，空行最多只能有一行
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],

      // 禁用组件名称必须是多词的规则
      'vue/multi-word-component-names': 'off',
    },
  },
]
