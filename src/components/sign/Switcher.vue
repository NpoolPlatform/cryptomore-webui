<template>
  <div class='row text-primary text-center horizontal-center'>
    <q-space class='micro-hide' />
    <q-btn
      flat
      :class='[accountType === user.SignMethodType.Email ? "btn-main" : "btn-alt", "btn btn-small btn-left btn-switcher"]'
      @click='onSwitchClick(user.SignMethodType.Email)'
    >
      {{ $t('MSG_EMAIL') }}
    </q-btn>
    <q-btn
      flat
      :class='[accountType === user.SignMethodType.Mobile ? "btn-main" : "btn-alt", "btn btn-small btn-right btn-switcher"]'
      @click='onSwitchClick(user.SignMethodType.Mobile)'
    >
      {{ $t('MSG_MOBILE') }}
    </q-btn>
    <q-space class='micro-hide' />
  </div>
</template>

<script setup lang='ts'>
import { user } from 'src/mystore'
import { toRef, withDefaults, defineProps, defineEmits } from 'vue'

interface Props {
  accountType: user.SignMethodType
}
const props = withDefaults(defineProps<Props>(), {
  accountType: user.SignMethodType.Email
})
const accountType = toRef(props, 'accountType')

const emit = defineEmits<{(e: 'update:accountType', method: user.SignMethodType): void}>()

const onSwitchClick = (_method: user.SignMethodType) => {
  emit('update:accountType', _method)
}

</script>

<style lang='sass' scoped>
.btn-left
  border-radius: 8px 0 0 8px

.btn-right
  border-radius: 0 8px 8px 0

.btn-switcher
  min-width: 200px
  font-size: 16px
  font-weight: 500
  @media (max-width: 428px)
    min-width: 100%
    border-radius: 8px
    margin-bottom: 8px
</style>
