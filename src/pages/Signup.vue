<template>
  <div :style='{marginTop: "100px", marginBottom: "120px", maxWidth: "400px"}' class='horizontal-center'>
    <Title :text='$t("MSG_SIGNUP")' />
    <Switcher :style='{marginTop: "48px"}' v-model:account-type='accountType' />
    <q-input
      v-model='account'
      :style='{width: "100", marginTop: "24px"}'
      label='Email address' ref='accountInput'
      :rules='[val => validator.validateEmail(val) || $t("MSG_INVALID_EMAIL")]'
      lazy-rules='ondemand'
      @blur='onAccountInputBlur'
      @focus='onAccountInputFocus'
    >
      <template #prepend>
        <q-icon color='primary' name='contact_mail' />
      </template>
      <template #append>
        <q-btn
          flat
          size='12px'
          class='btn btn-mini'
          :label='sendBtnText'
          no-caps
          @click='onSendClick'
          :disabled='sending'
        />
      </template>
    </q-input>
    <q-input v-model='verificationCode' :style='{width: "100%"}' label='Email verification code'>
      <template #prepend>
        <q-icon color='primary' name='domain_verification' />
      </template>
    </q-input>
    <q-input v-model='password' :style='{width: "100%"}' label='Password'>
      <template #prepend>
        <q-icon color='primary' name='password' />
      </template>
    </q-input>
    <div class='text-center horizontal-center' :style='{marginTop: "37px"}'>
      <Agreement />
    </div>
    <div class='text-center' :style='{marginTop: "40px"}'>
      <q-btn flat class='btn btn-medium btn-main' :style='{width: "100%"}'>
        {{ $t('MSG_SIGNUP') }}
      </q-btn>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref, computed } from 'vue'
import { user } from 'src/mystore'
import { useI18n } from 'vue-i18n'
import { validator } from 'src/utils'
import { QInput } from 'quasar'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const Title = defineAsyncComponent(() => import('src/components/sign/Title.vue'))
const Switcher = defineAsyncComponent(() => import('src/components/sign/Switcher.vue'))
const Agreement = defineAsyncComponent(() => import('src/components/sign/Agreement.vue'))

const accountType = ref(user.SignMethodType.Email)
const account = ref('')
const verificationCode = ref('')
const password = ref('')

const sending = ref(false)
const timeout = ref(60)

const accountInput = ref(QInput)
const onAccountInputBlur = () => {
  void (accountInput.value as unknown as QInput).validate(account.value)
}
const onAccountInputFocus = () => {
  (accountInput.value as unknown as QInput).resetValidation()
}

const sendEmailCode = () => {
  if (!(accountInput.value as unknown as QInput).validate(account.value)) {
    return false
  }
  return true
}

const sendPhoneCode = () => {
  return false
}

const onSendClick = () => {
  let sent = false
  switch (accountType.value) {
    case user.SignMethodType.Email:
      sent = sendEmailCode()
      break
    case user.SignMethodType.Mobile:
      sent = sendPhoneCode()
      break
  }

  if (!sent) {
    return
  }

  sending.value = true
  timeout.value = 60
  const interval = setInterval(() => {
    if (timeout.value === 0) {
      clearInterval(interval)
      sending.value = false
      return
    }
    timeout.value--
  }, 1000)
}

const sendBtnText = computed(() => {
  return sending.value ? timeout.value.toFixed(0) + t('MSG_SECOND_SHORT') : t('MSG_SEND')
})

</script>

<style lang='sass' scoped>
.btn-sign
  width: 100%
</style>
