<template>
  <HeadBackground />
  <Header :parent='$t("MSG_FIRST_BATCH_MINING")' current='Ironfish' />
  <div class='content-width banner horizontal-center text-center'>
    <div class='text'>
      Ironfish: Private, anonymous, and easy-to-use cryptocurrency
    </div>
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "40px"}'>
    <q-img width='36px' height='36px' src='~assets/Ironfish.svg' :style='{marginRight: "12px"}' />
    <div :style='{fontWeight: 600, fontSize: "36px", lineHeight: "40px", color: "#DF77F3"}'>
      Ironfish
    </div>
  </div>
  <div
    class='content-width horizontal-center'
    :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "rgba(10, 11, 26, 0.8)", marginTop: "24px"}'
  >
    Iron Fish encrypts every transaction, shielding your sensitive asset information from public view. With read-only view keys, you remain compliant and in control.
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "24px"}'>
    <div>
      <div class='funding text-center'>
        <div class='inner'>
          <table>
            <tbody>
              <tr>
                <td rowspan='3'>
                  Funding History
                </td>
              </tr>
              <tr>
                <td>Seed</td>
                <td>$ 5.3M</td>
                <td>2021-04-06</td>
              </tr>
              <tr>
                <td>Angel</td>
                <td>$ 27.6M</td>
                <td>2022-11-30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px"}'>
          <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
            Testnet 1:
          </div>
          <div class='col-2' :style='{color: "#DF77F3"}'>
            2021-04-08
          </div>
        </div>
        <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
          <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
            Incentivized Testnet Phase 1:
          </div>
          <div class='col-2' :style='{color: "#DF77F3"}'>
            2021-12-01
          </div>
          <div class='col-3' :style='{color: "#DF77F3"}'>
            525,000 IRON
          </div>
        </div>
        <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
          <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
            Incentivized Testnet Phase 2:
          </div>
          <div class='col-2' :style='{color: "#DF77F3"}'>
            2022-05-10
          </div>
          <div class='col-3' :style='{color: "#DF77F3"}'>
            315,000 IRON
          </div>
        </div>
        <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
          <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
            Incentivized Testnet Phase 3:
          </div>
          <div class='col-2' :style='{color: "#DF77F3"}'>
            2023-01-18
          </div>
          <div class='col-3' :style='{color: "#DF77F3"}'>
            315,000 IRON
          </div>
        </div>
        <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
          <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
            Mainnet:
          </div>
          <div class='col-2' :style='{color: "#DF77F3"}'>
            2023-04-20
          </div>
        </div>
      </div>
    </div>
    <div class='funding text-center'>
      <div class='inner performance'>
        <table>
          <tbody>
            <tr>
              <td :style='{borderBottom: "1px solid #EAEAEA"}'>
                GPU Type
              </td>
              <td>3080</td>
              <td>3080 Ti</td>
              <td>3090</td>
              <td :style='{borderBottom: "1px solid #EAEAEA"}'>
                4090
              </td>
            </tr>
            <tr>
              <td :style='{color: "rgba(10, 11, 26, 0.8)"}'>
                Performance
              </td>
              <td>16G H/s</td>
              <td>16G H/s</td>
              <td>16G H/s</td>
              <td>16G H/s</td>
            </tr>
          </tbody>
        </table>
        <q-btn
          flat
          class='btn btn-medium contact-btn'
          :label='$t("MSG_DOWNLOAD_OPTIMIZED_EXECUTION")'
          no-caps
          :icon-right='"img:" + arrowUpRight'
        />
      </div>
    </div>
  </div>
  <div class='investor section content-width horizontal-center'>
    <div class='row'>
      <div class='icon'>
        <LabelIcon color='rgba(55, 145, 247, 0.4)' />
      </div>
      <div class='label'>
        Ironfish backed by
      </div>
    </div>
    <div class='row logos'>
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Oleary.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Circle.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/MetaStable.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/RoderikvanderGraaf.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/ElectricCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/BinanceLabs.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/AndreessenHorowitz.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/ACapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/CoinbaseDark.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Sequoia.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/SamsungNext.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Matic.png' />
    </div>
  </div>
  <div class='section team' :style='{background: "rgba(212, 255, 232, 0.4)"}'>
    <div class='content-width horizontal-center'>
      <div class='row'>
        <div class='icon'>
          <LabelIcon color='rgba(55, 145, 247, 0.4)' />
        </div>
        <div class='label'>
          Elena Nadolinski
        </div>
      </div>
      <div class='text' :style='{marginTop: "36px"}'>
        <p>Nadolinski grew up in Volgograd, Russia. She attended Virginia Tech from 2011 to 2014 and graduated with a bachelor of science in computer science.</p>
        <p>Nadolinski held several internships as a software developer throughout her college years, mainly with Microsoft but also with Rackspace Hosting and Heyo. Eventually, in 2015, she became a software engineer at Microsoft, where she stayed for one year. There she worked on a feature for Cortana, Microsoft's virtual assistant on the Windows 10 operating system. Following that, she worked at Tilt.com until February 2017, when the company was acquired by Airbnb, at which point she began working as a software engineer for Airbnb. She was a back-end engineer responsible for building the company website's autocomplete search service. She worked there until June 2018.</p>
        <p>In 2019, Nadolinski founded Beanstalk Network, a crypto company later launched as Iron Fish. Iron Fish is a cryptocurrency designed for privacy needs. It uses zk-SNARKs and the Sapling protocol to protect each transaction. On April 6, 2021, Iron Fish entered its first public testnet phase, enabling anyone to mine Iron Fish nodes.Nadolinski was featured on Forbes's 30 Under 30 - Finance 2022 list. Nadolinski has an interest in cryptocurrency. She attended her first ETHGlobal hackathon in 2017. Besides coding, Nadolinski enjoys creating jewelry out of salvaged electronics, which she sells at women-in-tech events and in her Etsy store.</p>
      </div>
    </div>
  </div>
  <div class='section row content-width horizontal-center'>
    <div class='row'>
      <div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
            </div>
            <div class='label'>
              Introduction
            </div>
          </div>
          <div class='text'>
            <p>Iron Fish is a decentralized, proof-of-work (PoW) based, censorship-resistant, and publicly accessible blockchain project. It is designed to support strong privacy guarantees on every transaction. Similar to how the invention of the SSL/TLS layer in the '90s paved the way to e-commerce and benefited countless industries. Iron Fish is designed to be a new cryptocurrency from the ground up to enable easy-to-use, fully-private payments by closely following the Sapling protocol. Every account is equipped with a view key to grant its holder read-only permission for the details of that account.</p>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(46, 216, 167, 0.4)' />
            </div>
            <div class='label'>
              Exchange Listing
            </div>
          </div>
          <div class='row logos'>
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Bitmart.png' />
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Gateio.png' />
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Kucoin.png' />
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Hotbit.png' />
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/XTCom.png' />
            <q-btn
              flat
              class='btn btn-view-more'
              :icon-right='"img:" + arrowUpRight'
              size='1rem'
              no-caps
              label='View More'
              @click='onViewMoreClick'
            />
          </div>
        </div>
        <div v-if='false' class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
            </div>
            <div class='label'>
              Price
            </div>
          </div>
          <div class='row logos'>
            TODO:
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
            </div>
            <div class='label'>
              Performance
            </div>
          </div>
          <div class='text'>
            <table>
              <tbody>
                <tr>
                  <th>GPU Type</th>
                  <th>CPU Type</th>
                  <th>Ram Size</th>
                  <th>Barebone</th>
                  <th>GH/s</th>
                </tr>
                <tr>
                  <td>Single NVIDIA GeForce RTX 2080 Ti</td>
                  <td>AMD EPYC 7302 16-Core</td>
                  <td>16GiB</td>
                  <td>Sugon 65N32-US</td>
                  <td>16G</td>
                </tr>
                <tr>
                  <td>Single NVIDIA GeForce RTX 3080 Ti</td>
                  <td>AMD EPYC 7302 16-Core</td>
                  <td>16GiB</td>
                  <td>Sugon 65N32-US</td>
                  <td>16G</td>
                </tr>
                <tr>
                  <td>Single NVIDIA GeForce RTX 3080</td>
                  <td>AMD EPYC 7302 16-Core</td>
                  <td>16GiB</td>
                  <td>Sugon 65N32-US</td>
                  <td>16G</td>
                </tr>
                <tr>
                  <td>Single NVIDIA GeForce RTX 3090</td>
                  <td>AMD EPYC 7302 16-Core</td>
                  <td>16GiB</td>
                  <td>Sugon 65N32-US</td>
                  <td>16G</td>
                </tr>
                <tr>
                  <td>Single NVIDIA GeForce RTX 4090</td>
                  <td>AMD EPYC 7302 16-Core</td>
                  <td>16GiB</td>
                  <td>Sugon 65N32-US</td>
                  <td>16G</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
            </div>
            <div class='label'>
              Token Economics
            </div>
          </div>
          <div class='text'>
            <p>The mining reward (how many coins a miner is allocated for successfully mining a block) is tied to the Iron Fish emissions curve. The emissions curve starts out with 42M coins in the genesis. After the first year, the total for new coins created due to mining rewards is 1/4th of the genesis, or 10.5M coins. Every subsequent year fewer and fewer coins will be created until a terminal supply of 256,970,400 coins is reached (roughly at year 115 post -genesis).</p>
            <div class='row'>
              <q-img width='50%' src='~assets/IronfishTotalSupply.png' />
              <q-img width='50%' src='~assets/IronfishInflation.png' />
            </div>
            <q-img src='~assets/IronfishTerminalSupply.png' />
            <q-img src='~assets/IronfishCirculatingSupply.png' />
            <q-img src='~assets/IronfishGenesisBlock.png' />
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
            </div>
            <div class='label'>
              Disclaimer
            </div>
            <div class='text'>
              <p>We organize the above data from Iron-Fish officially published content, and we rewrite some of the content based on our cognition and knowledge. We can confirm all of the above data and the original materials from which we get the data are from reliable media channel. But we also would like to remind our users that we do not give any investment suggestions based on the above data. Investment risk in the Iron Fish project, including mining, staking, or buying tokens is out of our control.</p>
            </div>
          </div>
        </div>
      </div>
      <div class='scale-hide links'>
        <div class='row'>
          <div class='icon'>
            <LabelIcon color='rgba(55, 145, 247, 0.4)' />
          </div>
          <div class='label'>
            Links
          </div>
        </div>
        <div class='inner'>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://ironfish.network/learn/whitepaper'>Whitepaper</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://ironfish.network/learn/tokenomics'>Token Economics</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/InternetDark.svg' />
            <a href='https://ironfish.network'>Official Website</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/TwitterDark.svg' />
            <a href='https://twitter.com/ironfishcrypto'>Twitter</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/DiscordDark.svg' />
            <a href='https://discord.ironfish.network'>Discord</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

