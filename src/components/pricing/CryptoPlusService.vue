<template>
  <div class='row content-width horizontal-center text-primary'>
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
</template>

<script setup lang='ts'>
import { ref } from 'vue'
enum ServicePlan {
  Free = 'Free',
  Growth = 'Growth',
  Enterprise = 'Enterprise'
}
const servicePlan = ref(ServicePlan.Free)
const onMouseOver = (_servicePlan: ServicePlan) => {
  servicePlan.value = _servicePlan
}
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
</style>
