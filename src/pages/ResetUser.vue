<template>
  <div :style='{marginTop: "80px", marginBottom: "120px", maxWidth: "400px"}' class='horizontal-center'>
    <Title :text='$t("MSG_RESET_PASSWORD")' />
    <Switcher :style='{marginTop: "32px"}' v-model:account-type='accountType' />
    <CountryCode v-if='accountType === appuserbase.SignMethodType.Mobile' v-model:country='country' :style='{width: "100%", marginTop: "24px"}' />
    <q-input
      dense
      v-model='account'
      :style='{width: "100%", marginTop: accountType === appuserbase.SignMethodType.Email ? "24px" : "12px"}'
      :label='accountType === appuserbase.SignMethodType.Email ? $t("MSG_EMAIL_ADDRESS") : $t("MSG_PHONE_NO")'
      ref='accountInput'
      :rules='accountType === appuserbase.SignMethodType.Email ? [val => utils.validateEmailAddress(val) || $t("MSG_INVALID_EMAIL")] : [val => utils.validateMobileNO(val) || $t("MSG_INVALID_PHONE_NO")]'
      lazy-rules='ondemand'
      @blur='onAccountInputBlur'
      @focus='onAccountInputFocus'
    >
      <template #prepend>
        <q-icon v-if='accountType === appuserbase.SignMethodType.Email' color='primary' name='contact_mail' />
        <q-icon v-if='accountType === appuserbase.SignMethodType.Mobile' color='primary' name='contact_phone' />
      </template>
      <template #append>
        <q-btn
          flat
          size='12px'
          class='btn btn-mini'
          :label='sendBtnText'
          @click='onSendClick'
          :disabled='sending'
        />
      </template>
    </q-input>
    <q-input
      dense
      v-model='verificationCode'
      :style='{width: "100%"}'
      :label='$t("MSG_VERIFICATION_CODE", { ACCOUNT_TYPE: accountType })'
      ref='verificationCodeInput'
      :rules='[val => utils.validateVerificationCode(val) || $t("MSG_INVALID_VERIFICATION_CODE")]'
      lazy-rules='ondemand'
      @blur='onVerificationCodeInputBlur'
      @focus='onVerificationCodeInputFocus'
    >
      <template #prepend>
        <q-icon color='primary' name='domain_verification' />
      </template>
    </q-input>
    <q-input
      dense
      v-model='password'
      :type='plainPassword ? "text" : "password"'
      :style='{width: "100%"}'
      label='Password'
      ref='passwordInput'
      :rules='[val => utils.validatePassword(val) || $t("MSG_INVALID_PASSWORD")]'
      lazy-rules='ondemand'
      @blur='onPasswordInputBlur'
      @focus='onPasswordInputFocus'
    >
      <template #prepend>
        <q-icon color='primary' name='password' />
      </template>
      <template #append>
        <q-icon
          :name='plainPassword ? "visibility" : "visibility_off"'
          class='cursor-pointer'
          @click='plainPassword = !plainPassword'
        />
      </template>
    </q-input>
    <div class='text-center' :style='{marginTop: "24px"}'>
      <q-btn flat class='btn btn-medium btn-main' :style='{width: "100%"}' @click='onResetClick'>
        {{ $t('MSG_RESET') }}
      </q-btn>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref, computed, watch } from 'vue'
import { user, appcountry, basetypes, notify, appuserbase, notifverify, utils } from 'src/npoolstore'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { QInput } from 'quasar'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const Title = defineAsyncComponent(() => import('src/components/sign/Title.vue'))
const Switcher = defineAsyncComponent(() => import('src/components/sign/Switcher.vue'))
const CountryCode = defineAsyncComponent(() => import('src/components/sign/CountryCode.vue'))

const accountType = ref(appuserbase.SignMethodType.Email)
const account = ref('')
const verificationCode = ref('')
const password = ref('')
const plainPassword = ref(false)
const country = ref({} as appcountry.Country)
const realAccount = computed(() => {
  switch (accountType.value) {
    case appuserbase.SignMethodType.Email:
      return account.value
    case appuserbase.SignMethodType.Mobile:
      return country.value?.Code + account.value
  }
  return account.value
})

