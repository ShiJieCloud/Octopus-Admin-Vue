<script setup lang="ts">
import { computed, useAttrs } from 'vue'

// 定义组件的props
const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  iconClass: {
    type: String,
    default: ''
  }
})

// 计算属性: 根据 iconClass 构造图标的引用路径
const iconName = computed(() => `#icon-${props.iconName}`)

// 计算属性: 处理SVG的类名
const svgClass = computed(() => {
  return props.iconClass ? `svg-icon ${props.iconClass}` : 'svg-icon'
})

// 获取传递给组件的事件监听器和其他未声明的属性
const listeners = useAttrs()
</script>

<template>
  <svg :class="svgClass" aria-hidden="true" v-on="listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
