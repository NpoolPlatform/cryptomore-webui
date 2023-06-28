<template>
  <div class='leadership full-width'>
    <div class='workflow'>
      <div class='content-width row caption horizontal-center'>
        <q-img class='banner scale-hide' :src='banner' />
        <div class='text'>
          <div class='title' v-html='$t("MSG_LEADERSHIP_TITLE")' />
          <div class='subtitle' v-html='$t("MSG_LEADERSHIP_SUBTITLE")' />
        </div>
      </div>
      <div class='content-width row flow-chart horizontal-center'>
        <div class='flow-chart-item'>
          <q-img :src='requirement' width='60px' height='60px' />
          <div class='name'>
            {{ $t('MSG_REQUIREMENT') }}
          </div>
        </div>
        <div class='separator' />
        <div class='flow-chart-item'>
          <q-img :src='solution' width='60px' height='60px' />
          <div class='name'>
            {{ $t('MSG_SOLUTION') }}
          </div>
        </div>
        <div class='separator' />
        <div class='flow-chart-item'>
          <q-img :src='purchase' width='60px' height='60px' />
          <div class='name'>
            {{ $t('MSG_PURCHASE') }}
          </div>
        </div>
        <div class='separator' />
        <div class='flow-chart-item'>
          <q-img :src='logistics' width='60px' height='60px' />
          <div class='name'>
            {{ $t('MSG_LOGISTICS') }}
          </div>
        </div>
        <div class='separator' />
        <div class='flow-chart-item'>
          <q-img :src='deployment' width='60px' height='60px' />
          <div class='name'>
            {{ $t('MSG_DEPLOYMENT') }}
          </div>
        </div>
        <div class='separator' />
        <div class='flow-chart-item'>
          <q-img :src='reward' width='60px' height='60px' />
          <div class='name'>
            {{ $t('MSG_REWARD') }}
          </div>
        </div>
      </div>
    </div>
    <div class='description'>
      <div class='row content-width horizontal-center'>
        <div class='left'>
          {{ $t('MSG_LEADERSHIP_DESCRIPTION') }}
        </div>
        <div class='btns'>
          <q-btn
            flat
            class='btn btn-main btn-medium contact-btn'
            :label='$t("MSG_BUSINESS_CONTACT")'
            no-caps
            :icon-right='"img:" + arrowUpRight'
            @click='onBusinessContactClick'
          />
          <q-btn
            flat
            class='btn btn-alt btn-medium contact-btn'
            :label='$t("MSG_VIEW_MORE")'
            no-caps
            @click='onViewMoreClick'
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { useChatWoot } from '@productdevbook/chatwoot/vue'

import banner from 'src/assets/LeadershipBanner.png'
import requirement from 'src/assets/Requirement.svg'
import solution from 'src/assets/Solution.svg'
import purchase from 'src/assets/Purchase.svg'
import logistics from 'src/assets/Logistics.svg'
import deployment from 'src/assets/Deployment.svg'
import reward from 'src/assets/Reward.svg'
import arrowUpRight from 'src/assets/ArrowUpRightLargeMargin.svg'

const router = useRouter()

const chatwoot = useChatWoot()
const onBusinessContactClick = () => {
  chatwoot.toggle('open')
}

const onViewMoreClick = () => {
  void router.push({ path: '/pricing' })
}

</script>

<style lang='sass' scoped>
.leadership .workflow
  background: $primary
  background-size: contain
  background-repeat: no-repeat
  min-height: 777px
  padding-bottom: 136px
  padding-top: 136px
  @media (max-width: 1440px)
    min-height: 0

.leadership .workflow .caption
  @media (max-width: 1280px)
    margin-left: 6px

.leadership .workflow .caption .banner
  width: 476px
  height: 302px

.leadership .workflow .caption .text
  max-width: 690px
  margin-left: 114px
  margin-top: 16px
  @media (max-width: 1280px)
    margin-left: 6px
    margin-right: 6px
    max-width: 100%

.leadership .workflow .caption .text .title
  font-size: 54px
  line-height: 60px
  font-weight: 600
  color: #FEFBED

.leadership .workflow .caption .text .subtitle
  font-size: 16px
  line-height: 26px
  font-weight: 500
  margin-top: 36px
  color: #FEFBED

.leadership .workflow .flow-chart
  margin-top: 84px

.leadership .workflow .flow-chart .flow-chart-item
  text-align: center
  width: 111px

.leadership .workflow .flow-chart .flow-chart-item .name
  color: #D4FFE8
  font-size: 18px
  font-weight: 400
  margin-top: 8px

.leadership .workflow .flow-chart .separator
  border-bottom: 1px dashed #FEFBED
  width: calc((100% - 666px) / 5)
  height: 1px
  margin-top: 30px

.leadership .description
  background: rgba(212, 255, 232, 0.4)
  min-height: 368px
  width: 100%
  color: $primary
  padding-top: 120px

.leadership .description .left
  width: calc(100% - 261px - 80px)
  @media (max-width: 1160px)
    width: 100%

.leadership .description .btns
  margin-left: 80px
  width: 261px
  @media (max-width: 1160px)
    margin-left: 0
    margin-top: 36px
    width: 100%

.leadership .description .btns .contact-btn
  width: 261px
  margin-bottom: 24px
  @media (max-width: 1160px)
    width: 100%
</style>
