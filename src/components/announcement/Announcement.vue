<template>
  <q-banner v-if='announcementHead !== undefined' dense class='announcement color-main'>
    <q-img :src='logoImg' class='logo' fit='contain' />
    <q-label>{{ announcementHead?.Content }}</q-label>
  </q-banner>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { notif } from 'src/mystore'

import logoImg from '../../assets/Logo.svg'

const announcement = notif.Announcement.useNotifAnnouncementStore()
const announcementHead = ref(announcement.Announcements?.[0])

// TODO: display announcement like binance

</script>

<style lang='sass' scoped>
.announcement
  background: #D4FFE8
  width: 100%
  text-align: center
  min-height: 36px

.logo
  height: 24px
  width: 18px
  margin-right: 6px
</style>
