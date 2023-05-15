<template>
  <ul class='language-picker'>
    <li
      v-for='language in langs'
      :class='[ curLang === language.Lang ? "selected" : "" ]'
      :key='language.ID'
      @click='onLangClick(language)'
    >
      <a class='language'>
        {{ language.Short?.length > 0 ? language.Short : language.Lang }}
      </a>
    </li>
  </ul>
</template>

<script setup lang='ts'>

import { useLocaleStore, AppLang, useLocalUserStore, NotifyType } from 'npool-cli-v4'
import { g11n, notif } from 'src/store'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const lang = g11n.AppLang.useG11nAppLangStore()
const langs = computed(() => lang.Langs)

const locale = useLocaleStore()
const curLang = computed(() => locale.AppLang?.Lang)

const logined = useLocalUserStore()
const _notif = notif.Notif.useNotifNotifStore()

const getNotifs = (offset: number, limit: number) => {
  _notif.getNotifs({
    Offset: offset,
    Limit: limit,
    Message: {
      Error: {
        Title: t('MSG_GET_WITHDRAW_ACCOUNTS_FAIL'),
        Popup: true,
        Type: NotifyType.Error
      }
    }
  }, (error: boolean, rows: Array<notif.Notif.NotifTypes.Notif>) => {
    if (error) {
      return
    }
    if (rows.length === 0) {
      return
    }
    getNotifs(offset + limit, limit)
  })
}

const onLangClick = (language: AppLang) => {
  locale.setLang(language)
  if (logined.logined) {
    _notif.$reset()
    getNotifs(0, 100)
  }
}

</script>
