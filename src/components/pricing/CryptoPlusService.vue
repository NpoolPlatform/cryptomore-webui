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
            @click='onGetStartedClick'
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
            @click='onGetStartedClick'
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
            @click='onGetStartedClick'
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
      <div class='content-width horizontal-center'>
        <div class='text-center label horizontal-center'>
          {{ $t('MSG_INTEGRATE_50PLUS_BLOCKCHAINS') }}
        </div>
        <div class='row logos'>
          <div class='logo text-center cursor-pointer'>
            <q-img :src='filecoin' width='231px' height='80px' />
          </div>
          <div class='logo text-center not-first cursor-pointer'>
            <q-img :src='bitcoin' width='231px' height='80px' />
          </div>
          <div class='logo text-center not-first cursor-pointer'>
            <q-img :src='ethereum' width='231px' height='80px' />
          </div>
          <div class='logo text-center not-first cursor-pointer'>
            <q-img :src='solana' width='231px' height='80px' />
          </div>
          <div class='logo text-center not-first cursor-pointer'>
            <q-img :src='binanace' width='231px' height='80px' />
          </div>
          <div class='logo text-center cursor-pointer'>
            <q-img :src='aptos' width='231px' height='80px' />
          </div>
          <div class='logo text-center not-first cursor-pointer'>
            <q-img :src='tron' width='231px' height='80px' />
          </div>
          <div class='logo text-center not-first cursor-pointer'>
            <q-img :src='ironfish' width='231px' height='80px' />
          </div>
          <div class='logo text-center not-first cursor-pointer'>
            <q-img :src='sui' width='231px' height='80px' />
          </div>
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
      <div class='row'>
        <div class='features color-main-transparent-60'>
          <div class='title'>
            Features
          </div>
          <div class='label'>
            Application System
          </div>
          <div class='label'>
            User System
          </div>
          <div class='label'>
            Product System
          </div>
          <div class='label'>
            Product Ledger System
          </div>
          <div class='label'>
            User Ledger System
          </div>
          <div class='label'>
            Billing System
          </div>
          <div class='label'>
            Order System
          </div>
          <div class='label'>
            Notifications for Product Sale
          </div>
          <div class='label'>
            Announcement/Notification System
          </div>
          <div class='label'>
            Incentive Commission System
          </div>
          <div class='label'>
            Incentive Coupon System
          </div>
          <div class='label'>
            User Credits System
          </div>
          <div class='label'>
            Requests Per Second
          </div>
          <div class='label'>
            Pay in Crypto
          </div>
          <div class='label'>
            Pay in Fiat
          </div>
          <div class='label'>
            Service SLA
          </div>
          <div class='label'>
            Trace & Debug
          </div>
          <div class='label'>
            Community Support
          </div>
          <div class='label'>
            Ticket Support
          </div>
          <div class='label'>
            Response Time
          </div>
          <div class='label'>
            Region Support
          </div>
          <div class='label'>
            Data Center System
          </div>
          <div class='label'>
            Active Applications
          </div>
          <div class='label'>
            Active Users
          </div>
          <div class='label'>
            Active Products
          </div>
        </div>
        <q-space />
        <div class='plan text-primary text-center'>
          <div class='normal'>
            <div class='title'>
              Free
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='cancel' color='negative' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='cancel' color='negative' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='cancel' color='negative' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='cancel' color='negative' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='cancel' color='negative' size='24px' />
            </div>
            <div class='label color-main-transparent-80'>
              10
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='cancel' color='negative' size='24px' />
            </div>
            <div class='label color-main-transparent-80'>
              99%
            </div>
            <div class='icon'>
              <q-icon name='cancel' color='negative' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='cancel' color='negative' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='cancel' color='negative' size='24px' />
            </div>
            <div class='label color-main-transparent-80'>
              24 Hours
            </div>
            <div class='label color-main-transparent-80'>
              Single
            </div>
            <div class='icon'>
              <q-icon name='cancel' color='negative' size='24px' />
            </div>
            <div class='label color-main-transparent-80'>
              3
            </div>
            <div class='label color-main-transparent-80'>
              1000
            </div>
            <div class='label color-main-transparent-80'>
              3
            </div>
          </div>
        </div>
        <q-space />
        <div class='plan text-primary text-center'>
          <div class='normal center'>
            <div class='title'>
              Growth
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='label color-main-transparent-80'>
              300
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='label color-main-transparent-80'>
              99.9%
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='label color-main-transparent-80'>
              8 Hours
            </div>
            <div class='label color-main-transparent-80'>
              Specified
            </div>
            <div class='icon'>
              <q-icon name='cancel' color='negative' size='24px' />
            </div>
            <div class='label color-main-transparent-80'>
              20
            </div>
            <div class='label color-main-transparent-80'>
              10000
            </div>
            <div class='label color-main-transparent-80'>
              10
            </div>
          </div>
        </div>
        <q-space />
        <div class='plan text-primary text-center'>
          <div class='normal'>
            <div class='title'>
              Enterprise
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='label color-main-transparent-80'>
              10000
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='label color-main-transparent-80'>
              99.9%
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='label color-main-transparent-80'>
              4 Hours
            </div>
            <div class='label color-main-transparent-80'>
              All
            </div>
            <div class='icon'>
              <q-icon name='check_circle' color='secondary' size='24px' />
            </div>
            <div class='label color-main-transparent-80'>
              100
            </div>
            <div class='label color-main-transparent-80'>
              100000
            </div>
            <div class='label color-main-transparent-80'>
              300
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='section-start-margin faqs'>
      <div class='content-width horizontal-center row'>
        <div class='title'>
          {{ $t('MSG_FREQUENTLY_ASKED_QUESTIONS') }}
        </div>
        <div class='faq-content'>
          <div class='row'>
            <q-icon :name='faqTitle === "What is Application System ?" ? "expand_more" : "chevron_right"' size='32px' />
            <div class='faq-text'>
              <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "What is Application System ?"'>
                What is Application System ?
              </div>
              <q-slide-transition>
                <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "What is Application System ?"'>
                  Crypto More's crypto+ infrastructure is a multi-tenancy system. It supports multiple applications with one backend system. Application system let user to create their application with a base capacity of Crypto More.
                </div>
              </q-slide-transition>
            </div>
          </div>
          <div class='row'>
            <q-icon :name='faqTitle === "What is User System ?" ? "expand_more" : "chevron_right"' size='32px' />
            <div class='faq-text'>
              <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "What is User System ?"'>
                What is User System ?
              </div>
              <q-slide-transition>
                <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "What is User System ?"'>
                  When we create an application, normally we want to let user access our application with some account and password. User system is used to manage users who access to our application.
                </div>
              </q-slide-transition>
            </div>
          </div>
          <div class='row'>
            <q-icon :name='faqTitle === "What is Product System ?" ? "expand_more" : "chevron_right"' size='32px' />
            <div class='faq-text'>
              <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "What is Product System ?"'>
                What is Product System ?
              </div>
              <q-slide-transition>
                <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "What is Product System ?"'>
                  Product system is used to manage products custodied on the platform. It holds information of the product, such as vendor location, stock, benefit type, benefit interval, etc. User who has their own channel can wholesale products from platform then retail sale with higher price, then they can earn the price gap as profit.
                </div>
              </q-slide-transition>
            </div>
          </div>
          <div class='row'>
            <q-icon :name='faqTitle === "What is Product Ledger System ?" ? "expand_more" : "chevron_right"' size='32px' />
            <div class='faq-text'>
              <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "What is Product Ledger System ?"'>
                What is Product Ledger System ?
              </div>
              <q-slide-transition>
                <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "What is Product Ledger System ?"'>
                  After sale the product to users, there will be two types currency generated: user pay to platform to buy the product, blockchain reward to the product. For clear accounting job, product ledger system will record incoming/outcoming history of the products.
                </div>
              </q-slide-transition>
            </div>
          </div>
          <div class='row'>
            <q-icon :name='faqTitle === "What is User Ledger System ?" ? "expand_more" : "chevron_right"' size='32px' />
            <div class='faq-text'>
              <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "What is User Ledger System ?"'>
                What is User Ledger System ?
              </div>
              <q-slide-transition>
                <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "What is User Ledger System ?"'>
                  For end user who purchase the product, blockchain reward will go to their wallet directly. But we still need to record the reward history for clear accounting job. User ledger system will keep such informations. Even more, for users who is not willing to deposit token to their own address directly, user ledger system will play as a wallet to keep users balance.
                </div>
              </q-slide-transition>
            </div>
          </div>
          <div class='row'>
            <q-icon :name='faqTitle === "What is Data Center System ?" ? "expand_more" : "chevron_right"' size='32px' />
            <div class='faq-text'>
              <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "What is Data Center System ?"'>
                What is Data Center System ?
              </div>
              <q-slide-transition>
                <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "What is Data Center System ?"'>
                  For each product, we manage low-level assets in different data centers. Such low-level hardwares will take part in blockchain mining, get rewards then send to user who purchase specified product. Data center system integrates offline data center with cloud service infrastructure, let user who purchase product can access their low-level assets, provides reliable product experience for users.
                </div>
              </q-slide-transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useChatWoot } from '@productdevbook/chatwoot/vue'

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

