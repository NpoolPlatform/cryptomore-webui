<template>
  <div class='row'>
    <div
      :style='{lineHeight: "28px", fontSize: "14px", fontWeight: 400, textAlign: "left"}'
      class='color-main-transparent-60'
      v-html='$t("MSG_READ_AGREEMENT", { TERMS_URI: "terms", PRIVACY_URI: "policy" })'
    />
  </div>
</template>

<script setup lang='ts'>
</script>
