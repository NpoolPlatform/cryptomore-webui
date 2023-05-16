<template>
  <q-toolbar class='header full-width'>
    <div class='content-width row'>
      <Logo height='40px' img-width='35px' class='logo' />
      <q-space />
      <HeaderMenu />
      <q-space />
      <HeaderTools />
    </div>
  </q-toolbar>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const Logo = defineAsyncComponent(() => import('src/components/logo/Logo.vue'))
const HeaderTools = defineAsyncComponent(() => import('src/components/header/HeaderTools.vue'))
const HeaderMenu = defineAsyncComponent(() => import('src/components/header/HeaderMenu.vue'))

</script>

<style lang='sass' scoped>
.header
  height: 76px
  justify-content: center

.logo
  margin: 18px 0 18px 0
</style>
