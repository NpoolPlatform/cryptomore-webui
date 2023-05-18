<template>
  <div class='row text-primary text-center horizontal-center'>
    <q-space class='micro-hide' />
    <q-btn
      flat
      :class='[method === user.SignMethodType.Email ? "btn-main" : "btn-alt", "btn btn-small btn-left btn-switcher"]'
      @click='onSwitchClick(user.SignMethodType.Email)'
    >
      {{ $t('MSG_EMAIL') }}
    </q-btn>
    <q-btn
      flat
      :class='[method === user.SignMethodType.Mobile ? "btn-main" : "btn-alt", "btn btn-small btn-right btn-switcher"]'
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
  method: user.SignMethodType
}
const props = withDefaults(defineProps<Props>(), {
  method: user.SignMethodType.Email
})
const method = toRef(props, 'method')

const emit = defineEmits<{(e: 'update:method', method: user.SignMethodType): void}>()

const onSwitchClick = (_method: user.SignMethodType) => {
  emit('update:method', _method)
}

</script>

<style lang='sass' scoped>
.btn-left
  border-radius: 8px 0 0 8px
  border-right: 0

.btn-right
  border-radius: 0 8px 8px 0
  border-left: 0

.btn-switcher
  min-width: 200px
  font-size: 16px
  font-weight: 500
  @media (max-width: 400px)
    min-width: calc(100% - 12px)
    border-radius: 8px
    margin-bottom: 8px
    margin-left: 6px
</style>
