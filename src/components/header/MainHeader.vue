<template>
  <q-toolbar class='header'>
    <Logo :class='[_setting.ShowBigLogo ? "big-logo" : "small-logo"]' />
    <q-space />
    <HeaderTools />
  </q-toolbar>
</template>

<script setup lang='ts'>
import { setting } from 'src/store'
import { defineAsyncComponent } from 'vue'

const Logo = defineAsyncComponent(() => import('src/components/logo/Logo.vue'))
const HeaderTools = defineAsyncComponent(() => import('src/components/header/HeaderTools.vue'))

const _setting = setting.useSettingStore()

</script>

<style lang='sass' scoped>
.header
  height: 80px
  padding: 0 80px

.small-logo
  max-height: 40px
  max-width: 71px

.big-logo
  max-height: 60px
  max-width: 106px
</style>
