<template>
  <div :style='{marginTop: "160px", marginBottom: "160px"}'>
    <Title :text='$t("MSG_SIGNUP")' :style='{marginTop: "160px",}' />
    <Switcher :style='{marginTop: "48px"}' v-model:method='method' />
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref } from 'vue'
import { user } from 'src/mystore'

const Title = defineAsyncComponent(() => import('src/components/sign/Title.vue'))
const Switcher = defineAsyncComponent(() => import('src/components/sign/Switcher.vue'))

const method = ref(user.SignMethodType.Email)

</script>