import arrowUpRight from 'src/assets/ArrowUpRightLargeMargin.svg'

const Header = defineAsyncComponent(() => import('src/components/product/Header.vue'))
const HeadBackground = defineAsyncComponent(() => import('src/components/common/HeadBackground.vue'))
const LabelIcon = defineAsyncComponent(() => import('src/components/product/LabelIcon.vue'))

const onViewMoreClick = () => {
  window.open('https://coinmarketcap.com/currencies/iron-fish/')
}

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
  background: linear-gradient(90deg, rgba(223, 119, 243, 0.4) 0%, rgba(223, 119, 243, 0) 100%)
  width: 620px
  padding: 7px
  .col-1
    width: 240px
  .col-2
    width: 120px
  .col-3
    width: 120px
  .col-4
    width: 120px

.funding
  .inner
    border-radius: 8px
    width: 620px
    table
      width: 100%
      background: #FAFAFA
      border: 1px solid #EAEAEA
      border-radius: 8px
      border-spacing: 0
      color: #DF77F3
      font-weight: 600
      font-size: 16px
      line-height: 26px
      margin-bottom: 24px
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
  .performance
    margin-left: 40px

.section
  .icon
    padding: 3px 0
  .label
    font-weight: 600
    font-size: 24px
    line-height: 32px
    color: rgba(10, 11, 26, 0.8)
    margin-left: 12px