const faqTitle = ref('What is Application System ?')

const chatwoot = useChatWoot()
const onGetStartedClick = () => {
  chatwoot.toggle('open')
}

</script>

<style lang='sass' scoped>
.card
  border: 1px solid #EAEAEA
  background: #FAFAFA
  border-radius: 16px
  padding: 28px
  width: calc((100% - 64px) / 3)
  height: 640px
  margin-bottom: 16px
  @media (max-width: 1280px)
    width: 100%
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

.card:hover
  background: linear-gradient(180deg, rgba(86, 240, 159, 0.6) 0%, rgba(250, 250, 250, 0) 100%)
  height: 672px
  transform: scale(1, 1.03)
  transition: all 500ms
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
  background: rgba(255, 249, 222, 0.5)
  @media (min-width: 1280px)
    height: 700px
  .title
    font-size: 54px
    font-weight: 600
    line-height: 60px
    width: 282px
  .faq-content
    margin-left: 268px
    width: calc(100% - 282px - 268px)
    @media (max-width: 1280px)
      width: 100%
      margin-left: 0
      margin-top: 24px
    .faq-text
      width: calc(100% - 48px)
    .faq-title
      font-weight: 600
      font-size: 24px
      line-height: 32px
      margin-left: 16px
      margin-bottom: 24px
    .faq-subtitle
      font-weight: 400
      font-size: 16px
      line-height: 26px
      margin-left: 16px
      margin-bottom: 24px

.features
  font-size: 18px
  font-weight: 700
  line-height: 28px
  width: 40%
  padding: 28px 0
  .title
    margin-bottom: 24px
  .label
    font-size: 16px
    font-weight: 600
    line-height: 28px
    padding: 16px 0
    border-bottom: 1px solid rgba(86, 240, 159, 0.6)
    overflow: hidden
    white-space: nowrap

.plan
  font-size: 18px
  font-weight: 600
  line-height: 28px
  width: 20%
  .title
    margin-bottom: 24px
  .label
    font-size: 16px
    font-weight: 600
    line-height: 28px
    padding: 16px 0
    border-bottom: 1px solid rgba(86, 240, 159)
  .icon
    padding: 16px 0
    border-bottom: 1px solid rgba(86, 240, 159)
  .center
    background: linear-gradient(180deg, rgba(86, 240, 159, 0.4) 0%, rgba(86, 240, 159, 0) 100%)
    border-radius: 8px
  .normal
    padding: 28px 0
</style>
