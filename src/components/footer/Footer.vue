<template>
  <div class='footer full-width'>
    <div class='content-width horizontal-center row'>
      <div class='left'>
        <Logo class='cursor-pointer' height='48px' img-width='42px' text-height='16px' />
        <q-btn
          flat
          class='btn btn-main btn-here btn-trial'
          :label='$t("MSG_FREE_TRIAL")'
          no-caps
          :icon-right='"img:" + arrowUpRight'
        />
        <q-btn
          flat
          class='btn btn-alt btn-here btn-contact'
          :label='$t("MSG_CONTACT_US")'
          no-caps
        />
        <div class='row social'>
          <div class='icon cursor-pointer'>
            <q-img width='16px' height='16px' :src='github' />
          </div>
          <div class='icon not-first cursor-pointer'>
            <q-img width='16px' height='16px' :src='twitter' />
          </div>
          <div class='icon not-first cursor-pointer'>
            <q-img width='16px' height='16px' :src='discord' />
          </div>
          <div class='icon not-first cursor-pointer'>
            <q-img width='16px' height='16px' :src='medium' />
          </div>
        </div>
        <div class='copyright text-primary cursor-pointer' v-html='$t("MSG_PRODUCT_BY_WEB3EYE_TEAM")' />
      </div>
      <q-space />
      <div class='row right'>
        <div class='menu text-primary'>
          <span class='title'>{{ $t('MSG_SERVICES') }}</span>
          <div class='menu-list color-main-transparent-60'>
            <div class='menu-list-item cursor-pointer'>
              {{ $t('MSG_CRYPTO_PLUS_SERVICE') }}
            </div>
            <div class='menu-list-item cursor-pointer'>
              {{ $t('MSG_CRYPTO_ENTERPRISE') }}
            </div>
            <div class='menu-list-item cursor-pointer'>
              {{ $t('MSG_MINING_STAKING') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='onMenuClick("/pricing")'>
              {{ $t('MSG_PRICING') }}
            </div>
          </div>
        </div>
        <q-space />
        <div class='menu text-primary'>
          <span class='title'>{{ $t('MSG_APPLICATIONS') }}</span>
          <div class='menu-list color-main-transparent-60'>
            <div class='menu-list-item cursor-pointer'>
              {{ $t('MSG_FIL_PEGGY') }}
            </div>
            <div class='menu-list-item cursor-pointer'>
              {{ $t('MSG_WEB3EYE') }}
            </div>
            <div class='menu-list-item cursor-pointer'>
              {{ $t('MSG_PROCYON') }}
            </div>
            <div class='menu-list-item cursor-pointer'>
              {{ $t('MSG_LP_SECRET_BASE') }}
            </div>
          </div>
        </div>
        <q-space />
        <div class='menu text-primary'>
          <span class='title'>{{ $t('MSG_CHAINS') }}</span>
          <div class='menu-list color-main-transparent-60'>
            <div class='menu-list-item cursor-pointer' @click='void router.push({ path: "/filecoin" })'>
              {{ $t('MSG_FILECOIN') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='void router.push({ path: "/bitcoin" })'>
              {{ $t('MSG_BITCOIN') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='void router.push({ path: "/ethereum" })'>
              {{ $t('MSG_ETHEREUM') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='void router.push({ path: "/solana" })'>
              {{ $t('MSG_SOLANA') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='onGotoUrl("https://tron.network/")'>
              {{ $t('MSG_TRON') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='onGotoUrl("https://www.bnbchain.org/en/smartChain")'>
              {{ $t('MSG_BINANCE_SMART_CHAIN') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='void router.push({ path: "/aleo" })'>
              {{ $t('MSG_ALEO') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='void router.push({ path: "/ironfish" })'>
              {{ $t('MSG_IRON_FISH') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='void router.push({ path: "/aptos" })'>
              {{ $t('MSG_APTOS') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='void router.push({ path: "/sui" })'>
              {{ $t('MSG_SUI') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='void router.push({ path: "/linera" })'>
              {{ $t('MSG_LINERA') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='onGotoUrl("https://www.chia.net/")'>
              {{ $t('MSG_CHIA') }}
            </div>
          </div>
        </div>
        <q-space />
        <div class='menu text-primary'>
          <span class='title'>{{ $t('MSG_COMPANY') }}</span>
          <div class='menu-list color-main-transparent-60'>
            <div class='menu-list-item cursor-pointer' @click='onMenuClick("/aboutus")'>
              {{ $t('MSG_CRYPTO_MORE') }}
            </div>
            <div v-if='false' class='menu-list-item cursor-pointer'>
              {{ $t('MSG_PARTNERS') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='onMenuClick("/career")'>
              {{ $t('MSG_CAREER') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='onMenuClick("/terms")'>
              {{ $t('MSG_TERMS_OF_USE') }}
            </div>
            <div class='menu-list-item cursor-pointer' @click='onMenuClick("/policy")'>
              {{ $t('MSG_PRIVACY_NOTICE') }}
            </div>
            <div class='menu-list-item cursor-pointer'>
              {{ $t('MSG_CONTACT') }}
            </div>
          </div>
        </div>
        <div class='menu text-primary'>
          <span class='title'>{{ $t('MSG_RESOURCES') }}</span>
          <div class='menu-list color-main-transparent-60'>
            <div class='menu-list-item cursor-pointer'>
              {{ $t('MSG_DOCS') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'

import arrowUpRight from 'src/assets/ArrowUpRightLargeMargin.svg'
import github from 'src/assets/Github.svg'
import twitter from 'src/assets/Twitter.svg'
import discord from 'src/assets/Discord.svg'
import medium from 'src/assets/Medium.svg'

const Logo = defineAsyncComponent(() => import('src/components/logo/Logo.vue'))

const router = useRouter()
const onMenuClick = (target: string) => {
  void router.push({ path: target })
}

const onGotoUrl = (url: string) => {
  window.open(url)
}

</script>

<style lang='sass' scoped>
.footer
  background: url('src/assets/FooterBg.svg')
  background-size: cover
  min-height: 516px
  width: 100%
  border-radius: 0 40px 0 0
  padding-top: 80px
  padding-bottom: 120px
  z-index: 2000

.footer .left
  width: 230px
  margin-bottom: 16px

.btn-here
  height: 42px
  border-radius: 24px
  width: 182px
  font-size: 16px
  font-weight: 500
  margin-left: 21px

.btn-trial
  margin-top: 40px

.btn-contact
  margin-top: 16px

.footer .left .social
  margin-top: 64px
  margin-left: 21px
  width: 182px

.footer .left .copyright
  margin-top: 12px

.footer .left .social .icon
  width: 32px
  height: 32px
  padding: 3px 7px 3px 7px
  border-radius: 16px
  border: 1px solid $secondary

.footer .left .social .not-first
  margin-left: calc((100% - 128px) / 3)

.footer
  .right
    max-width: 919px
    .menu
      width: calc(100% / 4)
      min-width: 160px
      @media (max-width: 1058px)
        margin-top: 32px
      .title
        font-size: 18px
        font-weight: 600
        line-height: 28px
      .menu-list
        font-size: 14px
        line-height: 24px
        font-weight: 400px
        margin-top: 16px
        .menu-list-item
          margin-top: 4px
        .menu-list-item:hover
          color: $primary
          text-shadow: 1px 1px $secondary
</style>
