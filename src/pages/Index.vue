<template>
  <q-page class='row items-center justify-evenly'>
    <example-component />
  </q-page>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'
const ExampleComponent = defineAsyncComponent(() => import('components/CompositionComponent.vue'))
</script>
