<template>
  <q-banner v-if='notifyHead !== undefined' dense class='notification color-main'>
    <q-img :src='logoImg' class='logo' fit='contain' />
    <q-label>{{ notifyHead?.Message }} </q-label>
  </q-banner>
</template>

<script setup lang='ts'>
import { computed, ref, watch } from 'vue'
import { notification } from 'src/mystore'

import logoImg from '../../assets/Logo.svg'

const _notification = notification.useNotificationStore()
const notifyHead = ref(undefined as unknown as notification.Notification)
const notifications = computed(() => _notification.Notifications.length)

watch(notifications, () => {
  if (notifications.value === 0) {
    return
  }
  if (notifyHead.value !== undefined) {
    return
  }
  notifyHead.value = _notification.Notifications[0]
  setTimeout(() => {
    _notification.Notifications.splice(0, 1)
    notifyHead.value = undefined as unknown as notification.Notification
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
