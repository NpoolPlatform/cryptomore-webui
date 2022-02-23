<template>
  <div class='q-pa-md'>
    <q-table
      title='Users' :rows='users' :columns='columns' row-key='name'
      :loading='loading'
    />
  </div>
</template>

<script setup lang='ts'>
import { useUserStore } from 'src/store/users'
import { onMounted, onUnmounted } from 'vue'
const columns = [
  { name: 'userId', align: 'left', required: false, label: 'UserID', field: 'userId' },
  { name: 'id', align: 'left', required: false, label: 'ID', field: 'id' },
  { name: 'title', align: 'left', required: false, label: 'Title', field: 'title' },
  { name: 'body', align: 'left', required: false, label: 'Body', field: 'body' }
]

const userStore = useUserStore()

const users = userStore.Infos
const loading = userStore.loading

onMounted(() => {
  void userStore.getUserInfos()
})

onUnmounted(() => {
  userStore.$reset()
})
</script>
