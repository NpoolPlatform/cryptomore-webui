<template>
  <div class='text-primary'>
    <div class='row content-width horizontal-center'>
      <div class='card cursor-pointer' @mouseover='onMouseOver(ServicePlan.Free)'>
        <div class='text-center label'>
          {{ $t('MSG_FREE') }}
        </div>
        <div class='text-center price'>
          {{ $t('MSG_MONTHLY_PRICE', { AMOUNT: 0 }) }}
        </div>
        <div class='text-center subtitle color-main-transparent-60'>
          {{ $t('MSG_CRYPTO_PLUS_BUSINESS_FOR_FREE') }}
        </div>
        <q-separator color='secondary' />
        <div class='text-center button'>
          <q-btn
            flat
            :class='["btn btn-medium", servicePlan === ServicePlan.Free ? "btn-main" : "btn-alt"]'
            :label='$t("MSG_GET_STARTED")'
            no-caps
          />
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            Access to basic crypto+ services
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            3 API keys
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            10 requests per second
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            Community support
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            Limited administrator functionalities
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            20% share of product sale amount by platform
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            Basic notifications
          </div>
        </div>
      </div>
      <q-space />
      <div class='card cursor-pointer' @mouseover='onMouseOver(ServicePlan.Growth)'>
        <div class='text-center label'>
          {{ $t('MSG_GROWTH') }}
        </div>
        <div class='text-center price'>
          {{ $t('MSG_MONTHLY_PRICE', { AMOUNT: 49.9 }) }}
        </div>
        <div class='text-center subtitle color-main-transparent-60'>
          Optimized with fast business growth speed with more crypto+ scenario
        </div>
        <q-separator color='secondary' />
        <div class='text-center button'>
          <q-btn
            flat
            :class='["btn btn-medium", servicePlan === ServicePlan.Growth ? "btn-main" : "btn-alt"]'
            :label='$t("MSG_GET_STARTED")'
            no-caps
          />
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            Access to full crypto+ services
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            10 API keys
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            1000 requests per second
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            Community support
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            Advanced administrator functionalities
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            15% share of product sale amount by platform
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            Advanced notifications
          </div>
        </div>
      </div>
      <q-space />
      <div class='card cursor-pointer' @mouseover='onMouseOver(ServicePlan.Enterprise)'>
        <div class='text-center label'>
          {{ $t('MSG_ENTERPRISE') }}
        </div>
        <div class='text-center price'>
          {{ $t('MSG_MONTHLY_PRICE', { AMOUNT: 299.9 }) }}
        </div>
        <div class='text-center subtitle color-main-transparent-60'>
          High performace infrastructure for large scale crypto+ business scenario
        </div>
        <q-separator color='secondary' />
        <div class='text-center button'>
          <q-btn
            flat
            :class='["btn btn-medium", servicePlan === ServicePlan.Enterprise ? "btn-main" : "btn-alt"]'
            :label='$t("MSG_GET_STARTED")'
            no-caps
          />
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            Access to full crypto+ services
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            1000 API keys
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            10000 requests per second
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            Enterprise level support
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            Advanced administrator functionalities
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            10% share of product sale amount by platform
          </div>
        </div>
        <div class='row info'>
          <q-icon name='check' color='secondary' size='20px' class='icon' />
          <div class='text color-main-transparent-80'>
            Advanced notifications
          </div>
        </div>
      </div>
    </div>
    <div class='section-start-margin bg-primary blockchains'>
      <div class='text-center label horizontal-center'>
        {{ $t('MSG_INTEGRATE_50PLUS_BLOCKCHAINS') }}
      </div>
      <div class='row logos'>
        <div class='logo text-center'>
          <q-img :src='filecoin' width='231px' height='80px' />
        </div>
        <div class='logo text-center not-first'>
          <q-img :src='bitcoin' width='231px' height='80px' />
        </div>
        <div class='logo text-center not-first'>
          <q-img :src='ethereum' width='231px' height='80px' />
        </div>
        <div class='logo text-center not-first'>
          <q-img :src='solana' width='231px' height='80px' />
        </div>
        <div class='logo text-center not-first'>
          <q-img :src='binanace' width='231px' height='80px' />
        </div>
        <div class='logo text-center'>
          <q-img :src='aptos' width='231px' height='80px' />
        </div>
        <div class='logo text-center not-first'>
          <q-img :src='tron' width='231px' height='80px' />
        </div>
        <div class='logo text-center not-first'>
          <q-img :src='ironfish' width='231px' height='80px' />
        </div>
        <div class='logo text-center not-first'>
          <q-img :src='sui' width='231px' height='80px' />
        </div>
      </div>
    </div>
    <div
      class='section-start-margin text-primary text-center horizontal-center'
      :style='{maxWidth: "920px", fontSize: "54px", fontWeight: 600, lineHeight: "60px"}'
    >
      We think of Your Requirements could be met with Different Plan
    </div>
    <div class='section-start-margin content-width horizontal-center'>
      HHHHHHHHHHHHH
    </div>
    <div class='section-start-margin faqs'>
      <div class='content-width horizontal-center'>
        HHHHHHHHHHHHH
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
enum ServicePlan {
  Free = 'Free',
  Growth = 'Growth',
  Enterprise = 'Enterprise'
}
const servicePlan = ref(ServicePlan.Growth)
const onMouseOver = (_servicePlan: ServicePlan) => {
  servicePlan.value = _servicePlan
}

