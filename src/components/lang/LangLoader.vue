<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { useLangStore } from 'src/store/langs'
import { useI18n } from 'vue-i18n'
import { Type as NotificationType } from 'src/store/notifications/const'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })
const i18n = useI18n()

const lang = useLangStore()

const updateLocaleMessage = () => {
  const oldMessages = i18n.getLocaleMessage(lang.CurLang?.Lang as string)
  const newMessages = lang.Messages[lang.CurLang?.Lang as string]

  if (!newMessages) {
    return
  }

  Object.keys(newMessages).forEach((key) => {
    oldMessages[key] = newMessages[key]
  })

  i18n.setLocaleMessage(lang.CurLang?.Lang as string, oldMessages)
}

const oldLangID = ref(lang.CurLang?.ID)

onMounted(() => {
  lang.$subscribe((_, state) => {
    if (state.CurLang && oldLangID.value !== state.CurLang.ID) {
      lang.getLangMessages({
        LangID: state.CurLang.ID,
        Message: {
          Error: {
            Title: t('MSG_GET_LANG_MESSAGES'),
            Message: t('MSG_GET_LANG_MESSAGES_FAIL'),
            Popup: true,
            Type: NotificationType.Error
          }
        }
      })
    }
    updateLocaleMessage()
  })

  lang.getLangs({
    Message: {
      Error: {
        Title: t('MSG_GET_LANGS'),
        Message: t('MSG_GET_LANGS_FAIL'),
        Popup: true,
        Type: NotificationType.Error
      }
    }
  })
})

</script>
