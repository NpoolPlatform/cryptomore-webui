<template>
  <div
    :style='{backgroundColor: "white", fontSize: "16px", fontWeight: 400, lineHeight: "32px", width: "100%", height: "240px", marginTop: "160px"}' class='text-primary text-center'
  >
    Waiting for {{ clientName }}login...
  </div>
  <q-dialog v-model='showing'>
    <q-card>HHHHHHHHHHH</q-card>
  </q-dialog>
</template>

<script setup lang='ts'>
import { user, notification } from 'src/mystore'
import { computed, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

interface Query {
  code: string
  state: string
}

const route = useRoute()
const query = computed(() => route.query as unknown as Query)
const _user = user.useUserStore()
const states = computed(() => query.value.state.split('-'))
const clientName = computed(() => states.value.length ? states.value[0] + ' ' : '')
const router = useRouter()
const showing = ref(false)

const bindAccount = () => {
  showing.value = true
}

onMounted(() => {
  _user.oauthLogin({
    Code: query.value.code,
    State: query.value.state,
    Message: {
      Error: {
        Title: t('MSG_OAUTH_LOGIN'),
        Message: t('MSG_OAUTH_LOGIN_FAIL'),
        Popup: true,
        Type: notification.NotifyType.Error
      }
    }
  }, (error: boolean, user?: user.User) => {
    if (error) {
      void router.push({ path: '/' })
      return
    }
    if (user?.EmailAddress?.length || user?.PhoneNO?.length) {
      void router.push({ path: '/' })
      return
    }
    bindAccount()
  })
})

</script>