const sending = ref(false)
const timeout = ref(60)

const resetValidation = () => {
  void (verificationCodeInput.value as unknown as QInput).resetValidation()
  void (accountInput.value as unknown as QInput).resetValidation()
  void (passwordInput.value as unknown as QInput).resetValidation()
}

const validate = () => {
  let valid = true
  valid &&= (verificationCodeInput.value as unknown as QInput).validate(verificationCode.value) as boolean
  valid &&= (accountInput.value as unknown as QInput).validate(account.value) as boolean
  valid &&= (passwordInput.value as unknown as QInput).validate(password.value) as boolean
  return valid
}

const resetAccount = () => {
  account.value = ''
  password.value = ''
  verificationCode.value = ''
}

watch(accountType, () => {
  resetValidation()
  resetAccount()
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
  void (verificationCodeInput.value as unknown as QInput).validate(verificationCode.value)
}
const onVerificationCodeInputFocus = () => {
  resetValidation()
}

const passwordInput = ref(QInput)
const onPasswordInputBlur = () => {
  void (passwordInput.value as unknown as QInput).validate(password.value)
}
const onPasswordInputFocus = () => {
  resetValidation()
}

const _notifverify = notifverify.useVerifyStore()
const sendInterval = ref(-1)

const sendAccountCode = (msgTitle: string, msg: string, account: string) => {
  _notifverify.sendCode({
    Account: account,
    AccountType: accountType.value as unknown as appuserbase.SigninVerifyType,
    UsedFor: basetypes.EventType.Update,
    ToUsername: account,
    Message: {
      Error: {
        Title: msgTitle,
        Message: msg,
        Popup: true,
        Type: notify.NotifyType.Error
      }
    }
  }, (error: boolean) => {
    if (error) {
      sending.value = false
      if (sendInterval.value >= 0) {
        window.clearInterval(sendInterval.value)
      }
    }
  })
}

const onSendClick = () => {
  if (!(accountInput.value as unknown as QInput).validate(account.value)) {
    return false
  }
  switch (accountType.value) {
    case appuserbase.SignMethodType.Email:
      sendAccountCode(t('MSG_SEND_EMAIL_CODE'), t('MSG_SEND_EMAIL_CODE_FAIL'), realAccount.value)
      break
    case appuserbase.SignMethodType.Mobile:
      sendAccountCode(t('MSG_SEND_SMS_CODE'), t('MSG_SEND_SMS_CODE_FAIL'), realAccount.value)
      break
  }

  sending.value = true
  timeout.value = 60
  sendInterval.value = window.setInterval(() => {
    if (timeout.value === 0) {
      window.clearInterval(sendInterval.value)
      sendInterval.value = -1
      sending.value = false
      return
    }
    timeout.value--
  }, 1000)
}

const sendBtnText = computed(() => {
  return sending.value ? timeout.value.toFixed(0) + t('MSG_SECOND_SHORT') : t('MSG_SEND_CODE')
})

const _user = user.useUserStore()
const router = useRouter()

const logout = () => {
  _user.logout({
    Message: {
      Error: {
        Title: t('MSG_LOGOUT'),
        Message: t('MSG_LOGOUT_FAIL'),
        Popup: true,
        Type: notify.NotifyType.Error
      }
    }
  }, (error: boolean) => {
    if (error) {
      return
    }
    void router.push({ path: '/signin' })
  })
}

const onResetClick = () => {
  if (!validate()) {
    return
  }

  _user.resetUser({
    Account: realAccount.value,
    AccountType: accountType.value,
    PasswordHash: utils.encryptPassword(password.value),
    VerificationCode: verificationCode.value,
    Message: {
      Error: {
        Title: t('MSG_RESET'),
        Message: t('MSG_RESET_FAIL'),
        Popup: true,
        Type: notify.NotifyType.Error
      }
    }
  }, () => {
    logout()
  })
}

</script>

<style lang='sass' scoped>
.btn-sign
  width: 100%
</style>
