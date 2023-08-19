<template>
  <q-btn
    flat
    round
    :style='{borderRadius: "50%", minWidth: "2em", minHeight: "2em"}'
    class='btn btn-small text-primary'
    icon='account_circle'
    size='20px'
  >
    <AvatarMenu />
  </q-btn>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const AvatarMenu = defineAsyncComponent(() => import('src/components/avatar/AvatarMenu.vue'))

</script>
