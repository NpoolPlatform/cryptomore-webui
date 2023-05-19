<template>
  <div class='row'>
    <q-checkbox
      v-model='_read'
      size='28px'
      @toggle='onAggrementClick'
    />
    <div
      :style='{lineHeight: "28px", fontSize: "14px", fontWeight: 400}'
      class='color-main-transparent-60'
      v-html='$t("MSG_READ_AGREEMENT", { TERMS_URI: "#/terms", PRIVACY_URI: "#/privacy" })'
    />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const _read = ref(false)

const onAggrementClick = () => {
  // TODO
}
</script>
