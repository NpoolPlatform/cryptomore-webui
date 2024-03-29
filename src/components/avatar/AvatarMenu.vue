<template>
  <q-menu v-model='showing' :offset='[200, 22]'>
    <q-list class='text-primary' :style='{minWidth: "320px"}'>
      <q-item>
        <q-space />
        <q-icon name='account_circle' size='60px' />
        <q-space />
      </q-item>
      <q-item>
        <q-space />
        <div :style='{marginBottom: "12px"}'>
          <div v-if='logined' class='row'>
            <q-space />
            <span :style='{fontWeight: 600}'>{{ _localUser.User?.LoginAccountType }}</span>
            <span :style='{color: "#3DBB77", marginLeft: "8px"}'>
              {{ _localUser.User?.LoginAccountType === appuserbase.SignMethodType.Email ||
                _localUser.User?.LoginAccountType === appuserbase.SignMethodType.Mobile ?
                  _localUser.User?.LoginAccount : '@' + _localUser.User?.ThirdPartyUsername }}
            </span>
            <q-space />
          </div>
          <div v-if='_viewerAddress?.length' class='row'>
            <q-space />
            <span
              :style='{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "#3DBB77"}'
            >
              {{ _viewerAddress }}
            </span>
            <q-space />
          </div>
        </div>
        <q-space />
      </q-item>
      <q-separator />
      <q-item>
        <q-icon name='email' size='32px' :style='{marginRight: "8px"}' />
        <div :style='{fontSize: "14px", lineHeight: "32px"}'>
          {{ _localUser.User?.EmailAddress?.length ? _localUser.User?.EmailAddress : ' - ' }}
        </div>
        <q-space />
        <div v-if='!logined' class='row cursor-pointer' @click='onSignupClick(appuserbase.SignMethodType.Email)'>
          <div :style='{fontSize: "14px", lineHeight: "28px", color: "#3DBB77"}'>
            {{ $t('MSG_SIGNUP') }}
          </div>
          <q-icon name='chevron_right' :style='{color: "#3DBB77", marginTop: "4px"}' size='20px' />
        </div>
        <div
          v-if='logined && !_localUser.User.EmailAddress?.length && validAccountType'
          class='row cursor-pointer'
          @click='onBindClick(appuserbase.SignMethodType.Email)'
        >
          <div :style='{fontSize: "14px", lineHeight: "28px", color: "#3DBB77"}'>
            {{ $t('MSG_BIND') }}
          </div>
          <q-icon name='chevron_right' :style='{color: "#3DBB77", marginTop: "4px"}' size='20px' />
        </div>
      </q-item>
      <q-separator />
      <q-item>
        <q-icon name='smartphone' size='32px' :style='{marginRight: "8px"}' />
        <div :style='{fontSize: "14px", lineHeight: "32px"}'>
          {{ _localUser.User?.PhoneNO?.length ? _localUser.User?.PhoneNO : ' - ' }}
        </div>
        <q-space />
        <div v-if='!logined' class='row cursor-pointer' @click='onSignupClick(appuserbase.SignMethodType.Email)'>
          <div :style='{fontSize: "14px", lineHeight: "28px", color: "#3DBB77"}'>
            {{ $t('MSG_SIGNUP') }}
          </div>
          <q-icon name='chevron_right' :style='{color: "#3DBB77", marginTop: "4px"}' size='20px' />
        </div>
        <div
          v-if='logined && !_localUser.User.PhoneNO?.length && validAccountType'
          class='row cursor-pointer'
          @click='onBindClick(appuserbase.SignMethodType.Mobile)'
        >
          <div :style='{fontSize: "14px", lineHeight: "28px", color: "#3DBB77"}'>
            {{ $t('MSG_BIND') }}
          </div>
          <q-icon name='chevron_right' :style='{color: "#3DBB77", marginTop: "4px"}' size='20px' />
        </div>
      </q-item>
      <q-separator />
      <q-item v-if='resetUser' clickable @click='onResetPasswordClick'>
        <q-icon name='security' size='32px' :style='{marginRight: "10px"}' />
        <span :style='{lineHeight: "32px"}'>
          {{ $t('MSG_RESET_PASSWORD') }}
        </span>
        <q-space />
        <q-icon name='chevron_right' :style='{color: "#3DBB77", marginTop: "4px"}' size='20px' />
      </q-item>
      <q-separator />
      <q-item clickable @click='onLogoutClick'>
        <q-icon name='logout' size='32px' :style='{marginRight: "10px"}' />
        <span :style='{lineHeight: "32px"}'>
          {{ $t('MSG_LOGOUT') }}
        </span>
        <q-space />
        <q-icon name='chevron_right' :style='{color: "#3DBB77", marginTop: "4px"}' size='20px' />
      </q-item>
    </q-list>
  </q-menu>
</template>

<script setup lang='ts'>
import { Cookies } from 'quasar'
import { user, appuserbase, notify } from 'src/npoolstore'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const _user = user.useUserStore()
const _localUser = user.useLocalUserStore()
const logined = computed(() => _localUser.logined)
const resetUser = computed(() => logined.value && (_localUser.User.EmailAddress?.length || _localUser.User.PhoneNO?.length))
const validAccountType = computed(() => _localUser.User?.LoginAccountType !== appuserbase.SignMethodType.Email && _localUser.User?.LoginAccountType !== appuserbase.SignMethodType.Mobile)

const viewerAddress = computed(() => Cookies.get('viewer_address'))
const _viewerAddress = computed(() => {
  if (!viewerAddress.value) {
    return undefined
  }
  if (viewerAddress.value.length <= 14) {
    return viewerAddress.value
  }
  return viewerAddress.value?.substring(0, 8) + '...' + viewerAddress.value?.substring(viewerAddress.value.length - 6)
})

const showing = ref(false)
const router = useRouter()
const onSignupClick = (signupMethod: appuserbase.SignMethodType) => {
  void router.push({ path: '/signup', query: { accountType: signupMethod } })
  showing.value = false
}

const onBindClick = (signupMethod: appuserbase.SignMethodType) => {
  void router.push({ path: '/bindaccount', query: { accountType: signupMethod } })
  showing.value = false
}

const onLogoutClick = () => {
  Cookies.set('viewer_address', null as unknown as string)
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
    _localUser.$reset()
    if (error) {
      return
    }
    void router.push({ path: '/' })
  })
  showing.value = false
}

const onResetPasswordClick = () => {
  void router.push({ path: '/resetuser' })
}

</script>
