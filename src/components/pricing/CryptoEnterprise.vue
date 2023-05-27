<template>
  <div class='text-primary'>
    <div class='content-width horizontal-center'>
      <div class='row plan '>
        <div class='detail'>
          <div class='row info'>
            <q-icon name='check' color='secondary' size='20px' class='icon' />
            <div class='text color-main-transparent-80'>
              Unlimited applications and users
            </div>
          </div>
          <div class='row info'>
            <q-icon name='check' color='secondary' size='20px' class='icon' />
            <div class='text color-main-transparent-80'>
              A different deployment plan with a different price
            </div>
          </div>
          <div class='row info'>
            <q-icon name='check' color='secondary' size='20px' class='icon' />
            <div class='text color-main-transparent-80'>
              Requests are limited only by cluster hardware ability
            </div>
          </div>
          <div class='row info'>
            <q-icon name='check' color='secondary' size='20px' class='icon' />
            <div class='text color-main-transparent-80'>
              7x24 hours of dedicated support and onsite support
            </div>
          </div>
          <div class='row info'>
            <q-icon name='check' color='secondary' size='20px' class='icon' />
            <div class='text color-main-transparent-80'>
              Dedicated data in private storage
            </div>
          </div>
        </div>
        <div class='price'>
          <div class='vertical-center'>
            <div class='text-center'>
              <div class='amount'>
                $100000 initialize
              </div>
              <div class='amount'>
                $10000-50000 / mo
              </div>
              <q-btn
                flat
                class='btn btn-main btn-small button'
                size='1rem'
                :label='$t("MSG_LETS_TALK")'
                no-caps
              />
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
                  Crypto More's crypto+ infrastructure is a multi-tenancy system. It supports multiple applications with one backend system. Application system let user to create their application with a base capacity of Crypto More.
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

const faqTitle = ref('What is Application System ?')
</script>

<style lang='sass' scoped>
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

.plan
  font-size: 18px
  font-weight: 600
  line-height: 28px
  width: 100%
  border: 1px solid transparent
  background: linear-gradient(white, white) padding-box, linear-gradient(180deg, #56F09F 0%, rgba(86, 240, 159, 0.5) 100%) border-box
  border-radius: 16px
  .info
    margin-bottom: 12px
    .icon
      margin-right: 12px
      padding: 4px 0
    .text
      font-size: 16px
      font-weight: 400
      line-height: 26px
  .price
    padding: 52px 40px
    width: 498px
    background: linear-gradient(180deg, rgba(86, 240, 159, 0.6) 0%, rgba(61, 187, 119, 0) 100%)
    border-radius: 0 16px 16px 0
    @media (max-width: 700px)
      width: 100%
    .amount
      font-weight: 800
      font-size: 40px
      line-height: 54px
      margin-bottom: 12px
    .button
      margin-top: 12px
  .detail
    width: calc(100% - 498px)
    padding: 60px
    border-right: 1px solid $secondary
    background: linear-gradient(180deg, rgba(61, 187, 119, 0.04) 0%, rgba(255, 255, 255, 0) 100%)
    @media (max-width: 700px)
      width: 100%
</style>
