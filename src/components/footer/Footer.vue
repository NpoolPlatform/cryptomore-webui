<template>
  <div class='footer full-width'>
    <div class='content-width horizontal-center row'>
      <div class='cursor-pointer left'>
        <Logo height='48px' img-width='42px' text-height='16px' />
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
          <div class='icon'>
            <q-img width='16px' height='16px' :src='github' />
          </div>
          <div class='icon not-first'>
            <q-img width='16px' height='16px' :src='twitter' />
          </div>
          <div class='icon not-first'>
            <q-img width='16px' height='16px' :src='discord' />
          </div>
          <div class='icon not-first'>
            <q-img width='16px' height='16px' :src='medium' />
          </div>
        </div>
        <div class='copyright text-primary' v-html='$t("MSG_PRODUCT_BY_WEB3EYE_TEAM")' />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

import arrowUpRight from 'src/assets/ArrowUpRightLargeMargin.svg'
import github from 'src/assets/Github.svg'
import twitter from 'src/assets/Twitter.svg'
import discord from 'src/assets/Discord.svg'
import medium from 'src/assets/Medium.svg'

const Logo = defineAsyncComponent(() => import('src/components/logo/Logo.vue'))
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

.footer .left
  width: 230px

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
</style>
