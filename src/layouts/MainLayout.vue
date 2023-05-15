<template>
  <q-layout view='hHh Lpr lFf background-main body-main'>
    <MainHeader v-if='_setting.ShowMainHeader' />

    <q-page-container>
      <router-view />
    </q-page-container>

    <LangLoader />
  </q-layout>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, onMounted } from 'vue'
import { setting, notification } from 'src/store'

const MainHeader = defineAsyncComponent(() => import('src/components/header/MainHeader.vue'))
const LangLoader = defineAsyncComponent(() => import('src/components/lang/LangLoader.vue'))

const _setting = setting.useSettingStore()
const _notification = notification.useNotificationStore()

onMounted(() => {
  _notification.$subscribe((_, state) => {
    state.Notifications.forEach((notif, index) => {
      if (notif.Popup) {
        state.Notifications.splice(index, 1)
        notification.notify(notif)
      }
    })
  })
})

</script>
