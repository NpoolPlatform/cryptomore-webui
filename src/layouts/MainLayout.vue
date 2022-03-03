<template>
  <q-layout view='hHh Lpr lFf background-main body-main'>
    <MainHeader v-if='setting.ShowMainHeader' />

    <q-page-container>
      <router-view />
    </q-page-container>

    <LangLoader />
  </q-layout>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, onMounted } from 'vue'
import { useSettingStore } from 'src/store/setting'
import { useNotificationStore } from 'src/store/notifications'
import { notify } from 'src/store/notifications/helper'

const MainHeader = defineAsyncComponent(() => import('src/components/header/MainHeader.vue'))
const LangLoader = defineAsyncComponent(() => import('src/components/lang/LangLoader.vue'))

const setting = useSettingStore()
const notification = useNotificationStore()

onMounted(() => {
  notification.$subscribe((_, state) => {
    state.Notifications.forEach((notif, index) => {
      if (notif.Popup) {
        state.Notifications.splice(index, 1)
        notify(notif)
      }
    })
  })
})

</script>
