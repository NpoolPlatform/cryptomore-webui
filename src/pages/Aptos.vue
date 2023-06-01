<template>
  <HeadBackground />
  <Header :parent='$t("MSG_READY_TO_DEPLOY")' current='Aptos' />
  <div class='content-width banner horizontal-center text-center'>
    <div class='text'>
      Aptos: Safe, Scalable, and Upgradeable Web3 Infrastructure
    </div>
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "40px"}'>
    <q-img width='36px' height='36px' src='~assets/Filecoin.svg' :style='{marginRight: "12px"}' />
    <div :style='{fontWeight: 600, fontSize: "36px", lineHeight: "40px", color: "#2ED8A7"}'>
      Aptos
    </div>
  </div>
  <div
    class='content-width horizontal-center'
    :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "rgba(10, 11, 26, 0.8)", marginTop: "24px"}'
  >
    Aptos blockchain is designed with scalability, safety, reliability, and upgradeability as key principles. It offers new and novel innovations in consensus, smart contract design, system security, performance, and decentralization. The combination of these technologies will provide a fundamental building block to bring web3 to the masses
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "24px"}'>
    <div class='funding'>
      <div class='inner'>
        <table>
          <tbody>
            <tr>
              <td rowspan='4'>
                Funding History
              </td>
            </tr>
            <tr>
              <td>Seed</td>
              <td>$ 200M</td>
              <td>2022-03</td>
              <td />
            </tr>
            <tr>
              <td>Series A</td>
              <td>$ 150M</td>
              <td>2022-07</td>
              <td />
            </tr>
            <tr>
              <td>Series B</td>
              <td>Undisclosed</td>
              <td>2022-09</td>
              <td>Binance</td>
            </tr>
          </tbody>
        </table>
      </div>
      <q-btn
        flat
        class='btn btn-medium contact-btn'
        :label='$t("MSG_STAKE_APT_TO_CRYPTO_MORE_VALIDATOR")'
        no-caps
        :icon-right='"img:" + arrowUpRight'
      />
    </div>
    <div>
      <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px"}'>
        <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
          Incentive Testnet 1:
        </div>
        <div class='col-2' :style='{color: "#2ED8A7"}'>
          2022-05-24
        </div>
        <div class='col-3' :style='{color: "#2ED8A7"}'>
          2022-06-09
        </div>
        <div class='col-4' :style='{color: "#2ED8A7"}'>
          100 Validators
        </div>
      </div>
      <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
        <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
          Incentive Testnet 2:
        </div>
        <div class='col-2' :style='{color: "#2ED8A7"}'>
          2022-07-12
        </div>
        <div class='col-3' :style='{color: "#2ED8A7"}'>
          2022-07-22
        </div>
        <div class='col-4' :style='{color: "#2ED8A7"}'>
          200 Validators
        </div>
      </div>
      <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
        <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
          Incentive Testnet 3:
        </div>
        <div class='col-2' :style='{color: "#2ED8A7"}'>
          2022-08-30
        </div>
        <div class='col-3' :style='{color: "#2ED8A7"}'>
          2022-09-09
        </div>
        <div class='col-4' :style='{color: "#2ED8A7"}'>
          225 Validators
        </div>
      </div>
      <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
        <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
          Mainnet:
        </div>
        <div class='col-2' :style='{color: "#2ED8A7"}'>
          2022-10-12
        </div>
      </div>
    </div>
  </div>
  <div class='investor section content-width horizontal-center'>
    <div class='row'>
      <div class='icon'>
        <LabelIcon color='rgba(46, 216, 167, 0.4)' />
      </div>
      <div class='label'>
        Aptos backed by
      </div>
    </div>
    <div class='row logos'>
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/FTX.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/BinanceLabs.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/SamsungNext.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Circle.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Oleary.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/CoinbaseDark.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/AndreessenHorowitz.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/BlockTower.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/AparafiCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/AlamedaResearch.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/MulticoinCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/ScribbleVentures.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/StreamingFast.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/SuperScript.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/TessVentures.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/TigerGlobal.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Varant.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Apollo.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Matic.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Bixin.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/CircleVentures.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Corner.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Dragonfly.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/FranklinTeampleton.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/GriffinGamingPartners.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Hashed.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Haun.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Jump.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Oak.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/PlatinumCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Paxos.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Paypal.png' />
    </div>
  </div>
  <div class='section team' :style='{background: "rgba(212, 255, 232, 0.4)"}'>
    <div class='content-width horizontal-center'>
      <div class='row'>
        <div class='icon'>
          <LabelIcon color='rgba(46, 216, 167, 0.4)' />
        </div>
        <div class='label'>
          Team
        </div>
      </div>
      <div class='row'>
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#2ED8A7"}'
          >
            Mohammad Shaikh
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#2ED8A7", marginTop: "8px"}'
          >
            Co-founder and CEO
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Mo is the CEO and Co-founder of Aptos a blockchain designed for the next billion users. He is a 3x founder with over a decade of multinational financial services and blockchain/crypto experience. In the past, Mo has led blockchain Strategic Partnerships for Novi, Facebook's wallet. As a first-generation immigrant, raised by a taxi driver and housewife on Welfare in Brooklyn, creating an accessible financial system for all is personal to me. Blockchain is essential to this path. Mo was the Founder and CEO of Meridio, a ConsenSys-backed, blockchain-based company that issued the world's first fractional share of real estate. Mo also led ConsenSys strategy as an early employee and founded the ConsenSys' Middle East Office. He has consulted the World Economic Forum on their global blockchain strategy including Central Bank Digital Currency (CBDCs). Prior to Meridio, Mo also consulted Sovereign Wealth Funds, energy, and telecom companies with BC's Private Equity practice.</p>
          </div>
        </div>
        <q-space />
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#2ED8A7"}'
          >
            Avery Ching
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#2ED8A7", marginTop: "8px"}'
          >
            Co-founder and CTO
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Avery spent over a decade leading teams at Meta, most recently as the Tech Lead of the crypto platform which covered projects across general blockchain development and ecosystems, wallet infrastructure, strategy, and most notably the Diem blockchain. Prior to that, Avery was the overall tech lead of all of Meta's batch processing teams including Spark, Graph processing (Apache Giraph), Facebook Hive/Hadoop (Corona), distributed scheduling, and the unified programming model for pipelines. These technologies power analytics for all of Meta's products and scale to hundreds of thousands of machines. Born and raised in Honolulu, Hawaii, Avery studied computer engineering at Northwestern University where he also received his PhD in Computer Engineering specializing in the area of supercomputing, parallel computing frameworks, and high-performance file systems.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class='section row content-width horizontal-center'>
    <div class='row'>
      <div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(46, 216, 167, 0.4)' />
            </div>
            <div class='label'>
              Introduction
            </div>
          </div>
          <div class='text'>
            <p>Aptos started with a technology company Diem. Meta (aka Facebook) was fascinated with the idea of creating a stablecoin Libra. In an effort to lead digital currencies, Meta acquired the Diem blockchain initiative. Things didn't go as planned, and in late 2021, Facebook's blockchain saga came to a halt. Diem was sold to Silvergate Capital for $182 million. After the sale, some employees decide to continue an open-source quest for a blockchain and founded Aptos Labs.</p>
            <p>In December 2021, Aptos arose as a breakaway project that combines passionate leaders and engineers who believe in decentralized blockchain technology. They secured millions from Andreessen Horowitz (a16z) and other Web3-focused VC funds, enough for a successful devnet and a series of testnets. Aptos road to mainnent took less than a year. On October 17 2022, Aptos “Autumn” Mainnet came online. A few days later, the layer 1 project added Names Services, and struck a tentative deal with Google Cloud. The next steps in Aptos's roadmap are (1) attracting new Web3 projects, (2) delivering higher TPS, and (3) making configurations and upgrades.</p>
            <p>Aptos Labs, the team behind the layer 1 project, is not exactly a newcomer in blockchain technology. Aptos Labs’ roster includes former leaders and engineers from Meta's blockchain Diem, Meta's wallet Novi, and Move programming language. The CEO Mo Shaikh has a diverse background in capital markets, accounting, and consulting.</p>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(46, 216, 167, 0.4)' />
            </div>
            <div class='label'>
              Highlight
            </div>
          </div>
          <div class='text'>
            <ul>
              <li><span>Top engineers from Meta (aka Facebook) Libra stablecoin project</span></li>
              <li><span>Inherit technology from Diem, which is the layer-1 blockchain of Libra</span></li>
              <li><span>Creative Move smart contract programming language</span></li>
            </ul>
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
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Binance.png' />
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Huobi.png' />
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Kucoin.png' />
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Okx.png' />
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Kraken.png' />
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Upbit.png' />
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Coinbase.png' />
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/CoinEx.png' />
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Bybit.png' />
            <q-btn
              flat
              class='btn btn-view-more'
              :icon-right='"img:" + arrowUpRight'
              size='1rem'
              no-caps
              label='View More'
            />
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(46, 216, 167, 0.4)' />
            </div>
            <div class='label'>
              Price
            </div>
          </div>
          <div class='row logos'>
            TODO: implemented with backend service
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(46, 216, 167, 0.4)' />
            </div>
            <div class='label'>
              Token Economics
            </div>
          </div>
          <div class='text'>
            <table>
              <tbody>
                <tr>
                  <th>Category</th>
                  <th>% of Initial Token Distribution</th>
                  <th>Initial Tokens</th>
                </tr>
                <tr>
                  <td>Community</td>
                  <td>51.02%</td>
                  <td>510,217,359.767</td>
                </tr>
                <tr>
                  <td>Core Contributors</td>
                  <td />
                  <td>190,000,000.000</td>
                </tr>
                <tr>
                  <td>Foundation</td>
                  <td>16.50%</td>
                  <td>165,000,000.000</td>
                </tr>
                <tr>
                  <td>Investors</td>
                  <td>13.48%</td>
                  <td>134,782,640.233</td>
                </tr>
              </tbody>
            </table>
            <q-img src='~assets/AptosTotalCirculatingSupply.png' />
            <p><strong>*</strong> Anticipated Total Circulating Token Supply for the next 10 years subject to network performance and staking assumptions.</p>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(46, 216, 167, 0.4)' />
            </div>
            <div class='label'>
              Key Technology
            </div>
            <div class='text'>
              <p>From an architectural standpoint, the Aptos chain is a set of validators that receive and process transactions using Byzantine fault tolerance (BFT) and Proof of Stake (PoS). Holders stake tokens in validators. Voting consensus power depends on the stake amount. Validators can be active and inactive. It's noteworthy that Google Cloud runs a validator. Clients can be full nodes or light. Full node clients replicate transactions and blockchain state, while light clients (e.g., wallets) only maintain the current set of validators.</p>
              <p>Aptos is a Move-based L1 Blockchain. Move is a verifiable Rust-based programming language developed by the Diem blockchain initiative and inherited by Aptos chain. As its name implies, Move is very flexible and allows custom transactions and contracts.</p>
              <p>The two key elements in the architecture are Move modules and singer objects. A module (i.e., the script of code on the blockchain) doesn't have storage but can modify resources. Modules can call each other directly without signing transactions. Signer is a resource object created when signing a transaction. Because the Signer object registers resources to an account and verifies user credentials, thus is vital for Aptos chain security.</p>
            </div>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(46, 216, 167, 0.4)' />
            </div>
            <div class='label'>
              Disclaimer
            </div>
            <div class='text'>
              <p>We organize the above data from Aptos' officially published content, and we rewrite some of the content based on our cognition and knowledge. We can confirm all of the above data and the original materials from which we get the data are from reliable media channels. But we also would like to remind our users that we do not give any investment suggestions based on the above data. Investment risk in the Aptos project, including mining, staking, or buying tokens is out of our control.</p>
            </div>
          </div>
        </div>
      </div>
      <div class='scale-hide links'>
        <div class='row'>
          <div class='icon'>
            <LabelIcon color='rgba(46, 216, 167, 0.4)' />
          </div>
          <div class='label'>
            Links
          </div>
        </div>
        <div class='inner'>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://explorer.aptoslabs.com'>Aptos Explorer</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/GithubDark.svg' />
            <a href='https://github.com/aptos-labs/aptos-core.git '>Github</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/InternetDark.svg' />
            <a href='https://aptoslabs.com'>Official Website</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://aptos.dev'>Docs</a>
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

</script>

<style lang='sass' scoped>
.banner
  background: url('src/assets/FilecoinBannerBg.png')
  background-size: cover
  backdrop-filter: blur(5px)
  border-radius: 16px
  color: #FFFFFF
  padding: 0 48px
  .text
    padding-top: 98px
    padding-bottom: 98px
    line-height: 60px
    font-weight: 600
    font-size: 54px

.schedule
  background: linear-gradient(90deg, rgba(46, 216, 167, 0.4) 0%, rgba(46, 216, 167, 0) 100%)
  width: 620px
  padding: 7px
  .col-1
    width: 180px
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
      color: #2ED8A7
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
    background: url('src/assets/AptosCardBg.png')
    background-repeat: no-repeat
    background-size: auto
    width: 620px
    min-height: 410px
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
      color: #2ED8A7
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