import filecoin from 'src/assets/FilecoinRectBg.png'
import bitcoin from 'src/assets/BitcoinRectBg.png'
import ethereum from 'src/assets/ETHRectBg.png'
import solana from 'src/assets/SolanaRectBg.png'
import binanace from 'src/assets/BinanceRectBg.png'
import aptos from 'src/assets/AptosRectBg.png'
import tron from 'src/assets/TronRectBg.png'
import ironfish from 'src/assets/IronfishRectBg.png'
import sui from 'src/assets/SuiRectBg.png'

</script>

<style lang='sass' scoped>
.card
  border: 1px solid #EAEAEA
  background: #FAFAFA
  border-radius: 16px
  padding: 28px
  width: 400px
  height: 640px
  margin-bottom: 16px
  .label
    font-size: 18px
    font-weight: 600
    line-height: 28px
  .price
    font-size: 40px
    font-weight: 600
    line-height: 54px
    margin-top: 12px
  .subtitle
    font-size: 14px
    font-weight: 400
    line-height: 24px
    margin-top: 12px
    margin-bottom: 24px
  .button
    margin-top: 24px
    margin-bottom: 24px
  .info
    margin-bottom: 12px
    .icon
      margin-right: 12px
      padding: 4px 0
    .text
      font-size: 16px
      font-weight: 400
      line-height: 26px
      width: calc(100% - 40px)

@keyframes hoverscale
  0%
    height: 640px
  25%
    height: 648px
    margin-top: -4px
    margin-bottom: 12px
    padding-top: 32px
  50%
    height: 656px
    margin-top: -8px
    margin-bottom: 8px
    padding-top: 36px
  75%
    height: 664px
    margin-top: -12px
    margin-bottom: 4px
    padding-top: 40px
  100%
    height: 672px
    top: -16px
    margin-bottom: 0
    padding-top: 44px

.card:hover
  background: linear-gradient(180deg, rgba(86, 240, 159, 0.6) 0%, rgba(250, 250, 250, 0) 100%)
  height: 672px
  animation-name: hoverscale
  animation-duration: 1000ms
  margin-top: -16px
  margin-bottom: 0
  padding-top: 44px

.blockchains
  padding: 120px 80px
  .label
    font-size: 54px
    font-weight: 600
    line-height: 60px
    color: #FEFBED
    max-width: 710px
  .logos
    margin-top: 100px
    .logo
      background: rgba(255, 255, 255, 0.8)
      width: 231px
      height: 80px
      margin-bottom: 64px
    .not-first
      margin-left: calc((100% - 1155px) / 4)

.faqs
  padding-top: 120px
  padding-bottom: 120px
  background: #FFF9DE
  opacity: 0.5
</style>
