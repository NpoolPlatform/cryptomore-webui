<template>
  <div class='row'>
    <LangSwitcher />
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'
const LangSwitcher = defineAsyncComponent(() => import('src/components/lang/LangSwitcher.vue'))
</script>

<style lang='sass' scoped>
.icon
  width: 24px
  height: 24px

.separator
  margin: 6% 22px 6% 22px
</style>
