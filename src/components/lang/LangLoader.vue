<script setup lang='ts'>
import { onMounted } from 'vue'
import { useLangStore } from 'src/store/langs'
import { useI18n } from 'vue-i18n'
import { Type as NotificationType } from 'src/store/notifications/const'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const lang = useLangStore()

onMounted(() => {
  lang.$subscribe((_, state) => {
    if (state.CurLang) {
      const messages = state.Messages[state.CurLang.Lang]
      if (messages) {
        return
      }
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
