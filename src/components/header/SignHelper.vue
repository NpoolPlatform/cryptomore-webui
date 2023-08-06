<template>
  <div v-if='!_logined' class='row'>
    <q-btn flat class='btn btn-small btn-main' @click='onSigninClick'>
      {{ $t('MSG_SIGNIN') }}
    </q-btn>
    <q-btn flat class='btn btn-small btn-alt btn-left-8' @click='onSignupClick'>
      {{ $t('MSG_SIGNUP') }}
    </q-btn>
  </div>
  <div v-else class='row'>
    <div v-if='notifs > 0' class='vertical-center row' :style='{marginLeft: "8px", marginRight: "8px"}'>
      <HeaderToolBtn :icon='bellIcon' />
      <div
        class='notifs text-white bg-red vertical-center text-center'
        :style='{marginLeft: "-18px", marginTop: "4px", borderRadius: "8px", fontSize: "8px", height: "12px", minWidth: "12px", lineHeight: "12px", paddingLeft: "4px", paddingRight: "4px"}'
      >
        {{ notifs }}
      </div>
    </div>
    <Avatar :style='{marginRight: "16px"}' />
  </div>
  <q-btn
    flat
    class='btn btn-small'
    :icon='"img:" + metamaskLogo'
    :label='balance'
    size='1rem'
    @click='onWalletLoginClick'
  />
</template>

<script setup lang='ts'>
import { computed, defineAsyncComponent, ref, onMounted } from 'vue'
import { notif, user } from 'src/mystore'
import { useRouter } from 'vue-router'
import Web3 from 'web3'

import metamaskLogo from '../../assets/Metamask.svg'
import bellIcon from '../../assets/Bell.svg'
import { Cookies } from 'quasar'

const Avatar = defineAsyncComponent(() => import('src/components/avatar/Avatar.vue'))
const HeaderToolBtn = defineAsyncComponent(() => import('src/components/header/HeaderToolBtn.vue'))

const logined = user.useLocalUserStore()
const _notif = notif.Notif.useNotifNotifStore()
const notifs = computed(() => _notif.Notifs.filter((el) => !el.Notified).length)

const router = useRouter()
const balance = ref('N/A')
const viewerAddress = computed(() => Cookies.get('viewer_address'))
const walletLogin = computed(() => viewerAddress.value && viewerAddress.value.length > 0)
const _logined = computed(() => logined.logined || walletLogin.value)

const onSignupClick = () => {
  void router.push({ path: '/signup' })
}

const onSigninClick = () => {
  void router.push({ path: '/signin' })
}

const web3 = new Web3(window.ethereum)

const onWalletLoginClick = () => {
  void web3.eth.requestAccounts()
    .then((res) => {
      if (res.length === 0) {
        return
      }
      Cookies.set('active_wallet', 'MetaMask')
      Cookies.set('viewer_address', res[0])
      void web3.eth.getBalance(res[0])
        .then((res) => {
          balance.value = Number(web3.utils.fromWei(res, 'ether')).toFixed(4) + ' ETH'
        })
    })
}

onMounted(() => {
  if (!viewerAddress.value) {
    return
  }
  if (typeof window.ethereum === 'undefined') {
    return
  }
  void web3.eth.getBalance(viewerAddress.value)
    .then((res) => {
      balance.value = Number(web3.utils.fromWei(res, 'ether')).toFixed(4) + ' ETH'
    })
})

</script>
