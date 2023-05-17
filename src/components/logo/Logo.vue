<template>
  <div :style='{height: height}' class='row'>
    <q-img :src='logoImg' class='full-height logo-img' :style='{width: imgWidth}' />
    <div class='micro-hide' :style='{marginTop: marginTop}'>
      <q-img :height='textHeight' :src='logoTextImg' />
      <span :style='{fontSize: subtitleFontSize}' class='font-small color-main-transparent-60'>{{ $t('MSG_BANNER_SLOGAN') }}</span>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { withDefaults, defineProps, toRef, computed } from 'vue'

interface Props {
  height: string
  imgWidth: string
  textHeight: string
  subtitleFontSize: string
}

const props = withDefaults(defineProps<Props>(), {
  height: '40px',
  imgWidth: '40px',
  textHeight: '16px',
  subtitleFontSize: '12px'
})
const height = toRef(props, 'height')
const imgWidth = toRef(props, 'imgWidth')
const textHeight = toRef(props, 'textHeight')
const subtitleFontSize = toRef(props, 'subtitleFontSize')

const heightDec = computed(() => Number(height.value.replace('px', '')))
const textHeightDec = computed(() => Number(textHeight.value.replace('px', '')))
const subtitleFontSizeDec = computed(() => Number(subtitleFontSize.value.replace('px', '')))
const marginTop = computed(() => ((heightDec.value - textHeightDec.value - subtitleFontSizeDec.value - 10) / 2).toFixed(0) + 'px')

import logoImg from '../../assets/Logo.svg'
import logoTextImg from '../../assets/CryptoMoreText.svg'

</script>

<style lang='sass' scoped>
.logo-img
  margin-right: 6px
</style>
