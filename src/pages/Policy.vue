<template>
  <Policy />
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const Policy = defineAsyncComponent(() => import('src/components/agreement/Policy.vue'))

</script>
