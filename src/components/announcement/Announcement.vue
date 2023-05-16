<template>
  <q-banner dense class='announcement color-main'>
    <q-img :src='logoImg' class='logo' fit='contain' />
    <q-label>TODO: A brown fox jump over a white rabbit!</q-label>
  </q-banner>
</template>

<script setup lang='ts'>
import logoImg from '../../assets/Logo.svg'
</script>

<style lang='sass' scoped>
.announcement
  background: #D4FFE8
  width: 100%
  text-align: center
  min-height: 36px

.logo
  height: 24px
  width: 18px
  margin-right: 6px
</style>
