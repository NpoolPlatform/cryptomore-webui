<template>
  <div class='title text-primary text-center'>
    {{ text }}
  </div>
</template>

<script setup lang='ts'>
import { withDefaults, defineProps, toRef } from 'vue'

interface Props {
  text: string
}

const props = withDefaults(defineProps<Props>(), {
  text: ''
})
const text = toRef(props, 'text')

</script>

<style lang='sass' scoped>
.title
  font-size: 40px
  line-height: 54px
  font-weight: 600px
</style>
