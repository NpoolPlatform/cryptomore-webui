<template>
  <q-layout view='hHh Lpr lFf background-main body-main'>
    <MainHeader v-if='setting.ShowHeader' />
    <Announcement />
    <Notification />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer v-if='setting.ShowFooter' />
    <LangLoader />
  </q-layout>
</template>

<script setup lang='ts'>
import { useSettingStore } from '../mystore/setting'
import { defineAsyncComponent } from 'vue'

const MainHeader = defineAsyncComponent(() => import('src/components/header/MainHeader.vue'))
const LangLoader = defineAsyncComponent(() => import('src/components/lang/LangLoader.vue'))
const Notification = defineAsyncComponent(() => import('src/components/notification/Notification.vue'))
const Announcement = defineAsyncComponent(() => import('src/components/announcement/Announcement.vue'))
const Footer = defineAsyncComponent(() => import('src/components/footer/Footer.vue'))

const setting = useSettingStore()

</script>
