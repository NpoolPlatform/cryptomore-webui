<template>
  <svg
    width='26' height='26' viewBox='0 0 26 26' :fill='color'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      y='6' width='20' height='20' :fill='color'
      fill-opacity='0.4'
    />
    <rect
      x='14' width='12' height='12' :fill='color'
      fill-opacity='0.4'
    />
  </svg>
</template>

<script setup lang='ts'>
import { withDefaults, defineProps, toRef } from 'vue'
interface Props {
  color: string
}
const props = withDefaults(defineProps<Props>(), {
  color: 'rgba(55, 145, 247, 0.4)'
})
const color = toRef(props, 'color')
</script>
