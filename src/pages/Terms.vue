<template>
  <Terms />
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const Terms = defineAsyncComponent(() => import('src/components/agreement/Terms.vue'))

</script>
