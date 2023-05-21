<template>
  <HeadBackground />
  <Title class='horizontal-center' :title='$t("MSG_MAKE_WEB3_REAL")' :subtitle='$t("MSG_BANNER_SUBTITLE")' />
  <div class='video horizontal-center'>
    <LiteYoutubeEmbed id='TcMBFSGVi1c' :title='$t("MSG_OFFICIAL_VIDEO_TITLE")' />
  </div>
  <q-banner class='banner'>
    <q-ribbon class='q-pb-md' size='full'>
      <marquee>
        <div class='row banner-area'>
          <span class='banner-text banner-main'>
            {{ $t('MSG_CRYPTO_MORE') }}
          </span>
          <q-space />
          <span class='banner-text banner-alt'>
            {{ $t('MSG_CRYPTO_MORE') }}
          </span>
        </div>
      </marquee>
    </q-ribbon>
  </q-banner>
  <div class='row section-start-margin horizontal-center who-we-are'>
    <div class='content-width horizontal-center'>
      <div class='common-label row color-main-transparent-80'>
        <div :style='{height: "32px", width: "32px", borderRadius: "16px", lineHeight: "32px"}' class='bg-secondary text-center'>
          01
        </div>
        <div :style='{lineHeight: "32px"}' class='text-center label-title'>
          {{ $t('MSG_ABOUT_US') }}
        </div>
      </div>
      <div class='common-content common-content-right'>
        <div :style='{fontSize: "54px", fontWeight: 600, lineHeight: "60px"}' class='text-primary'>
          {{ $t('MSG_WHO_WE_ARE') }}
        </div>
        <div class='color-main-transparent-80' :style='{fontSize: "20px", fontWeight: 500, lineHeight: "30px", marginTop: "24px"}'>
          <p>Crypto More is a Startup founded in 2023, headquartered in Hongkong. We're a leading one-stop solution provider of crypto products including cloud application infrastructure and service which support more than 50 blockchains, mining /staking infrastructure of several layer 1 blockchains, and dedicated enterprise crypto+ solution.</p>
          <p>The company's mission is to close the gap between the real world and blockchain /web3.0. A series of ready-to-use crypto+ services and tools will be released to help more and more people to take part in blockchain / web3.0 activities easily.</p>
        </div>
      </div>
    </div>
  </div>
  <div class='partners section-start-margin'>
    <div class='content-width horizontal-center'>
      <div class='row'>
        <q-space />
        <div class='common-label row color-main-transparent-80'>
          <div :style='{lineHeight: "32px"}' class='text-center label-title'>
            {{ $t('MSG_INVESTOR') }}
          </div>
          <div :style='{height: "32px", width: "32px", borderRadius: "16px", lineHeight: "32px"}' class='bg-secondary text-center'>
            02
          </div>
        </div>
      </div>
      <div class='row' :style='{marginTop: "48px"}'>
        <div class='common-content'>
          <div :style='{fontSize: "54px", fontWeight: 600, lineHeight: "60px"}' class='text-primary'>
            {{ $t('MSG_OUR_INVESTOR') }}
          </div>
          <div class='color-main-transparent-80' :style='{fontSize: "20px", fontWeight: 500, lineHeight: "30px", marginTop: "24px", maxWidth: "620px"}'>
            <p>Hpool is the most powerful mining pool of POC mining in the world. They provide mining solutions for several disk base blockchains including Chia, Filecoin, etc. Moreover, Hpool has helped a series of startup teams to build their crypto business.</p>
          </div>
        </div>
        <q-img class='logo' width='510px' height='310px' :src='hpoolBanner' />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'
import LiteYoutubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

import hpoolBanner from 'src/assets/HpoolBanner.png'

const HeadBackground = defineAsyncComponent(() => import('src/components/common/HeadBackground.vue'))
const Title = defineAsyncComponent(() => import('src/components/common/Title1.vue'))

</script>

<style lang='sass' scoped>
.video
  max-width: 840px

.banner
  border-top: 1px solid #EAEAEA
  border-bottom: 1px solid #EAEAEA
  height: 152px
  width: 100%
  margin-top: 64px
  .banner-area
    flex-wrap: nowrap
    .banner-text
      font-size: 100px
      font-weight: 800
      line-height: 100%
      font-style: italic
      margin-left: 36px
      text-transform: uppercase
    .banner-main
      color: rgba(86, 240, 159, 0.4)
    .banner-alt
      -webkit-text-stroke: 1px rgba(86, 240, 159, 0.4)
      color: transparent

.common-label
  font-size: 14px
  font-weight: 500
  line-height: 24px
  width: 120px
  .label-title
    margin-left: 12px
    margin-right: 12px
.common-content
  max-width: 730px

.common-content-right
    margin-left: 430px
    @media (max-width: 1280px)
      margin-left: 0

.who-we-are
  background: rgba(212, 255, 232, 0.4)
  padding-top: 48px
  padding-bottom: 120px

.partners
  min-height: 550px
  padding-top: 48px
  padding-bottom: 120px
  .logo
    margin-left: 150px
    @media (max-width: 1280px)
      margin-left: 0
</style>
