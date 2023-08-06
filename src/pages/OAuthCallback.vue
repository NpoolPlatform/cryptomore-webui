<template>
  <div
    :style='{fontSize: "16px", fontWeight: 400, lineHeight: "32px", width: "100%", marginTop: "160px", marginBottom: "160px"}'
    class='text-primary text-center'
  >
    <span v-if='!logined || waiting'>
      Waiting for {{ clientName }}login...
    </span>
    <div v-else>
      <span :style='{fontSize: "24px", fontWeight: 600, lineHeight: "32px"}'>
        Bind Email or Phone Number
      </span>
      <br>
      <span class='color-main-transparent-60' :style='{fontSize: "16px", fontWeight: 500, lineHeight: "20px", marginTop: "12px"}'>
        For your account security, please bind your email or mobile phone
      </span>
      <div class='row justify-center' :style='{marginTop: "36px"}'>
        <q-btn :style='{width: "240px"}' @click='onBindEmailClick'>
          <div :style='{margin: "16px auto"}'>
            <q-img src='~assets/BindEmail.png' height='80px' fit='contain' />
            <div :style='{marginTop: "12px"}'>
              <span>Bind Email</span>
            </div>
          </div>
        </q-btn>
        <div :style='{width: "16px"}' />
        <q-btn :style='{width: "240px"}' @click='onBindMobileClick'>
          <div :style='{margin: "16px auto"}'>
            <q-img src='~assets/BindMobile.png' height='80px' fit='contain' />
            <div :style='{marginTop: "12px"}'>
              <span>Bind Phone Number</span>
            </div>
          </div>
        </q-btn>
      </div>
      <q-btn :style='{marginTop: "36px", fontSize: "16px"}' class='btn btn-medium btn-main' @click='onSetLaterClick'>
        Not Now! Set Later
      </q-btn>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { user, notification, localUser } from 'src/mystore'
import { computed, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { SignMethodType } from 'src/mystore/basetypes'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

interface Query {
  code: string
  state: string
}

const route = useRoute()
const query = computed(() => route.query as unknown as Query)
const _user = user.useUserStore()
const _localUser = localUser.useLocalUserStore()
const logined = computed(() => _localUser.logined)
const states = computed(() => query.value.state.split('-'))
const clientName = computed(() => states.value.length ? states.value[0] + ' ' : '')
const router = useRouter()
const waiting = ref(true)

const bindAccount = () => {
  waiting.value = false
}

onMounted(() => {
  _user.oauthLogin({
    Code: query.value.code,
    State: query.value.state,
    Message: {
      Error: {
        Title: t('MSG_OAUTH_LOGIN'),
        Message: t('MSG_OAUTH_LOGIN_FAIL'),
        Popup: true,
        Type: notification.NotifyType.Error
      }
    }
  }, (error: boolean, user?: user.User) => {
    if (error) {
      void router.push({ path: '/' })
      return
    }
    if (user?.EmailAddress?.length || user?.PhoneNO?.length) {
      void router.push({ path: '/' })
      return
    }
    bindAccount()
  })
})

const onSetLaterClick = () => {
  void router.push({ path: '/' })
}

const onBindEmailClick = () => {
  void router.push({ path: '/bindaccount', query: { accountType: SignMethodType.Email } })
}

const onBindMobileClick = () => {
  void router.push({ path: '/bindaccount', query: { accountType: SignMethodType.Mobile } })
}

</script>
