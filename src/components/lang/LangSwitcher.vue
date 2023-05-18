<template>
  <q-btn-dropdown
    flat
    class='btn btn-small'
    icon='language'
    dropdown-icon='expand_more'
    :label='curLang'
    :menu-offset='[0, 22]'
  >
    <q-list class='menu'>
      <q-item
        dense
        clickable
        v-close-popup
        v-for='_lang in langs'
        :class='[ curLang === _lang.Short ? "highlight-transparent-10" : "" ]'
        :key='_lang.ID'
        @click='onLangClick(_lang)'
      >
        <div class='row item'>
          <q-img class='logo' :src='_lang.Logo' />
          <q-item-label>{{ _lang.Name }}</q-item-label>
        </div>
        <q-separator class='highlight-transparent-10' />
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup lang='ts'>
import { g11n, notif, _locale, user, notification } from 'src/mystore'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const lang = g11n.AppLang.useG11nAppLangStore()
const langs = computed(() => lang.Langs)

const locale = _locale.useLocaleStore()
const curLang = computed(() => locale.AppLang?.Short)

const logined = user.useLocalUserStore()
const _notif = notif.Notif.useNotifNotifStore()

const getNotifs = (offset: number, limit: number) => {
  _notif.getNotifs({
    Offset: offset,
    Limit: limit,
    Message: {
      Error: {
        Title: t('MSG_GET_WITHDRAW_ACCOUNTS_FAIL'),
        Popup: true,
        Type: notification.NotifyType.Error
      }
    }
  }, (error: boolean, rows: Array<notif.Notif.Notif>) => {
    if (error) {
      return
    }
    if (rows.length === 0) {
      return
    }
    getNotifs(offset + limit, limit)
  })
}

const onLangClick = (language: g11n.AppLang.Lang) => {
  locale.setLang(language)
  if (logined.logined) {
    _notif.$reset()
    getNotifs(0, 100)
  }
}

</script>

<style lang='sass' scoped>
.menu
  min-width: 160px

.menu .logo
  width: 32px
  height: 16px
  margin-right: 6px

.menu .item
  height: 32px
  padding: 8px 0
</style>
