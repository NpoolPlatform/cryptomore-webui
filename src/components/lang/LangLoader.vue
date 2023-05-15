<script setup lang='ts'>
import { onMounted, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { _locale, g11n, notification } from 'src/mystore'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const locale = _locale.useLocaleStore()
const langID = computed(() => locale.AppLang?.LangID)

const message = g11n.Message.useMessageStore()
const messages = computed(() => message.getMessagesByLangID(langID.value))
watch(langID, () => {
  if (messages.value.length === 0) {
    getMessages(0, 500)
  }
})

const lang = g11n.AppLang.useG11nAppLangStore()

onMounted(() => {
  if (lang.Langs.length === 0) {
    getLangs(0, 100)
  }
})

const getLangs = (offset: number, limit: number) => {
  lang.getLangs({
    Offset: offset,
    Limit: limit,
    Message: {
      Error: {
        Title: t('MSG_GET_LANG_MESSAGES'),
        Message: t('MSG_GET_LANG_MESSAGES_FAIL'),
        Popup: true,
        Type: notification.NotifyType.Error
      }
    }
  }, (error: boolean, rows?: Array<g11n.AppLang.Lang>) => {
    if (error || !rows?.length) {
      return
    }
    getLangs(offset + limit, limit)
  })
}

const getMessages = (offset: number, limit: number) => {
  message.getMessages({
    LangID: langID.value,
    Disabled: false,
    Offset: offset,
    Limit: limit,
    NotifyMessage: {
      Error: {
        Title: t('MSG_GET_LANG_MESSAGES'),
        Message: t('MSG_GET_LANG_MESSAGES_FAIL'),
        Popup: true,
        Type: notification.NotifyType.Error
      }
    }
  }, (error: boolean, rows: Array<g11n.Message.Message>) => {
    if (error || rows.length === 0) {
      return
    }
    getMessages(offset + limit, limit)
  })
}
</script>
