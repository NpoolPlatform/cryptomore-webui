<template>
  <div :style='{height: height}' class='row'>
    <q-img :src='logoImg' class='full-height logo-img' :style='{width: imgWidth}' />
    <div class='micro-hide'>
      <q-img :src='logoTextImg' :stype='{height: textHeight}' />
      <br>
      <span :style='{fontSize: subtitleFontSize}' class='font-small color-main-transparent-60'>Your Reliable Crypto+ Partner</span>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { withDefaults, defineProps, toRef } from 'vue'

interface Props {
  height: string
  imgWidth: string
  textHeight: string
  subtitleFontSize: string
}

const props = withDefaults(defineProps<Props>(), {
  height: '40px',
  imgWidth: '40px',
  textHeight: '14px',
  subtitleFontSize: '12px'
})
const height = toRef(props, 'height')
const imgWidth = toRef(props, 'imgWidth')

import logoImg from '../../assets/Logo.svg'
import logoTextImg from '../../assets/CryptoMoreText.svg'

</script>

<style lang='sass' scoped>
.logo-img
  margin-right: 6px
</style>
