<template>
  <HeadBackground />
  <Switcher v-model:service-type='serviceType' />
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref } from 'vue'
import { constants } from 'src/const'

const HeadBackground = defineAsyncComponent(() => import('src/components/common/HeadBackground.vue'))
const Switcher = defineAsyncComponent(() => import('src/components/pricing/Switcher.vue'))

const serviceType = ref(constants.ServiceType.CryptoPlusService)

</script>
