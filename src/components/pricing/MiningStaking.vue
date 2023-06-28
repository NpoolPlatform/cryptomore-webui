<template>
  <div class='text-primary'>
    <div class='content-width horizontal-center'>
      <div class='row plan '>
        <div class='detail'>
          <div class='row info'>
            <q-icon name='check' color='secondary' size='20px' class='icon' />
            <div class='text color-main-transparent-80'>
              Global data center available at any time over the world
            </div>
          </div>
          <div class='row info'>
            <q-icon name='check' color='secondary' size='20px' class='icon' />
            <div class='text color-main-transparent-80'>
              7x24 hours online and data center field support
            </div>
          </div>
          <div class='row info'>
            <q-icon name='check' color='secondary' size='20px' class='icon' />
            <div class='text color-main-transparent-80'>
              Team with more than 10 years experience of Mining/Staking
            </div>
          </div>
          <div class='row info'>
            <q-icon name='check' color='secondary' size='20px' class='icon' />
            <div class='text color-main-transparent-80'>
              Diversity of collaboration with different users of different background
            </div>
          </div>
          <div class='row info'>
            <q-icon name='check' color='secondary' size='20px' class='icon' />
            <div class='text color-main-transparent-80'>
              Optimization and solution of supported blockchains from scratch
            </div>
          </div>
          <div class='row info'>
            <q-icon name='check' color='secondary' size='20px' class='icon' />
            <div class='text color-main-transparent-80'>
              Tailered One-Stop solution for different requirements
            </div>
          </div>
          <div class='row info'>
            <q-icon name='check' color='secondary' size='20px' class='icon' />
            <div class='text color-main-transparent-80'>
              Fast support of First Batch Mining with solution and resources
            </div>
          </div>
        </div>
        <div class='price'>
          <div class='vertical-center' :style='{height: "100%"}'>
            <div class='text-center'>
              <div class='amount'>
                By Specified Solution
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
    <div class='bg-primary section-start-margin first-batch'>
      <div class='content-width horizontal-center row'>
        <div class='title'>
          Coming First Batch Mining
        </div>
        <div class='project cursor-pointer' @click='router.push({ path: "/aleo" })'>
          <q-img :src='aleoWithBg' />
          <div class='text'>
            <div class='row'>
              <div class='label'>
                Incentive Testnet:
              </div>
              <q-space />
              <div class='text-secondary'>
                2022/9/31 - 2022/12/31
              </div>
            </div>
            <div class='row'>
              <div class='label'>
                Mainnet:
              </div>
              <q-space />
              <div class='text-secondary'>
                2023/7 (Planned Time)
              </div>
            </div>
            <div class='row'>
              <div class='label'>
                Performance:
              </div>
              <q-space />
              <div class='text-secondary'>
                10000 C/s, Single 3080
              </div>
            </div>
          </div>
        </div>
        <div class='project cursor-pointer' @click='router.push({ path: "/linera" })'>
          <q-img :src='lineraWithBg' />
          <div class='text'>
            <div class='row'>
              <div class='label'>
                Progress:
              </div>
              <q-space />
              <div class='text-secondary'>
                Very Early (Rust SDK Development)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='ready-deploy'>
      <div class='content-width horizontal-center'>
        <div class='title'>
          Ready to Deploy Mining/Staking Infrastructure
        </div>
        <div class='row'>
          <div class='project cursor-pointer' @click='router.push({ path: "/aptos" })'>
            <q-img :src='aptosWithBg' />
            <div class='text'>
              <div class='row'>
                <div class='color-main-transparent-60'>
                  Fee:
                </div>
                <q-space />
                <div class='text-primary'>
                  12%
                </div>
              </div>
              <div class='row'>
                <div class='color-main-transparent-60'>
                  Validator Minimum Staking:
                </div>
                <q-space />
                <div class='text-primary'>
                  1,000,000 APT
                </div>
              </div>
              <div class='row'>
                <div class='color-main-transparent-60'>
                  User Minimum Staking:
                </div>
                <q-space />
                <div class='text-primary'>
                  200 APT
                </div>
              </div>
              <div class='row'>
                <div class='color-main-transparent-60'>
                  <a :style='{fontSize: "14px"}' href='#/nodes'>Check our APTOS Validator</a>
                </div>
              </div>
            </div>
          </div>
          <q-space />
          <div class='project cursor-pointer' @click='router.push({ path: "/filecoin" })'>
            <q-img :src='filecoinWithBg' />
            <div class='text'>
              <div class='row'>
                <div class='color-main-transparent-60'>
                  Fee:
                </div>
                <q-space />
                <div class='text-primary'>
                  20%
                </div>
              </div>
              <div class='row'>
                <div class='color-main-transparent-60'>
                  Minimum Staking:
                </div>
                <q-space />
                <div class='text-primary'>
                  20 FIL
                </div>
              </div>
              <div class='row'>
                <div class='color-main-transparent-60'>
                  <a :style='{fontSize: "14px"}' href='#/nodes'>Check our Filecoin Storage Provider Nodes</a>
                </div>
              </div>
              <div v-if='false' class='row'>
                <div class='color-main-transparent-60'>
                  <a :style='{fontSize: "14px"}' href='#'>Check our Filecoin Storage Provider Contracts</a>
                </div>
              </div>
            </div>
          </div>
          <q-space />
          <div class='project cursor-pointer' @click='router.push({ path: "/ironfish" })'>
            <q-img :src='ironfishWithBg' />
            <div class='text'>
              <div class='row'>
                <div class='color-main-transparent-60'>
                  Incentive Testnet:
                </div>
                <q-space />
                <div class='text-primary'>
                  2021/04/08 - 2023/02/18
                </div>
              </div>
              <div class='row'>
                <div class='color-main-transparent-60'>
                  Mainnet:
                </div>
                <q-space />
                <div class='text-primary'>
                  2023-04-20
                </div>
              </div>
              <div class='row'>
                <div class='color-main-transparent-60'>
                  Performance:
                </div>
                <q-space />
                <div class='text-primary'>
                  15 GH/s, Single 3080
                </div>
              </div>
              <div class='row'>
                <div class='color-main-transparent-60'>
                  <a :style='{fontSize: "14px"}' href='javascript:void(0)' @click='onLetsTalkClick'>Contact Crypto More for IronFish Business</a>
                </div>
              </div>
            </div>
          </div>
          <q-space />
          <div class='project cursor-pointer'>
            <q-img :src='chiaWithBg' />
            <div class='text'>
              <div class='row'>
                <div class='color-main-transparent-60'>
                  Mainnet:
                </div>
                <q-space />
                <div class='text-primary'>
                  2022/9/31 - 2022/12/31
                </div>
              </div>
              <div class='row'>
                <div class='color-main-transparent-60'>
                  <a :style='{fontSize: "14px"}' href='javascript:void(0)' @click='onLetsTalkClick'>Contact Crypto More for Chia Business</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='faqs'>
      <div class='content-width horizontal-center row'>
        <div class='title'>
          {{ $t('MSG_FREQUENTLY_ASKED_QUESTIONS') }}
        </div>
        <div class='faq-content'>
          <div class='row'>
            <q-icon :name='faqTitle === "What is Mining ?" ? "expand_more" : "chevron_right"' size='32px' />
            <div class='faq-text'>
              <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "What is Mining ?"'>
                What is Mining ?
              </div>
              <q-slide-transition>
                <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "What is Mining ?"'>
                  Modern blockchain infrastructure normally needs digital power to be its low-level capacity to support different applications of the blockchain. We call the computing process of the blockchain which is executed by those low-level hardware as mining. Mining is the way that low-level hardware takes part in blockchain activities.
                </div>
              </q-slide-transition>
            </div>
          </div>
          <div class='row'>
            <q-icon :name='faqTitle === "What is Staking ?" ? "expand_more" : "chevron_right"' size='32px' />
            <div class='faq-text'>
              <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "What is Staking ?"'>
                What is Staking ?
              </div>
              <q-slide-transition>
                <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "What is Staking ?"'>
                  Besides the digital power, some blockchains implement consensus with token power, in which the mining process is executed with both capacities of low-level hardware and a token amount of the mining accounts. We call the mining process of such blockchain staking.
                </div>
              </q-slide-transition>
            </div>
          </div>
          <div class='row'>
            <q-icon :name='faqTitle === "What is First Batch Mining ?" ? "expand_more" : "chevron_right"' size='32px' />
            <div class='faq-text'>
              <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "What is First Batch Mining ?"'>
                What is First Batch Mining ?
              </div>
              <q-slide-transition>
                <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "What is First Batch Mining ?"'>
                  Blockchain issues token as its currency inside the blockchain ecosystem. Normally the token is unlocked with time flying. If the token is valuable, more and more digital power will be invested for mining/staking. That means with time flying, unit digital power will produce fewer tokens. First Batch Mining means taking part in mining/staking at the beginning of the blockchain's main net. At that time, unit digital power will produce an incredibly high amount of tokens due to less mining digital power.
                </div>
              </q-slide-transition>
            </div>
          </div>
          <div class='row'>
            <q-icon :name='faqTitle === "How to Use Crypto More&lsquo;s Mining/Staking Infrastructure?" ? "expand_more" : "chevron_right"' size='32px' />
            <div class='faq-text'>
              <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "How to Use Crypto More&lsquo;s Mining/Staking Infrastructure?"'>
                How to Use Crypto More's Mining/Staking Infrastructure?
              </div>
              <q-slide-transition>
                <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "How to Use Crypto More&lsquo;s Mining/Staking Infrastructure?"'>
                  Crypto More provides optimized mining/staking solutions for a variety of blockchains. Users can download Crypto More's mining application for themselves, or they can contact Crypto More to get a turn-key mining/staking solution.
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
import { useRouter } from 'vue-router'

