<template>
  <div class='row text-primary text-center horizontal-center'>
    <q-btn
      flat
      :class='[accountType === appuserbase.SignMethodType.Email ? "btn-main" : "btn-alt", "btn btn-small btn-left btn-switcher"]'
      @click='onSwitchClick(appuserbase.SignMethodType.Email)'
    >
      {{ $t('MSG_EMAIL') }}
    </q-btn>
    <q-btn
      flat
      :class='[accountType === appuserbase.SignMethodType.Mobile ? "btn-main" : "btn-alt", "btn btn-small btn-right btn-switcher"]'
      @click='onSwitchClick(appuserbase.SignMethodType.Mobile)'
    >
      {{ $t('MSG_MOBILE') }}
    </q-btn>
  </div>
</template>

<script setup lang='ts'>
import { appuserbase } from 'src/npoolstore'
import { toRef, withDefaults, defineProps, defineEmits } from 'vue'

interface Props {
  accountType: appuserbase.SignMethodType
}
const props = withDefaults(defineProps<Props>(), {
  accountType: appuserbase.SignMethodType.Email
})
const accountType = toRef(props, 'accountType')

const emit = defineEmits<{(e: 'update:accountType', method: appuserbase.SignMethodType): void}>()

const onSwitchClick = (_method: appuserbase.SignMethodType) => {
  emit('update:accountType', _method)
}

</script>

<style lang='sass' scoped>
.btn-left
  border-radius: 8px 0 0 8px

.btn-right
  border-radius: 0 8px 8px 0

.btn-switcher
  width: 50%
  font-size: 16px
  font-weight: 500
  @media (max-width: 428px)
    width: 100%
    border-radius: 8px
    margin-bottom: 8px
</style>
