<template>
  <div class='row'>
    <LangSwitcher />
    <MenuFolder class='mobile-display' />
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'
const LangSwitcher = defineAsyncComponent(() => import('src/components/lang/LangSwitcher.vue'))
const MenuFolder = defineAsyncComponent(() => import('src/components/header/MenuFolder.vue'))
</script>

<style lang='sass' scoped>
.icon
  width: 24px
  height: 24px

.separator
  margin: 6% 22px 6% 22px
</style>
