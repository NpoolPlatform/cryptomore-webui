<template>
  <div>{{ notifyHead }}</div>
  <q-banner v-if='notifyHead !== undefined' dense class='notification color-main'>
    <q-img :src='logoImg' class='logo' fit='contain' />
    <q-label>{{ notifyHead?.Message }}</q-label>
  </q-banner>
</template>

<script setup lang='ts'>
import { computed, ref, watch, onMounted } from 'vue'
import { notify, requesterror, user } from 'src/npoolstore'

import logoImg from '../../assets/Logo.svg'
import { useRouter } from 'vue-router'

const notification = notify.useNotificationStore()

const notifyHead = ref(undefined as unknown as notify.Notification)
const notifications = computed(() => notification.Notifications.length)

watch(notifications, () => {
  if (notifications.value === 0) {
    return
  }
  if (notifyHead.value !== undefined) {
    return
  }
  if (notification.Notifications?.[0].Popup) {
    return
  }
  notifyHead.value = notification.Notifications[0]
  setTimeout(() => {
    notification.Notifications.splice(0, 1)
    notifyHead.value = {} as notify.Notification
  }, 3000)
})

const errorswitcher = requesterror.useErrorStore()
const trigger = computed(() => errorswitcher.ErrorTrigger)
const router = useRouter()
const logined = user.useLocalUserStore()

watch(trigger, () => {
  if (!trigger.value) {
    return
  }
  switch (trigger.value.Target) {
    case requesterror.SwitchTarget.LOGIN:
      void router.push('/signin')
      console.log('_____$reset()')
      logined.$reset()
      errorswitcher.$reset()
  }
})

onMounted(() => {
  notification.$subscribe((_, state) => {
    state.Notifications.forEach((notif, index) => {
      if (notif.Popup) {
        state.Notifications.splice(index, 1)
        notify.notify(notif)
      }
    })
  })
})

</script>

<style lang='sass' scoped>
.notification
  background: #D4FFE8
  width: 100%
  text-align: center
  min-height: 36px

.logo
  height: 24px
  width: 18px
  margin-right: 6px
</style>
