<template>
  <div class='subscribe content-width horizontal-center'>
    <div class='title text-center text-primary'>
      {{ $t('MSG_SUBSCRIBE_TO_NEWS') }}
    </div>
    <div class='row horizontal-center input'>
      <q-input
        class='input-box'
        outlined
        bottom-slots
        v-model='emailAddress'
        :label='$t("MSG_SUBSCRIBE_WITH_EMAIL")'
        rounded
        color='primary'
      />
      <q-btn
        flat
        class='btn btn-main btn-large subscribe-btn'
        :label='$t("MSG_SUBSCRIBE")'
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const emailAddress = ref('')
</script>

<style lang='sass' scoped>
.subscribe
  padding-top: 120px
  padding-bottom: 120px

.subscribe .title
  font-size: 54px
  font-weight: 600
  line-height: 60px

.subscribe .input
  max-width: 854px
  margin-top: 100px
  height: 64px

.subscribe .input .subscribe-btn
  width: 166px
  margin-left: -166px
  margin-top: 0
  height: 56px
  border-radius: 0 28px 28px 0

.subscribe .input .input-box
  max-width: 854px
  width: 100%

::v-deep .q-field__control::after
  color: $secondary
</style>
