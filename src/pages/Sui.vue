<template>
  <HeadBackground />
  <Header :parent='$t("MSG_READY_TO_DEPLOY")' current='Sui' />
  <div class='content-width banner horizontal-center text-center'>
    <div class='text'>
      Sui: Unlock the freedom to build powerful on-chain assets
    </div>
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "40px"}'>
    <q-img width='36px' height='36px' src='~assets/Sui.svg' :style='{marginRight: "12px"}' />
    <div :style='{fontWeight: 600, fontSize: "36px", lineHeight: "40px", color: "#4CA3FF"}'>
      Sui
    </div>
  </div>
  <div
    class='content-width horizontal-center'
    :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "rgba(10, 11, 26, 0.8)", marginTop: "24px"}'
  >
    Sui is an innovative, decentralized Layer 1 blockchain that redefines asset ownership. It is a permissionless layer 1 blockchain designed to be both developer and user-friendly. It can support a wide range of application development with unrivaled speed at a low cost.
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "24px"}'>
    <div class='funding'>
      <div class='inner'>
        <table>
          <tbody>
            <tr>
              <td rowspan='3'>
                Funding History
              </td>
            </tr>
            <tr>
              <td>Series A</td>
              <td>$ 36M</td>
              <td>2021-09-07</td>
              <td />
            </tr>
            <tr>
              <td>Series B</td>
              <td>$ 300M</td>
              <td>2022-09-08</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px"}'>
        <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
          Incentive Wave 1:
        </div>
        <div class='col-2' :style='{color: "#4CA3FF"}'>
          2022-11-16
        </div>
      </div>
      <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
        <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
          Incentive Wave 2:
        </div>
        <div class='col-2' :style='{color: "#4CA3FF"}'>
          2023-01-25
        </div>
      </div>
      <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
        <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
          Permanent Testnet:
        </div>
        <div class='col-2' :style='{color: "#4CA3FF"}'>
          2023-03-29
        </div>
      </div>
      <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
        <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
          Mainnet:
        </div>
        <div class='col-2' :style='{color: "#4CA3FF"}'>
          2023-05-03
        </div>
      </div>
    </div>
  </div>
  <div class='investor section content-width horizontal-center'>
    <div class='row'>
      <div class='icon'>
        <LabelIcon color='rgba(76, 163, 255, 0.4)' />
      </div>
      <div class='label'>
        Aptos backed by
      </div>
    </div>
    <div class='row logos'>
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/BinanceLabs.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/SamsungNext.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Circle.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Oleary.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/FTX.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/CoinbaseDark.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/AndreessenHorowitz.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/ScribbleVentures.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/SlowVentures.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/SuperScript.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Jump.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Luxcapital.png' />
    </div>
  </div>
  <div class='section team' :style='{background: "rgba(212, 255, 232, 0.4)"}'>
    <div class='content-width horizontal-center'>
      <div class='row'>
        <div class='icon'>
          <LabelIcon color='rgba(76, 163, 255, 0.4)' />
        </div>
        <div class='label'>
          Team
        </div>
      </div>
      <div class='row'>
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#4CA3FF"}'
          >
            Evan Cheng
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#4CA3FF", marginTop: "8px"}'
          >
            Co-founder and CEO
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Formerly Engineering Director Calibra, Blockchain at Facebook, supporting Research (crypto, system, PL, verification) and Dev Platform (Move) teams. World's friendliest curmudgeon.</p>
          </div>
        </div>
        <q-space />
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#4CA3FF"}'
          >
            Adeniyi Abiodun
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#4CA3FF", marginTop: "8px"}'
          >
            Co-founder and CPO
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Adeniyi is a product leader with experience spanning from financial services to crypto. Adeniyi has led engineering and product teams across Big Tech companies including Oracle, VMware, and Facebook. Prior to founding Mysten Labs, Adeniyi lead many of Meta's R&D initiatives in blockchain and cryptocurrency, including Diem (aka. Libra) Network and the Move programming language.</p>
          </div>
        </div>
        <q-space />
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#4CA3FF"}'
          >
            Sam Blackshear
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#4CA3FF", marginTop: "8px"}'
          >
            Co-founder and CTO
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Author of the Move compiler, the designer of the Move borrow checker and ability system, and a core contributor that has been working on Move</p>
          </div>
        </div>
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#4CA3FF"}'
          >
            Kostas Chalkias
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#4CA3FF", marginTop: "8px"}'
          >
            Co-founder and Chief Cryptographer
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Ex-Facebook cryptography lead (Libra, Novi, WhatsApp) and previously head of research at R3 (UK) for the Corda</p>
          </div>
        </div>
        <q-space />
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#4CA3FF"}'
          >
            George Danezis
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#4CA3FF", marginTop: "8px"}'
          >
            Co-founder and Chief Scientist
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Computer scientist and Professor of Security and Privacy Engineering at the Department of Computer Science, University College London where he is part of the Information Security Research Group, and a fellow at the Alan Turing Institute. He co-founded Chainspace, a sharded smart contract platform, and was Head of Research before it was acquired by Facebook</p>
          </div>
        </div>
        <q-space />
        <div class='member' :style='{border: "none !important", background: "none !important"}' />
      </div>
    </div>
  </div>
  <div class='section row content-width horizontal-center'>
    <div class='row'>
      <div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(76, 163, 255, 0.4)' />
            </div>
            <div class='label'>
              Introduction
            </div>
          </div>
          <div class='text'>
            <p>Sui is the first permissionless Layer 1 blockchain designed from the ground up to enable creators and developers to build experiences that cater to the next billion users in web3. Sui is horizontally scalable to support a wide range of application development with unrivaled speed at low cost.</p>
            <p>Sui announces that it can scale horizontally with no upper bound to meet application demand while maintaining extremely low operating costs per transaction. It introduces parallel agreements on causally independent transactions. Sui authorities commit such transactions using Byzantine consistent broadcast, eliminating global consensus's overhead without sacrificing safety and liveness guarantees. At the time we were writing those texts, Sui have run their test net successfully and meed quite an amazing performance.</p>
            <p>And technically, Sui implements digital assets with different data models. Unlike traditional blockchain which builds all assets based on an accounts system, Sui builds their digital assets with an object-centric model. We don't know if it would be the key to being successful or not, but the trial of new technology will always be better than just building something mediocre software system with preserved technology.</p>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(76, 163, 255, 0.4)' />
            </div>
            <div class='label'>
              Highlight
            </div>
          </div>
          <div class='text'>
            <ul>
              <li><span>Unmatched scalability, instant settlement</span></li>
              <li><span>A safe smart contract language accessible to mainstream developers</span></li>
              <li><span>Ability to define rich and composable on-chain assets</span></li>
              <li><span>Better user experience for web3 apps</span></li>
            </ul>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(76, 163, 255, 0.4)' />
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
              <LabelIcon color='rgba(76, 163, 255, 0.4)' />
            </div>
            <div class='label'>
              Token Economics
            </div>
          </div>
          <div class='text'>
            <p>The total supply of SUI is capped at 10,000,000,000 (i.e. ten billion tokens). A share of SUI's total supply will be liquid at Mainnet launch, with the remaining tokens vesting over the coming years or distributed as future stake reward subsidies.</p>
            <p>The Sui economy is characterized by three main sets of participants:</p>
            <ul>
              <li><span>Users submit transactions to the Sui platform in order to create, mutate, and transfer digital assets or interact with more sophisticated applications enabled by smart contracts, interoperability, and composability.</span></li>
              <li><span>SUI token holders have the option of staking their tokens to validators and participating in the proof-of-stake mechanism. SUI owners also hold the right to participate in Sui's governance.</span></li>
              <li><span>Validators manage transaction processing and execution on the Sui platform.</span></li>
            </ul>
            <p>The Sui economy has five core components:</p>
            <ul>
              <li><span>The SUI token is the Sui platform's native asset.</span></li>
              <li><span>Gas fees are charged on all network operations and used to reward participants of the proof-of-stake mechanism and prevent spam and denial-of-service attacks.</span></li>
              <li><span>Sui's storage fund is used to shift stake rewards across time and compensate future validators for storage costs of previously stored on-chain data.</span></li>
              <li><span>The proof-of-stake mechanism is used to select, incentivize, and reward honest behavior by Sui Validators and the SUI owners that stake with them.</span></li>
              <li><span>On-chain voting is used for governance and protocol upgrades.</span></li>
            </ul>
            <q-img src='~assets/SuiTokenEconomics.png' />
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(76, 163, 255, 0.4)' />
            </div>
            <div class='label'>
              Disclaimer
            </div>
            <div class='text'>
              <p>We organize above data from Sui officially published content, and we rewrite some of the content based on our cognition and knowledge. We can confirm all of the above data and the original marterials which we get the data are from reliable media channel. But we also would like to remind our users that we do not give any investment suggestion based on above data. Investment risk about  Sui project, including mining, staking or buying token is out of our control.</p>
            </div>
          </div>
        </div>
      </div>
      <div class='scale-hide links'>
        <div class='row'>
          <div class='icon'>
            <LabelIcon color='rgba(76, 163, 255, 0.4)' />
          </div>
          <div class='label'>
            Links
          </div>
        </div>
        <div class='inner'>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/GithubDark.svg' />
            <a href='https://github.com/MystenLabs/sui.git'>Github</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/InternetDark.svg' />
            <a href='https://sui.io'>Official Website</a>
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
  background: linear-gradient(90deg, rgba(76, 163, 255, 0.4) 0%, rgba(76, 163, 255, 0) 100%)
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
      color: #4CA3FF
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
    background: url('src/assets/SuiTeamBg.png')
    background-repeat: no-repeat
    background-size: auto
    width: 400px
    min-height: 300px
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
      color: #4CA3FF
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
