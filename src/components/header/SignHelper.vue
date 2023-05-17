<template>
  <div v-if='logined.User === undefined' class='row'>
    <q-btn flat class='btn btn-small btn-main'>
      {{ $t('MSG_SIGNIN') }}
    </q-btn>
    <q-btn flat class='btn btn-small btn-alt btn-left-8'>
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
    <HeaderToolBtn :icon='bellIcon' />
    <Avatar />
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, computed } from 'vue'
import { notif, user } from 'src/mystore'

import metamaskLogo from '../../assets/Metamask.svg'
import bellNoMsg from '../../assets/BellNoMsg.svg'
import bellMsg from '../../assets/BellMsg.svg'

const Avatar = defineAsyncComponent(() => import('src/components/avatar/Avatar.vue'))
const HeaderToolBtn = defineAsyncComponent(() => import('src/components/header/HeaderToolBtn.vue'))

const logined = user.useLocalUserStore()
const _notif = notif.Notif.useNotifNotifStore()
const bellIcon = computed(() => _notif.Notifs.length > 0 ? bellMsg : bellNoMsg)
</script>
