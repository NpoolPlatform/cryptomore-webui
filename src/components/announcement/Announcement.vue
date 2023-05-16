<template>
  <div class='announcement color-main'>
    <q-img :src='logoImg' class='logo' fit='contain' />
    <span>TODO: A brown fox jump over a white rabbit!</span>
  </div>
</template>

<script setup lang='ts'>
import logoImg from '../../assets/Logo.svg'
</script>

<style lang='sass' scoped>
.announcement
  background: #D4FFE8
  width: 100%
  text-align: center
  font-size: 14px
  padding: 5px 0

.logo
  height: 26px
  width: 18px
  margin: 0 6px 0 0
</style>
