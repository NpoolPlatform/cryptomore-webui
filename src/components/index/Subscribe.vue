<template>
  <div class='subscribe content-width horizontal-center'>
    <div class='title text-center text-primary'>
      {{ $t('MSG_SUBSCRIBE_TO_NEWS') }}
    </div>
    <div class='row horizontal-center input'>
      <q-input
        class='input-box'
        outlined
        bottom-slots
        v-model='emailAddress'
        :label='$t("MSG_SUBSCRIBE_WITH_EMAIL")'
        rounded
        color='primary'
      />
      <q-btn
        flat
        class='btn btn-main btn-large subscribe-btn'
        :label='$t("MSG_SUBSCRIBE")'
        no-caps
        :disable='!validator.validateEmail(emailAddress)'
        @click='onSubscribeClick'
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { validator } from 'src/utils'
import { subscriber, notification } from 'src/mystore'
import { AppID } from 'src/const/const'
import { useI18n } from 'vue-i18n'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const emailAddress = ref('')

const _subscriber = subscriber.useSubscriberStore()

const onSubscribeClick = () => {
  _subscriber.createSubscriber({
    AppID: AppID,
    EmailAddress: emailAddress.value,
    Message: {
      Error: {
        Title: t('MSG_SUBSCRIBE'),
        Message: t('MSG_SUBSCRIBE_FAIL'),
        Popup: true,
        Type: notification.NotifyType.Error
      },
      Info: {
        Title: t('MSG_SUBSCRIBE'),
        Message: t('MSG_SUBSCRIBE_SUCCESS'),
        Popup: true,
        Type: notification.NotifyType.Success
      }
    }
  }, () => {
    // TODO
  })
}

</script>

<style lang='sass' scoped>
.subscribe
  padding-top: 120px
  padding-bottom: 120px

.subscribe .title
  font-size: 54px
  font-weight: 600
  line-height: 60px

.subscribe .input
  max-width: 854px
  margin-top: 100px
  height: 64px

.subscribe .input .subscribe-btn
  width: 166px
  margin-left: -166px
  margin-top: 0
  height: 56px
  border-radius: 0 28px 28px 0

.subscribe .input .input-box
  max-width: 854px
  width: 100%

::v-deep .q-field__control::after
  color: $secondary
</style>
