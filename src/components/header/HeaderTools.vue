<template>
  <div class='row'>
    <q-btn>{{ $t('MSG_HOME') }}</q-btn>
    <q-btn>{{ $t('MSG_MARKET_PLACE') }}</q-btn>
    <HeaderToolBtn :icon='bellIcon' />
    <Avatar v-if='logined.User !== undefined' />
    <q-separator vertical color='white' class='separator' />
    <LangSwitcher />
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, computed } from 'vue'
import { notif, user } from 'src/mystore'

import bellNoMsg from '../../assets/BellNoMsg.svg'
import bellMsg from '../../assets/BellMsg.svg'

const Avatar = defineAsyncComponent(() => import('src/components/avatar/Avatar.vue'))
const HeaderToolBtn = defineAsyncComponent(() => import('src/components/header/HeaderToolBtn.vue'))
const LangSwitcher = defineAsyncComponent(() => import('src/components/lang/LangSwitcher.vue'))

const logined = user.UserLocal.useLocalUserStore()
const _notif = notif.Notif.useNotifNotifStore()
const bellIcon = computed(() => _notif.Notifs.length > 0 ? bellMsg : bellNoMsg)

</script>

<style lang='sass' scoped>
.icon
  width: 24px
  height: 24px

.separator
  margin: 6% 22px 6% 22px
</style>
