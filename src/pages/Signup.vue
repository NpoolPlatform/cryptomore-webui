<template>
  <div :style='{marginTop: "40px", marginBottom: "120px", maxWidth: "400px"}' class='horizontal-center'>
    <Title :text='$t("MSG_CREATE_ACCOUNT")' />
    <Switcher :style='{marginTop: "48px"}' v-model:account-type='accountType' />
    <CountryCode v-if='accountType === user.SignMethodType.Mobile' v-model:country='country' :style='{width: "100", marginTop: "48px"}' />
    <q-input
      v-model='account'
      :style='{width: "100%", marginTop: accountType === user.SignMethodType.Email ? "24px" : "12px"}'
      :label='accountType === user.SignMethodType.Email ? $t("MSG_EMAIL_ADDRESS") : $t("MSG_PHONE_NO")'
      ref='accountInput'
      :rules='accountType === user.SignMethodType.Email ? [val => validator.validateEmail(val) || $t("MSG_INVALID_EMAIL")] : [val => validator.validatePhoneNO(val) || $t("MSG_INVALID_PHONE_NO")]'
      lazy-rules='ondemand'
      @blur='onAccountInputBlur'
      @focus='onAccountInputFocus'
    >
      <template #prepend>
        <q-icon v-if='accountType === user.SignMethodType.Email' color='primary' name='contact_mail' />
        <q-icon v-if='accountType === user.SignMethodType.Mobile' color='primary' name='contact_phone' />
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
    <q-input
      v-model='verificationCode'
      :style='{width: "100%"}'
      label='Email verification code'
      ref='verificationCodeInput'
      :rules='[val => validator.validateVerficationCode(val) || $t("MSG_INVALID_VERIFICATION_CODE")]'
      lazy-rules='ondemand'
      @blur='onVerificationCodeInputBlur'
      @focus='onVerificationCodeInputFocus'
    >
      <template #prepend>
        <q-icon color='primary' name='domain_verification' />
      </template>
    </q-input>
    <q-input
      v-model='password'
      :style='{width: "100%"}'
      label='Password'
      ref='passwordInput'
      :rules='[val => validator.validatePassword(val) || $t("MSG_INVALID_PASSWORD")]'
      lazy-rules='ondemand'
      @blur='onPasswordInputBlur'
      @focus='onPasswordInputFocus'
    >
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
import { defineAsyncComponent, ref, computed, watch } from 'vue'
import { user, g11n } from 'src/mystore'
import { useI18n } from 'vue-i18n'
import { validator } from 'src/utils'
import { QInput } from 'quasar'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const Title = defineAsyncComponent(() => import('src/components/sign/Title.vue'))
const Switcher = defineAsyncComponent(() => import('src/components/sign/Switcher.vue'))
const Agreement = defineAsyncComponent(() => import('src/components/sign/Agreement.vue'))
const CountryCode = defineAsyncComponent(() => import('src/components/sign/CountryCode.vue'))

const accountType = ref(user.SignMethodType.Email)
const account = ref('')
const verificationCode = ref('')
const password = ref('')
const country = ref(undefined as unknown as g11n.AppCountry.AppCountry)

const sending = ref(false)
const timeout = ref(60)

const resetValidation = () => {
  void (verificationCodeInput.value as unknown as QInput).resetValidation()
  void (accountInput.value as unknown as QInput).resetValidation()
  void (passwordInput.value as unknown as QInput).resetValidation()
}

watch(accountType, () => {
  resetValidation()
})

const accountInput = ref(QInput)
const onAccountInputBlur = () => {
  void (accountInput.value as unknown as QInput).validate(account.value)
}
const onAccountInputFocus = () => {
  resetValidation()
}

const verificationCodeInput = ref(QInput)
const onVerificationCodeInputBlur = () => {
  void (verificationCodeInput.value as unknown as QInput).validate(account.value)
}
const onVerificationCodeInputFocus = () => {
  resetValidation()
}

const passwordInput = ref(QInput)
const onPasswordInputBlur = () => {
  void (passwordInput.value as unknown as QInput).validate(account.value)
}
const onPasswordInputFocus = () => {
  resetValidation()
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
  let _account = account.value

  switch (accountType.value) {
    case user.SignMethodType.Email:
      sent = sendEmailCode()
      break
    case user.SignMethodType.Mobile:
      sent = sendPhoneCode()
      _account = country.value?.Code + account.value
      break
  }

  if (!sent) {
    return
  }

  console.log('send code to', _account)

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
