<template>
  <div class='banner'>
    <div class='content-width horizontal-center '>
      <div class='row'>
        <div class='left'>
          <div class='slogan'>
            {{ $t('MSG_BANNER_SLOGAN') }}
          </div>
          <div class='subtitle color-main-transparent-80'>
            {{ $t('MSG_BANNER_SUBTITLE') }}
          </div>
          <q-btn
            flat
            class='btn btn-main btn-large commit-btn'
            :label='$t("MSG_FREE_TRIAL")'
            no-caps
            :icon-right='"img:" + arrowUpRight'
          />
          <div class='row coin-list'>
            <q-img class='icon' :src='bitcoin' />
            <q-img class='icon not-first' :src='ethereum' />
            <q-img class='icon not-first micro-hide' :src='solana' />
            <q-img class='icon not-first atomic-hide' :src='litecoin' />
            <q-img class='icon not-first' :src='filecoin' />
            <q-img class='icon not-first atomic-hide' :src='aptos' />
          </div>
        </div>
        <div class='right scale-hide'>
          <div class='content row'>
            <div class='left'>
              <div class='top'>
                <div v-html='$t("MSG_BANNER_LATEST_BLOCKCHAINS_SUPPORTED")' />
              </div>
              <div class='separator' />
              <div class='bottom'>
                <div v-html='$t("MSG_BANNER_ONE_STOP_APPLICATION_SYSTEM")' />
              </div>
            </div>
            <div class='right'>
              <div class='top'>
                <div class='icon' />
                <div class='color-main-transparent-80 text'>
                  <span v-html='$t("MSG_BANNER_VERIFIED")' />
                </div>
              </div>
              <div class='center'>
                <div class='icon' />
                <div class='color-main-transparent-80 text'>
                  <span v-html='$t("MSG_BANNER_DIRECT_REWARD")' />
                </div>
              </div>
              <div class='bottom'>
                <div class='icon' />
                <div class='color-main-transparent-80 text'>
                  <span v-html='$t("MSG_BANNER_LIVELY_ASSETS")' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import arrowUpRight from 'src/assets/ArrowUpRightLargeMargin.svg'
import bitcoin from 'src/assets/Bitcoin.svg'
import ethereum from 'src/assets/Ethereum.svg'
import solana from 'src/assets/Solana.svg'
import litecoin from 'src/assets/Litecoin.svg'
import filecoin from 'src/assets/Filecoin.svg'
import aptos from 'src/assets/Aptos.svg'
</script>

<style lang='sass' scoped>
.banner
  margin-top: -76px
  background-image: url('src/assets/MainBanner.png')
  background-repeat: no-repeat
  background-size: 100% 660px
  height: 790px
  width: 100%
  color: $primary

.banner .left
  max-width: 630px

.banner .left .slogan
  margin-top: 240px
  max-width: 600px
  font-size: 72px
  font-weight: bold
  line-height: 88px

.banner .left .subtitle
  margin-top: 36px
  font-weight: 500
  font-size: 24px
  font-weight: medium
  line-height: 32px

.banner .left .commit-btn
  margin-top: 36px

.banner .left .coin-list
  margin-top: 44px

.banner .left .coin-list .icon
  width: 36px
  height: 36px

.banner .left .coin-list .not-first
  margin-left: 40px

.banner .right
  margin-left: 18px
  margin-right: -80px

.banner .right .content
  margin-top: 192px
  background: url('src/assets/MainBannerRight.png')
  width: 712px
  height: 598px
  padding: 66px 0 0 76px

.banner .right .content .left
  background: rgba(245, 255, 250, 0.6)
  box-shadow: 4px 4px 20px rgba(0, 71, 55, 0.1)
  border-radius: 8px
  width: 330px
  height: 346px
  padding: 24px

.banner .right .content .left .top
  background: #F3FFF9
  box-shadow: 4px 4px 20px rgba(0, 71, 55, 0.1)
  border-radius: 8px
  height: 154px
  width: 282px
  border: 1px solid transparent
  background: linear-gradient(#F3FFF9, #F3FFF9) padding-box, linear-gradient(180deg, #56F09F 0%, rgba(86, 240, 159, 0) 100%) border-box
  padding: 18px

.banner .right .content .left .bottom
  box-shadow: 4px 4px 20px rgba(0, 71, 55, 0.1)
  border-radius: 8px
  height: 96px
  width: 282px
  border: 1px solid transparent
  background: linear-gradient(rgba(206, 240, 222, 0.6), rgba(206, 240, 222, 0.6)) padding-box, linear-gradient(180deg, #56F09F 0%, rgba(86, 240, 159, 0) 100%) border-box
  padding: 18px

.banner .right .content .left .separator
  margin: 24px 0
  border-bottom: 1px dashed $secondary

.banner .right .content .right
  margin-top: 43px
  margin-left: 24px
  height: 272px
  width: 202px
  font-size: 12px

.banner .right .content .right .top
  background: #F6B740
  box-shadow: 0px 4px 20px 4px rgba(0, 71, 55, 0.1)
  border-radius: 6px
  height: 80px
  width: 100%

.banner .right .content .right .center
  background: #FEFBED
  box-shadow: 0px 4px 20px 4px rgba(0, 71, 55, 0.1)
  border-radius: 6px
  height: 80px
  width: 100%
  margin-top: 24px

.banner .right .content .right .bottom
  background: #84ECA6
  box-shadow: 0px 4px 20px 4px rgba(0, 71, 55, 0.1)
  border-radius: 6px
  height: 80px
  width: 100%
  margin-top: 24px

.banner .right .content .right .top .icon
  position: absolute
  margin-left: 136px
  background: url('src/assets/Verified.svg')
  width: 54px
  height: 67px
  margin-top: 7px

.banner .right .content .right .center .icon
  position: absolute
  margin-left: 136px
  background: url('src/assets/DirectReward.svg')
  width: 54px
  height: 67px
  margin-top: 7px

.banner .right .content .right .bottom .icon
  position: absolute
  margin-left: 136px
  background: url('src/assets/LivelyAssets.svg')
  width: 54px
  height: 67px
  margin-top: 7px

.banner .right .content .right .text
  padding: 16px
</style>
