<template>
  <div class='row'>
    <HeaderToolBtn icon='icons/github.png' @click='onGithubClick' />
    <Avatar v-if='logined' />
  </div>
</template>

<script setup lang='ts'>
import { useUserStore } from 'src/store/users'
import { defineAsyncComponent } from 'vue'

const Avatar = defineAsyncComponent(() => import('src/components/avatar/Avatar.vue'))
const HeaderToolBtn = defineAsyncComponent(() => import('src/components/header/HeaderToolBtn.vue'))

const user = useUserStore()
const logined = user.getLogined

const onGithubClick = () => {
  window.open('https://github.com')
}

</script>
