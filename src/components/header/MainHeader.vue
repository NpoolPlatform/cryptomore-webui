<template>
  <q-toolbar class='header full-width'>
    <div class='content-width row'>
      <div class='logo cursor-pointer' @click='onLogoClick'>
        <Logo height='40px' img-width='35px' />
      </div>
      <q-space />
      <HeaderMenu class='mobile-hide' />
      <q-space />
      <SignHelper class='mini-hide' />
      <q-separator color='secondary' class='separator mini-hide' vertical />
      <HeaderTools />
    </div>
  </q-toolbar>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'

const Logo = defineAsyncComponent(() => import('src/components/logo/Logo.vue'))
const HeaderTools = defineAsyncComponent(() => import('src/components/header/HeaderTools.vue'))
const HeaderMenu = defineAsyncComponent(() => import('src/components/header/HeaderMenu.vue'))
const SignHelper = defineAsyncComponent(() => import('src/components/header/SignHelper.vue'))

const router = useRouter()
const onLogoClick = () => {
  void router.push({ path: '/' })
}

</script>

<style lang='sass' scoped>
.header
  height: 76px
  justify-content: center
  background: white

.header .logo
  margin: 18px 0 18px 0

.header .separator
  margin: 24px 0
</style>
