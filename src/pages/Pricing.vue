<template>
  <HeadBackground />
  <Switcher v-model:service-type='serviceType' />
  <div class='section-start-margin'>
    <CryptoPlusService v-if='serviceType === constants.ServiceType.CryptoPlusService' />
    <CryptoEnterprise v-else-if='serviceType === constants.ServiceType.CryptoEnterprise' />
    <MiningStaking v-else-if='serviceType === constants.ServiceType.MiningStaking' />
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref, watch } from 'vue'
import { constants } from 'src/const'
import { useSettingStore } from 'src/localstore/setting'

const HeadBackground = defineAsyncComponent(() => import('src/components/common/HeadBackground.vue'))
const Switcher = defineAsyncComponent(() => import('src/components/pricing/Switcher.vue'))
const CryptoPlusService = defineAsyncComponent(() => import('src/components/pricing/CryptoPlusService.vue'))
const CryptoEnterprise = defineAsyncComponent(() => import('src/components/pricing/CryptoEnterprise.vue'))
const MiningStaking = defineAsyncComponent(() => import('src/components/pricing/MiningStaking.vue'))

const setting = useSettingStore()
const serviceType = ref(setting.PricingMenu)

watch(serviceType, () => {
  setting.PricingMenu = serviceType.value
})

</script>
