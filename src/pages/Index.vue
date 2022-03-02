<template>
  <Banner />
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const Banner = defineAsyncComponent(() => import('src/components/index/Banner.vue'))

</script>
