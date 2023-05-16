<template>
  <q-layout view='hHh Lpr lFf background-main body-main'>
    <MainHeader />
    <Announcement />
    <Notification />
    <q-page-container>
      <router-view />
    </q-page-container>
    <LangLoader />
  </q-layout>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const MainHeader = defineAsyncComponent(() => import('src/components/header/MainHeader.vue'))
const LangLoader = defineAsyncComponent(() => import('src/components/lang/LangLoader.vue'))
const Notification = defineAsyncComponent(() => import('src/components/notification/Notification.vue'))
const Announcement = defineAsyncComponent(() => import('src/components/announcement/Announcement.vue'))

</script>
