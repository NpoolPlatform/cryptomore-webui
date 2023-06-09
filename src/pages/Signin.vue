<template>
  <div :style='{marginTop: "100px", marginBottom: "160px", maxWidth: "400px"}' class='horizontal-center'>
    <Title :text='$t("MSG_SIGNIN")' />
    <Switcher :style='{marginTop: "32px"}' v-model:account-type='accountType' />
    <CountryCode v-if='accountType === basetypes.SignMethodType.Mobile' v-model:country='country' :style='{width: "100%", marginTop: "24px"}' />
    <q-input
      dense
      v-model='account'
      :style='{width: "100%", marginTop: accountType === basetypes.SignMethodType.Email ? "24px" : "12px"}'
      :label='accountType === basetypes.SignMethodType.Email ? $t("MSG_EMAIL_ADDRESS") : $t("MSG_PHONE_NO")'
      ref='accountInput'
      :rules='accountType === basetypes.SignMethodType.Email ? [val => validator.validateEmail(val) || $t("MSG_INVALID_EMAIL")] : [val => validator.validatePhoneNO(val) || $t("MSG_INVALID_PHONE_NO")]'
      lazy-rules='ondemand'
      @blur='onAccountInputBlur'
      @focus='onAccountInputFocus'
    >
      <template #prepend>
        <q-icon v-if='accountType === basetypes.SignMethodType.Email' color='primary' name='contact_mail' />
        <q-icon v-if='accountType === basetypes.SignMethodType.Mobile' color='primary' name='contact_phone' />
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
      :hide-bottom-space='true'
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
    <div class='row'>
      <div :style='{marginTop: "8px", color: "#3DBB77", fontSize: "14px"}' class='cursor-pointer'>
        {{ $t('MSG_FORGET_PASSWORD') }}
      </div>
    </div>
    <div class='text-center horizontal-center' :style='{marginTop: "12px"}'>
      <Agreement />
    </div>
    <div class='text-center' :style='{marginTop: "24px"}'>
      <q-btn flat class='btn btn-medium btn-main' :style='{width: "100%"}' @click='onSigninClick'>
        {{ $t('MSG_SIGNIN') }}
      </q-btn>
    </div>
    <div
      class='text-center horizontal-center color-main-transparent-60'
      v-html='$t("MSG_NOT_A_MEMBER", { SIGNUP_URI: "signup" })'
      :style='{fontSize: "16px", fontWeight: 500, lineHeight: "26px", marginTop: "12px"}'
    />
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref, computed, watch } from 'vue'
import { user, g11n, basetypes, notification } from 'src/mystore'
import { useI18n } from 'vue-i18n'
import { validator, entropy } from 'src/utils'
import { useRouter } from 'vue-router'
import { QInput } from 'quasar'
import { useReCaptcha } from 'vue-recaptcha-v3'
import { useRecaptchaStore } from 'src/mystore/recaptcha'
import { constants } from 'src/const'
import { NotifyType } from 'src/mystore/notification'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const Title = defineAsyncComponent(() => import('src/components/sign/Title.vue'))
const Switcher = defineAsyncComponent(() => import('src/components/sign/Switcher.vue'))
const Agreement = defineAsyncComponent(() => import('src/components/sign/Agreement.vue'))
const CountryCode = defineAsyncComponent(() => import('src/components/sign/CountryCode.vue'))

const accountType = ref(basetypes.SignMethodType.Email)
const account = ref('')
const password = ref('')
const plainPassword = ref(false)
const country = ref(undefined as unknown as g11n.AppCountry.AppCountry)
const realAccount = computed(() => {
  switch (accountType.value) {
    case basetypes.SignMethodType.Email:
      return account.value
    case basetypes.SignMethodType.Mobile:
      return country.value?.Code + account.value
  }
  return account.value
})

const resetValidation = () => {
  void (accountInput.value as unknown as QInput).resetValidation()
  void (passwordInput.value as unknown as QInput).resetValidation()
}

const validate = () => {
  let valid = true
  valid &&= (accountInput.value as unknown as QInput).validate(account.value) as boolean
  valid &&= (passwordInput.value as unknown as QInput).validate(password.value) as boolean
  return valid
}

const resetAccount = () => {
  account.value = ''
  password.value = ''
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

const passwordInput = ref(QInput)
const onPasswordInputBlur = () => {
  void (passwordInput.value as unknown as QInput).validate(password.value)
}
const onPasswordInputFocus = () => {
  resetValidation()
}

const _user = user.useUserStore()
const router = useRouter()
const recaptcha = useReCaptcha()
const _recaptcha = useRecaptchaStore()

const onSigninClick = () => {
  if (!validate()) {
    return
  }

  _recaptcha.getGoogleToken({
    Recaptcha: recaptcha,
    Req: constants.GoogleTokenType.Login,
    Message: {
      Error: {
        Title: t('MSG_GET_GOOGLE_TOKEN'),
        Message: t('MSG_GET_GOOGLE_TOKEN_FAIL'),
        Popup: true,
        Type: NotifyType.Error
      }
    }
  }, (token: string) => {
    _user.login({
      Account: realAccount.value,
      AccountType: accountType.value,
      PasswordHash: entropy.encryptPassword(password.value),
      ManMachineSpec: token,
      Message: {
        Error: {
          Title: t('MSG_SIGNIN'),
          Message: t('MSG_SIGNIN_FAIL'),
          Popup: true,
          Type: notification.NotifyType.Error
        }
      }
    }, (error: boolean) => {
      if (error) {
        return
      }
      void router.push({ path: '/' })
    })
  })
}

</script>

<style lang='sass' scoped>
.btn-sign
  width: 100%
</style>
