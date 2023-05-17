<template>
  <Banner />
  <CryptoService class='section-start' />
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const Banner = defineAsyncComponent(() => import('src/components/index/Banner.vue'))
const CryptoService = defineAsyncComponent(() => import('src/components/index/CryptoService.vue'))

</script>
