<template>
  <HeadBackground />
  <Header :parent='$t("MSG_READY_TO_DEPLOY")' current='Filecoin' />
  <div class='content-width banner horizontal-center text-center'>
    <div class='text'>
      Filecoin:  Turns cloud storage into an algorithmic market
    </div>
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "40px"}'>
    <q-img width='36px' height='36px' :src='filecoinIcon' :style='{marginRight: "12px"}' />
    <div :style='{fontWeight: 600, fontSize: "36px", lineHeight: "40px", color: "#3791F7"}'>
      Filecoin
    </div>
  </div>
  <div
    class='content-width horizontal-center'
    :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "rgba(10, 11, 26, 0.8)", marginTop: "24px"}'
  >
    Filecoin is a decentralized storage network designed to store humanity's most important information.
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "24px"}'>
    <div>
      <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px"}'>
        <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
          Alphanet:
        </div>
        <div class='col-2' :style='{color: "#3791F7"}'>
          2019-09-25
        </div>
      </div>
      <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
        <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
          Testnet:
        </div>
        <div class='col-2' :style='{color: "#3791F7"}'>
          2019-12-12
        </div>
        <div class='col-3' />
        <div class='col-4' :style='{color: "#3791F7"}'>
          10+ PiB
        </div>
      </div>
      <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
        <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
          Space Race:
        </div>
        <div class='col-2' :style='{color: "#3791F7"}'>
          2020-08-24
        </div>
        <div class='col-3' :style='{color: "#3791F7"}'>
          4M FIL
        </div>
        <div class='col-4' :style='{color: "#3791F7"}'>
          100+ PiB
        </div>
      </div>
      <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
        <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
          Mainnet:
        </div>
        <div class='col-2' :style='{color: "#3791F7"}'>
          2020-12-15
        </div>
        <div class='col-3' :style='{color: "#3791F7"}'>
          2B FIL
        </div>
        <div class='col-4' :style='{color: "#3791F7"}'>
          18.8 EiB
        </div>
      </div>
    </div>
    <div class='funding text-center'>
      <div class='inner'>
        <table>
          <tbody>
            <tr>
              <td rowspan='5'>
                Funding History
              </td>
            </tr>
            <tr>
              <td>Seed</td>
              <td>$ 120K</td>
              <td>2014-07-16</td>
            </tr>
            <tr>
              <td>Seed</td>
              <td>$ 300K</td>
              <td>2017-08-08</td>
            </tr>
            <tr>
              <td>Seed</td>
              <td>$ 52M</td>
              <td>2017-08-10</td>
            </tr>
            <tr>
              <td>Seed</td>
              <td>$ 205.8M</td>
              <td>2017-09-07</td>
            </tr>
          </tbody>
        </table>
      </div>
      <q-btn
        flat
        class='btn btn-medium contact-btn'
        :label='$t("MSG_CONTACT_CRYPTO_MORE_FILECOIN")'
        no-caps
        :icon-right='"img:" + arrowUpRight'
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

import filecoinIcon from 'src/assets/Filecoin.svg'
import arrowUpRight from 'src/assets/ArrowUpRightLargeMargin.svg'

const Header = defineAsyncComponent(() => import('src/components/product/Header.vue'))
const HeadBackground = defineAsyncComponent(() => import('src/components/common/HeadBackground.vue'))

</script>

<style lang='sass' scoped>
.banner
  background: url('src/assets/FilecoinBannerBg.png')
  background-size: cover
  backdrop-filter: blur(5px)
  border-radius: 16px
  color: #FFFFFF
  .text
    padding-top: 98px
    padding-bottom: 98px
    line-height: 60px
    font-weight: 600
    font-size: 54px

.schedule
  background: linear-gradient(90deg, rgba(55, 145, 247, 0.4) 0%, rgba(0, 192, 249, 0) 100%)
  width: 620px
  padding: 7px
  .col-1
    width: 120px
  .col-2
    width: 120px
  .col-3
    width: 120px
  .col-4
    width: 120px

.funding
  width: calc(100% - 620px)
  .inner
    border-radius: 8px
    table
      width: calc(100% - 40px)
      background: #FAFAFA
      border: 1px solid #EAEAEA
      border-radius: 8px
      border-spacing: 0
      color: #3791F7
      font-weight: 600
      font-size: 16px
      line-height: 26px
      margin-bottom: 24px
      margin-left: 40px
    th, td
      text-align: left
      padding: 8px
      border-bottom: 1px solid #EAEAEA
    tr:first-child td:first-child
      border-top-left-radius: 8px
      color: rgba(10, 11, 26, 0.8)
      border-bottom: none
    tr:last-child td:first-child
      border-bottom-left-radius: 8px
      border-bottom: none
    tr:first-child td:last-child
      border-top-right-radius: 8px
      border-bottom: none
    tr:last-child td:last-child
      border-bottom-right-radius: 8px
      border-bottom: none

  .contact-btn
    color: rgba(10, 11, 26, 0.8)
    font-weight: 500
    font-size: 16px
    line-height: 26px
    background: #EAEAEA
</style>
