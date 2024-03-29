<template>
  <div :style='{marginTop: "80px", maxWidth: "400px", marginBottom: thirdParties.length ? "0px" : "64px"}' class='horizontal-center'>
    <Title :text='$t("MSG_BIND_ACCOUNT")' />
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
      :rules='[val => validator.validateVerficationCode(val) || $t("MSG_INVALID_VERIFICATION_CODE")]'
      lazy-rules='ondemand'
      @blur='onVerificationCodeInputBlur'
      @focus='onVerificationCodeInputFocus'
    >
      <template #prepend>
        <q-icon color='primary' name='domain_verification' />
      </template>
    </q-input>
    <div class='text-center horizontal-center' :style='{marginTop: "12px"}'>
      <Agreement />
    </div>
    <div class='text-center' :style='{marginTop: "24px"}'>
      <q-btn flat class='btn btn-medium btn-main' :style='{width: "100%"}' @click='onBindClick'>
        {{ $t('MSG_BIND_ACCOUNT') }}
      </q-btn>
    </div>
    <div
      class='text-center horizontal-center color-main-transparent-60'
      v-html='$t("MSG_NOT_BIND_NOW", { HOMEPAGE_URI: "/" })'
      :style='{fontSize: "16px", fontWeight: 500, lineHeight: "26px", marginTop: "12px", marginBottom: "80px"}'
    />
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref, computed, watch, onMounted } from 'vue'
import { appuserbase, appcountry, appoauththirdparty, user, notify, notifverify, basetypes } from 'src/npoolstore'
import { useI18n } from 'vue-i18n'
import { validator } from 'src/utils'
import { useRouter, useRoute } from 'vue-router'
import { QInput } from 'quasar'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const Title = defineAsyncComponent(() => import('src/components/sign/Title.vue'))
const Switcher = defineAsyncComponent(() => import('src/components/sign/Switcher.vue'))
const Agreement = defineAsyncComponent(() => import('src/components/sign/Agreement.vue'))
const CountryCode = defineAsyncComponent(() => import('src/components/sign/CountryCode.vue'))

interface Query {
  accountType: appuserbase.SignMethodType
}

const route = useRoute()
const query = computed(() => route.query as unknown as Query)

const accountType = ref(query.value.accountType ? query.value.accountType : appuserbase.SignMethodType.Email)
const account = ref('')
const verificationCode = ref('')
const sending = ref(false)
const timeout = ref(60)
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

const resetValidation = () => {
  void (accountInput.value as unknown as QInput).resetValidation()
  void (verificationCodeInput.value as unknown as QInput).resetValidation()
}

const validate = () => {
  let valid = true
  valid &&= (accountInput.value as unknown as QInput).validate(account.value) as boolean
  valid &&= (verificationCodeInput.value as unknown as QInput).validate(verificationCode.value) as boolean
  return valid
}

const resetAccount = () => {
  account.value = ''
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

const logined = user.useLocalUserStore()
const router = useRouter()

const third = appoauththirdparty.useAppOAuthThirdPartyStore()
const thirdParties = computed(() => third.thirdParties())

const _user = user.useUserStore()
const onBindClick = () => {
  if (!validate()) {
    return
  }

  _user.bindUser({
    NewAccountType: accountType.value,
    NewAccount: realAccount.value,
    NewVerificationCode: verificationCode.value,
    Account: logined.User.LoginAccount,
    AccountType: logined.User.LoginAccountType,
    Message: {
      Error: {
        Title: t('MSG_BIND_ACCOUNT'),
        Message: t('MSG_BIND_ACCOUNT_FAIL'),
        Popup: true,
        Type: notify.NotifyType.Error
      }
    }
  }, () => {
    void router.push({ path: '/' })
  })
}

onMounted(() => {
  third.getOAuthThirdParties({
    Offset: 0,
    Limit: 10,
    Message: {
      Error: {
        Title: t('MSG_GET_APP_OAUTH_THIRD_PARTIES'),
        Message: t('MSG_GET_APP_OAUTH_THIRD_PARTIES_FAIL'),
        Popup: true,
        Type: notify.NotifyType.Error
      }
    }
  }, () => {
    // TODO
  })
})

const sendInterval = ref(-1)
const _notifverify = notifverify.useVerifyStore()
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

</script>

<style lang='sass' scoped>
.btn-sign
  width: 100%

.third-login
  width: 60px
  height: 60px
  border-radius: 8px
  background: #FFF
  box-shadow: 0px 4px 20px 0px rgba(61, 187, 119, 0.20)
  border: 1px solid transparent
  background: linear-gradient(white, white) padding-box, linear-gradient(98.89deg, #56F09F 0%, #A3FFE5 100%) border-box
  padding: 12px
</style>
