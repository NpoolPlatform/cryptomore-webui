<template>
  <Banner />
  <CryptoService class='section-start-margin' />
  <Leadership class='section-start-margin' />
  <ActiveDeveloper />
  <Subscribe />
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const Banner = defineAsyncComponent(() => import('src/components/index/Banner.vue'))
const CryptoService = defineAsyncComponent(() => import('src/components/index/CryptoService.vue'))
const Leadership = defineAsyncComponent(() => import('src/components/index/Leadership.vue'))
const ActiveDeveloper = defineAsyncComponent(() => import('src/components/index/ActiveDeveloper.vue'))
const Subscribe = defineAsyncComponent(() => import('src/components/index/Subscribe.vue'))

</script>
