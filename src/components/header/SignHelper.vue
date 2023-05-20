<template>
  <div v-if='logined.User === undefined' class='row'>
    <q-btn flat class='btn btn-small btn-main' @click='onSigninClick'>
      {{ $t('MSG_SIGNIN') }}
    </q-btn>
    <q-btn flat class='btn btn-small btn-alt btn-left-8' @click='onSignupClick'>
      {{ $t('MSG_SIGNUP') }}
    </q-btn>
    <q-btn
      flat
      class='btn btn-small'
      :icon='"img:" + metamaskLogo'
      icon-right='expand_more'
      size='1rem'
    />
  </div>
  <div v-else class='row'>
    <div v-if='notifs > 0' class='veritical-center row' :style='{marginLeft: "8px", marginRight: "8px"}'>
      <HeaderToolBtn :icon='bellIcon' />
      <div
        class='notifs text-white bg-red veritical-center text-center'
        :style='{marginLeft: "-18px", marginTop: "4px", borderRadius: "8px", fontSize: "8px", height: "12px", minWidth: "12px", lineHeight: "12px", paddingLeft: "4px", paddingRight: "4px"}'
      >
        {{ notifs }}
      </div>
    </div>
    <Avatar :style='{marginRight: "16px"}' />
  </div>
</template>

<script setup lang='ts'>
import { computed, defineAsyncComponent } from 'vue'
import { notif, user } from 'src/mystore'
import { useRouter } from 'vue-router'

import metamaskLogo from '../../assets/Metamask.svg'
import bellIcon from '../../assets/Bell.svg'

const Avatar = defineAsyncComponent(() => import('src/components/avatar/Avatar.vue'))
const HeaderToolBtn = defineAsyncComponent(() => import('src/components/header/HeaderToolBtn.vue'))

const logined = user.useLocalUserStore()
const _notif = notif.Notif.useNotifNotifStore()
const notifs = computed(() => _notif.Notifs.filter((el) => !el.Notified).length)

const router = useRouter()

const onSignupClick = () => {
  void router.push({ path: '/signup' })
}

const onSigninClick = () => {
  void router.push({ path: '/signin' })
}

</script>