import aleoWithBg from 'src/assets/AleoWithBg.png'
import lineraWithBg from 'src/assets/LineraWithBg.png'
import aptosWithBg from 'src/assets/AptosWithBg.png'
import filecoinWithBg from 'src/assets/FilecoinWithBg.png'
import ironfishWithBg from 'src/assets/IronFishWithBg.png'
import chiaWithBg from 'src/assets/ChiaWithBg.png'

const faqTitle = ref('What is Mining ?')
const router = useRouter()

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
    padding: 87px 40px
    width: 512px
    background: linear-gradient(180deg, rgba(86, 240, 159, 0.6) 0%, rgba(61, 187, 119, 0) 100%)
    border-radius: 0 16px 16px 0
    align-items: center
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
    width: calc(100% - 512px)
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

.first-batch
  padding-top: 120px
  padding-bottom: 120px
  color: #FEFBED
  .title
    font-weight: 600
    font-size: 54px
    line-height: 60px
    width: 290px
    margin-right: 52px
  .project
    margin-right: 24px
    border: 1px solid $secondary
    border-radius: 16px
    width: 400px
    height: 350px
    .text
      padding: 18px
      .row
        margin-bottom: 8px
        font-size: 16px
        line-height: 26px
        .label
          color: rgba(254, 251, 237, 0.6)

.ready-deploy
  background: rgba(212, 255, 232, 0.4)
  padding-top: 120px
  padding-bottom: 120px
  .title
    font-weight: 600
    font-size: 54px
    line-height: 60px
    margin-bottom: 100px
  .project
    margin-right: 24px
    margin-right: 24px
    border: 1px solid $secondary
    border-radius: 16px
    width: 400px
    max-height: 400px
    margin-bottom: 24px
    .text
      padding: 18px
      .row
        margin-bottom: 8px
        font-size: 16px
        line-height: 26px
</style>
