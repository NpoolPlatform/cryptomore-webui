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
          <div class='vertical-center' :style='{height: "100%"}'>
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
                @click='onLetsTalkClick'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='workflow section-start-margin text-center'>
      <div class='title'>
        Invest and Reward from Blockchain Directly
      </div>
      <q-img :src='workflowBg' width='852px' height='347px' />
    </div>
    <div class='faqs'>
      <div class='content-width horizontal-center row'>
        <div class='title'>
          {{ $t('MSG_FREQUENTLY_ASKED_QUESTIONS') }}
        </div>
        <div class='faq-content'>
          <div class='row'>
            <q-icon :name='faqTitle === "When will you need enterprise plan ?" ? "expand_more" : "chevron_right"' size='32px' />
            <div class='faq-text'>
              <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "When will you need enterprise plan ?"'>
                When will you need enterprise plan ?
              </div>
              <q-slide-transition>
                <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "When will you need enterprise plan ?"'>
                  An organization that wants to construct its crypto+ infrastructure backbone is suitable for an enterprise plan. With an enterprise plan, they need to invest whole cloud production cluster and data center integration infrastructure before they can launch their business.
                </div>
              </q-slide-transition>
            </div>
          </div>
          <div class='row'>
            <q-icon :name='faqTitle === "What is benefit of enterprise plan ?" ? "expand_more" : "chevron_right"' size='32px' />
            <div class='faq-text'>
              <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "What is benefit of enterprise plan ?"'>
                What is benefit of enterprise plan ?
              </div>
              <q-slide-transition>
                <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "What is benefit of enterprise plan ?"'>
                  The requirement of a mature organization is normally different from a startup organization, they may want to custody data such as order book, hot wallet private key, etc in their own network for several reasons. With an enterprise plan, they will construct the whole crypto+ infrastructure backbone in their own private network, in which they can control everything.
                </div>
              </q-slide-transition>
            </div>
          </div>
          <div class='row'>
            <q-icon :name='faqTitle === "How will the enterprise plan be deployed ?" ? "expand_more" : "chevron_right"' size='32px' />
            <div class='faq-text'>
              <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "How will the enterprise plan be deployed ?"'>
                How will the enterprise plan be deployed ?
              </div>
              <q-slide-transition>
                <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "How will the enterprise plan be deployed ?"'>
                  Basically, the cloud infrastructure is constructed based on Kubernetes. It integrates the offline ability to manage low-level assets from different data centers located in different countries and cities. Communication between data centers and cloud services is built in a secure and certified method to ensure channel security. We will deploy the whole cloud infrastructure / low-level assets management solution in the enterprise plan to the customer’s network.
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

import workflowBg from 'src/assets/WorkflowBg.png'

const faqTitle = ref('When will you need enterprise plan ?')

const chatwoot = useChatWoot()
const onLetsTalkClick = () => {
  chatwoot.toggle('open')
}

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

.workflow
  padding-top: 120px
  padding-bottom: 120px
  background: rgba(212, 255, 232, 0.4)
  .title
    font-weight: 600
    font-size: 54px
    line-height: 60px
    margin-bottom: 100px
</style>
