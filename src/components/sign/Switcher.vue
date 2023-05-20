<template>
  <div class='row text-primary text-center horizontal-center'>
    <q-btn
      flat
      :class='[accountType === basetypes.SignMethodType.Email ? "btn-main" : "btn-alt", "btn btn-small btn-left btn-switcher"]'
      @click='onSwitchClick(basetypes.SignMethodType.Email)'
    >
      {{ $t('MSG_EMAIL') }}
    </q-btn>
    <q-btn
      flat
      :class='[accountType === basetypes.SignMethodType.Mobile ? "btn-main" : "btn-alt", "btn btn-small btn-right btn-switcher"]'
      @click='onSwitchClick(basetypes.SignMethodType.Mobile)'
    >
      {{ $t('MSG_MOBILE') }}
    </q-btn>
  </div>
</template>

<script setup lang='ts'>
import { basetypes } from 'src/mystore'
import { toRef, withDefaults, defineProps, defineEmits } from 'vue'

interface Props {
  accountType: basetypes.SignMethodType
}
const props = withDefaults(defineProps<Props>(), {
  accountType: basetypes.SignMethodType.Email
})
const accountType = toRef(props, 'accountType')

const emit = defineEmits<{(e: 'update:accountType', method: basetypes.SignMethodType): void}>()

const onSwitchClick = (_method: basetypes.SignMethodType) => {
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
