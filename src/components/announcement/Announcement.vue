<template>
  <q-banner v-if='announcementHead !== undefined' dense class='announcement color-main'>
    <q-img :src='logoImg' class='logo' fit='contain' />
    <q-label>{{ announcementHead?.Content }}</q-label>
  </q-banner>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { announcement } from 'src/npoolstore'

import logoImg from '../../assets/Logo.svg'
import { AppID } from 'src/const/const'

const _announcement = announcement.useAnnouncementStore()
const announcementHead = ref(_announcement.announcements(AppID)?.[0])

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
