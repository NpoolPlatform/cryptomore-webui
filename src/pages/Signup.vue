<template>
  <div :style='{marginTop: "120px", marginBottom: "160px", maxWidth: "400px"}' class='horizontal-center'>
    <Title :text='$t("MSG_SIGNUP")' />
    <Switcher :style='{marginTop: "48px"}' v-model:account-type='accountType' />
    <q-input v-model='account' :style='{width: "100", marginTop: "24px"}' />
    <q-input v-model='password' :style='{width: "100%"}' />
    <div class='text-center horizontal-center' :style='{marginTop: "37px"}'>
      <Aggrement />
    </div>
    <div class='text-center' :style='{marginTop: "40px"}'>
      <q-btn flat class='btn btn-medium btn-main' :style='{width: "100%"}'>
        {{ $t('MSG_SIGNUP') }}
      </q-btn>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref } from 'vue'
import { user } from 'src/mystore'

const Title = defineAsyncComponent(() => import('src/components/sign/Title.vue'))
const Switcher = defineAsyncComponent(() => import('src/components/sign/Switcher.vue'))
const Aggrement = defineAsyncComponent(() => import('src/components/sign/Aggrement.vue'))

const accountType = ref(user.SignMethodType.Email)
const account = ref('')
const password = ref('')

</script>

<style lang='sass' scoped>
.btn-sign
  width: 100%
</style>
