<template>
  <q-header class='header background-main'>
    <q-toolbar>
      <Logo class='logo' />
      <HeaderTools />
    </q-toolbar>
  </q-header>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const Logo = defineAsyncComponent(() => import('src/components/logo/Logo.vue'))
const HeaderTools = defineAsyncComponent(() => import('src/components/header/HeaderTools.vue'))

</script>

<style lang='sass' scoped>
.header
  height: 80px

.logo
  margin-left: 50px
  margin-top: 20px
  max-height: 40px
  max-width: 71px
</style>
