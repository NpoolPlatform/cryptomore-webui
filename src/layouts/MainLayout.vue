<template>
  <q-layout view='hHh Lpr lFf background-main'>
    <MainHeader v-if='setting.ShowMainHeader' />

    <q-page-container>
      <router-view />
    </q-page-container>

    <LangLoader />
  </q-layout>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'
import { useSettingStore } from 'src/store/setting'

const MainHeader = defineAsyncComponent(() => import('src/components/header/MainHeader.vue'))
const LangLoader = defineAsyncComponent(() => import('src/components/lang/LangLoader.vue'))

const setting = useSettingStore()

</script>
