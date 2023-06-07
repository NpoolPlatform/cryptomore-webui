<template>
  <div class='crypto-service full-width'>
    <div class='text-center title' v-html='$t("MSG_CRYPTO_SERVICE_TITLE")' />
    <div class='text-center horizontal-center subtitle color-main-transparent-60' v-html='$t("MSG_CRYPTO_SERVICE_SUBTITLE")' />
    <div class='content row horizontal-center content-width'>
      <div class='left'>
        <div class='row'>
          <q-img width='48px' height='48px' :src='cryptoServiceStack' />
          <div class='caption'>
            <div class='title'>
              {{ $t('MSG_FULL_CRYPTO_SERVICE_STACK_TITLE') }}
            </div>
            <div class='subtitle color-main-transparent-80'>
              {{ $t('MSG_FULL_CRYPTO_SERVICE_STACK_SUBTITLE') }}
            </div>
          </div>
        </div>
        <div class='row not-first'>
          <q-img width='48px' height='48px' :src='easyIntegration' />
          <div class='caption'>
            <div class='title'>
              {{ $t('MSG_EASY_APPLICATION_INTEGRATION_TITLE') }}
            </div>
            <div class='subtitle color-main-transparent-80'>
              {{ $t('MSG_EASY_APPLICATION_INTEGRATION_SUBTITLE') }}
            </div>
          </div>
        </div>
        <div class='row not-first'>
          <q-img width='48px' height='48px' :src='customization' />
          <div class='caption'>
            <div class='title'>
              {{ $t('MSG_CUSTOMIZABLE_PRIVATE_DEPLOYMENT_TITLE') }}
            </div>
            <div class='subtitle color-main-transparent-80'>
              {{ $t('MSG_CUSTOMIZABLE_PRIVATE_DEPLOYMENT_SUBTITLE') }}
            </div>
          </div>
        </div>
        <div class='row btns'>
          <q-btn
            flat
            class='btn btn-main btn-medium'
            :label='$t("MSG_FREE_TRIAL")'
            no-caps
            :icon-right='"img:" + arrowUpRight'
            @click='onFreeTrialClick'
          />
          <q-btn
            flat
            class='btn btn-alt btn-medium mini-hide btn-left-8'
            :label='$t("MSG_VIEW_MORE")'
            no-caps
            @click='onViewMoreClick'
          />
        </div>
      </div>
      <div class='right scale-hide'>
        <q-img class='img' :src='buildApplication' />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router'

import buildApplication from 'src/assets/BuildApplication.png'
import cryptoServiceStack from 'src/assets/CryptoServiceStack.svg'
import easyIntegration from 'src/assets/EasyIntegration.svg'
import customization from 'src/assets/Customizable.svg'
import arrowUpRight from 'src/assets/ArrowUpRightLargeMargin.svg'

const router = useRouter()

const onFreeTrialClick = () => {
  void router.push({ path: '/pricing' })
}

const onViewMoreClick = () => {
  void router.push({ path: '/pricing' })
}

</script>

<style lang='sass' scoped>
.crypto-service .title
  font-size: 54px
  line-height: 60px
  color: $primary
  font-weight: 600

.crypto-service .subtitle
  margin-top: 44px
  font-size: 20px
  font-weight: 500
  max-width: 878px

.crypto-service .content
  margin-top: 92px

.crypto-service .content .left
  width: 620px
  @media (max-width: 1280px)
    width: 100%

.crypto-service .content .right
  margin: 0 -80px 0 150px

.crypto-service .content .right .img
  width: 590px
  height: 628px

.crypto-service .content .left .caption
  margin-left: 16px
  max-width: 556px
  @media (max-width: 1280px)
    max-width: calc(100% - 64px)

.crypto-service .content .left .not-first
  margin-top: 64px

.crypto-service .content .left .caption .title
  font-size: 24px
  font-weight: 600
  line-height: 32px

.crypto-service .content .left .caption .subtitle
  margin-top: 24px
  font-size: 16px
  font-weight: 500

.crypto-service .content .left .btns
  margin-top: 40px
  margin-left: 64px
</style>
