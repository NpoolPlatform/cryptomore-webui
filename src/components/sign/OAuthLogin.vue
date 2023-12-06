<template>
  <div v-if='thirdParties.length' :style='{marginTop: "36px", maxWidth: "600px"}' class='horizontal-center'>
    <div class='row' :style='{width: "100%", height: "100%"}'>
      <div :style='{width: "35%", height: "100%"}'>
        <div :style='{height: "12px"}' />
        <q-separator :style='{backgroundColor: "#56F09F"}' />
      </div>
      <q-space />
      <div :style='{lineHeight: "24px", fontSize: "14px"}' class='color-main-transparent-60'>
        Or Continue With
      </div>
      <q-space />
      <div :style='{width: "35%", height: "100%"}'>
        <div :style='{height: "12px"}' />
        <q-separator :style='{backgroundColor: "#56F09F"}' />
      </div>
    </div>
    <div v-if='thirdParties.length' :style='{marginTop: "24px", maxWidth: "280px", marginBottom: "64px"}' class='horizontal-center row justify-evenly'>
      <div
        v-for='thirdParty in thirdParties'
        :key='thirdParty.ID'
        class='third-login cursor-pointer'
        @click='onThirdPartyLoginClick(thirdParty)'
      >
        <q-img :src='thirdParty.ClientLogoURL' width='36px' height='36px' />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed, onMounted } from 'vue'
import { appoauththirdparty, notify, oauth, oauthbase } from 'src/npoolstore'
import { useI18n } from 'vue-i18n'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const third = appoauththirdparty.useAppOAuthThirdPartyStore()
const thirdParties = computed(() => third.thirdParties())
const _oauth = oauth.useOAuthStore()

onMounted(() => {
  third.getOAuthThirdParties({
    Offset: 0,
    Limit: 100,
    Message: {
      Error: {
        Title: t('MSG_GET_APP_OAUTH_THIRD_PARTIES'),
        Message: t('MSG_GET_APP_OAUTH_THIRD_PARTIES_FAIL'),
        Popup: true,
        Type: notify.NotifyType.Error
      }
    }
  }, () => {
    // TODO
  })
})

const onThirdPartyLoginClick = (_thirdParty: oauthbase.AppOAuthThirdParty) => {
  _oauth.getOAuthLoginURL({
    ClientName: _thirdParty.ClientName,
    Message: {
      Error: {
        Title: t('MSG_GET_APP_OAUTH_THIRD_PARTIES'),
        Message: t('MSG_GET_APP_OAUTH_THIRD_PARTIES_FAIL'),
        Popup: true,
        Type: notify.NotifyType.Error
      }
    }
  }, (error: boolean, url?: string) => {
    if (error) {
      return
    }
    if (!url) {
      return
    }
    window.open(url, '_self')
  })
}

</script>

<style lang='sass' scoped>
.btn-sign
  width: 100%

.third-login
  width: 60px
  height: 60px
  border-radius: 8px
  background: #FFF
  box-shadow: 0px 4px 20px 0px rgba(61, 187, 119, 0.20)
  border: 1px solid transparent
  background: linear-gradient(white, white) padding-box, linear-gradient(98.89deg, #56F09F 0%, #A3FFE5 100%) border-box
  padding: 12px
</style>