.investor
  margin-top: 64px
  .logos
    padding-top: 36px
    padding-bottom: 64px
    flex-shrink: 0
    flex-grow: 1
    .logo
      width: 180px
      height: 64px
      margin-bottom: 28px
      margin-right: 40px
  .logos > div:first-child
    margin-left: 0
  .logos > div:nth-child(6n)
    @media (min-width: 1280px)
      margin-right: 0
  .logos > div:last-child(6n+1)
    @media (min-width: 1280px)
      margin-left: 0

.team
  padding-top: 64px
  padding-bottom: 64px
  .member
    background: url('src/assets/AleoTeamBg.png')
    background-repeat: no-repeat
    background-size: auto
    width: 290px
    min-height: 260px
    padding: 24px
    margin-top: 36px

.proj-main
  width: 840px
  margin-right: 150px
  margin-top: 64px
  margin-bottom: 64px
  @media (max-width: 1280px)
    width: 100%
  .text
    font-weight: 500
    font-size: 16px
    line-height: 26px
    color: rgba(10, 11, 26, 0.8)
    margin-top: 36px
    table
      width: calc(100% - 40px)
      background: #FAFAFA
      border: 1px solid #EAEAEA
      border-radius: 8px
      border-spacing: 0
      font-size: 16px
      line-height: 26px
      margin-bottom: 24px
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
    ul
      padding-inline-start: 16px
    li
      list-style-type: square
      color: #DF77F3
      padding-left: 0
      span
        color: rgba(10, 11, 26, 0.8)
  .logos
    margin-top: 36px
    flex-shrink: 0
    flex-grow: 1
    .logo
      width: 180px
      height: 64px
      margin-bottom: 28px
      margin-right: 40px
    .btn-view-more
      width: 180px
      height: 64px
      background: #F3F3F3
      margin: 0
  .logos > div:first-child
    margin-left: 0
  .logos > div:nth-child(4n)
    @media (min-width: 1280px)
      margin-right: 0
  .logos > div:last-child(4n+1)
    @media (min-width: 1280px)
      margin-left: 0

.links
  margin-top: 64px
  .inner
    margin-top: 36px
    .line
      margin-bottom: 16px
      .icon
        margin-right: 12px
</style>
