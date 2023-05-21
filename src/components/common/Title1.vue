<template>
  <div class='title'>
    <div class='text-center more color-main-transparent-80'>
      {{ $t('MSG_CRYPTO_MORE') }}
    </div>
    <div class='text-center agreement-terms text-primary'>
      {{ title }}
    </div>
    <div class='text-center updated color-main-transparent-80'>
      {{ subtitle }}
    </div>
  </div>
</template>

<script setup lang='ts'>
import { withDefaults, defineProps, toRef } from 'vue'

interface Props {
  title: string
  subtitle: string
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: ''
})
const title = toRef(props, 'title')
const subtitle = toRef(props, 'subtitle')
</script>

<style lang='sass' scoped>
.title
  padding-top: 136px
  padding-bottom: 120px
  .more
    font-size: 14px
    font-weight: 500
    line-height: 24px
    letter-spacing: 0.4em
    text-transform: uppercase
  .agreement-terms
    margin-top: 8px
    font-size: 72px
    font-weight: 800
    line-height: 80px
  .updated
    margin-top: 24px
    font-size: 24px
    font-weight: 500
    line-height: 32px
</style>
