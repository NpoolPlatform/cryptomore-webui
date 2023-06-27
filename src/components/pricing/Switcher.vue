<template>
  <div class='row switcher horizontal-center'>
    <q-btn
      flat
      :class='["btn btn-medium", serviceType === constants.ServiceType.CryptoPlusService ? "btn-main" : ""]'
      :label='$t("MSG_CRYPTO_PLUS_SERVICE")'
      no-caps
      @click='onServiceTypeSwitch(constants.ServiceType.CryptoPlusService)'
    />
    <q-btn
      flat
      :class='["btn btn-medium", serviceType === constants.ServiceType.CryptoEnterprise ? "btn-main" : ""]'
      :label='$t("MSG_CRYPTO_ENTERPRISE")'
      no-caps
      @click='onServiceTypeSwitch(constants.ServiceType.CryptoEnterprise)'
    />
    <q-btn
      flat
      :class='["btn btn-medium", serviceType === constants.ServiceType.MiningStaking ? "btn-main" : ""]'
      :label='$t("MSG_MINING_STAKING")'
      no-caps
      @click='onServiceTypeSwitch(constants.ServiceType.MiningStaking)'
    />
  </div>
  <transition name='q-transition--slide-left' :duration='500' appear>
    <div
      v-if='serviceType === constants.ServiceType.CryptoPlusService'
      :style='{marginTop: "64px"}'
      v-html='$t("MSG_ONE_STOP_CRYPTO_SERVICES")'
      class='text-primary label text-center horizontal-center'
    />
  </transition>
  <transition name='q-transition--slide-left' :duration='500' appear>
    <div
      v-if='serviceType === constants.ServiceType.CryptoEnterprise'
      :style='{marginTop: "64px"}'
      v-html='$t("MSG_DEDICATED_CRYPTO_ENTERPRISE_SOLUTION")'
      class='text-primary label text-center horizontal-center'
    />
  </transition>
  <transition name='q-transition--slide-left' :duration='500' appear>
    <div
      v-if='serviceType === constants.ServiceType.MiningStaking'
      :style='{marginTop: "64px"}'
      v-html='$t("MSG_LEADER_MINING_STAKING_OPERATOR")'
      class='text-primary label text-center horizontal-center'
    />
  </transition>
</template>

<script setup lang='ts'>
import { withDefaults, defineProps, toRef, defineEmits } from 'vue'
import { constants } from 'src/const'

interface Props {
  serviceType: constants.ServiceType
}

const props = withDefaults(defineProps<Props>(), {
  serviceType: constants.ServiceType.CryptoEnterprise
})
const serviceType = toRef(props, 'serviceType')

const emit = defineEmits<{(e: 'update:serviceType', serviceType: constants.ServiceType): void}>()

const onServiceTypeSwitch = (_serviceType: constants.ServiceType) => {
  emit('update:serviceType', _serviceType)
}

</script>

<style lang='sass' scoped>
.switcher
  border: 1px solid #EAEAEA
  background: #FAFAFA
  min-height: 54px
  border-radius: 27px
  max-width: 644px
  padding: 2px
  margin-top: 100px
  @media (max-width: 672px)
    margin-left: 6px
    margin-right: 6px
  .btn
    @media (max-width: 1160px)
      width: 100%

.label
  font-size: 72px
  font-weight: 600
  line-height: 80px
  max-width: 1040px
</style>
