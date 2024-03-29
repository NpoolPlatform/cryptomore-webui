<template>
  <div :style='{marginTop: "80px", maxWidth: "400px", marginBottom: thirdParties.length ? "0px" : "64px"}' class='horizontal-center'>
    <Title :text='$t("MSG_CREATE_ACCOUNT")' />
    <Switcher :style='{marginTop: "32px"}' v-model:account-type='accountType' />
    <CountryCode v-if='accountType === appuserbase.SignMethodType.Mobile' v-model:country='country' :style='{width: "100%", marginTop: "24px"}' />
    <q-input
      dense
      v-model='account'
      :style='{width: "100%", marginTop: accountType === appuserbase.SignMethodType.Email ? "24px" : "12px"}'
      :label='accountType === appuserbase.SignMethodType.Email ? $t("MSG_EMAIL_ADDRESS") : $t("MSG_PHONE_NO")'
      ref='accountInput'
      :rules='accountType === appuserbase.SignMethodType.Email ? [val => validator.validateEmail(val) || $t("MSG_INVALID_EMAIL")] : [val => validator.validatePhoneNO(val) || $t("MSG_INVALID_PHONE_NO")]'
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
      :rules='[val => validator.validateVerificationCode(val) || $t("MSG_INVALID_VERIFICATION_CODE")]'
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
      :rules='[val => validator.validatePassword(val) || $t("MSG_INVALID_PASSWORD")]'
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
    <div class='text-center horizontal-center' :style='{marginTop: "12px"}'>
      <Agreement />
    </div>
    <div class='text-center' :style='{marginTop: "24px"}'>
      <q-btn flat class='btn btn-medium btn-main' :style='{width: "100%"}' @click='onSignupClick'>
        {{ $t('MSG_SIGNUP') }}
      </q-btn>
    </div>
    <div
      class='text-center horizontal-center color-main-transparent-60'
      v-html='$t("MSG_ALREADY_HAVE_ACCOUNT", { SIGNIN_URI: "signin" })'
      :style='{fontSize: "16px", fontWeight: 500, lineHeight: "26px", marginTop: "12px"}'
    />
  </div>
  <OAuthLogin />
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref, computed, watch } from 'vue'
import { appuserbase, basetypes, notifverify, user, notify, utils, appcountry, oauththirdparty } from 'src/npoolstore'
import { validator } from 'src/mystore'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { QInput } from 'quasar'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

interface Query {
  accountType: appuserbase.SignMethodType
}

const route = useRoute()
const query = computed(() => route.query as unknown as Query)

const Title = defineAsyncComponent(() => import('src/components/sign/Title.vue'))
const Switcher = defineAsyncComponent(() => import('src/components/sign/Switcher.vue'))
const Agreement = defineAsyncComponent(() => import('src/components/sign/Agreement.vue'))
const CountryCode = defineAsyncComponent(() => import('src/components/sign/CountryCode.vue'))
const OAuthLogin = defineAsyncComponent(() => import('src/components/sign/OAuthLogin.vue'))

const accountType = ref(query.value.accountType ? query.value.accountType : appuserbase.SignMethodType.Email)
const account = ref('')
const verificationCode = ref('')
const password = ref('')
const plainPassword = ref(false)
const country = ref(undefined as unknown as appcountry.Country)
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

const sendInterval = ref(-1)

const _notifverify = notifverify.useVerifyStore()
const sendAccountCode = (msgTitle: string, msg: string, account: string) => {
  _notifverify.sendCode({
    Account: account,
    AccountType: accountType.value as unknown as appuserbase.SigninVerifyType,
    UsedFor: basetypes.EventType.Signup,
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

const third = oauththirdparty.useOAuthThirdPartyStore()
const thirdParties = computed(() => third.OAuthThirdParties)

const onSignupClick = () => {
  if (!validate()) {
    return
  }

  _user.signup({
    Account: realAccount.value,
    AccountType: accountType.value,
    PasswordHash: utils.encryptPassword(password.value),
    VerificationCode: verificationCode.value,
    Message: {
      Error: {
        Title: t('MSG_SIGNUP'),
        Message: t('MSG_SIGNUP_FAIL'),
        Popup: true,
        Type: notify.NotifyType.Error
      }
    }
  }, () => {
    void router.push({ path: '/signin' })
  })
}

</script>

<style lang='sass' scoped>
.btn-sign
  width: 100%
</style>
