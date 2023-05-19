<template>
  <Header />
  <Title class='horizontal-center' :title='$t("MSG_PRIVACY_NOTICE")' />
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const Header = defineAsyncComponent(() => import('src/components/agreement/Header.vue'))
const Title = defineAsyncComponent(() => import('src/components/agreement/Title.vue'))

</script>

<style lang='sass' scoped>
</style>
