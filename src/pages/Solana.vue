<template>
  <HeadBackground />
  <Header :parent='$t("MSG_READY_TO_DEPLOY")' current='Solana' />
  <div class='content-width banner horizontal-center text-center'>
    <div class='text'>
      Solana: A new architecture for a high performance blockchain
    </div>
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "40px"}'>
    <q-img width='36px' height='36px' src='~assets/Solana.svg' :style='{marginRight: "12px"}' />
    <div :style='{fontWeight: 600, fontSize: "36px", lineHeight: "40px", color: "#A962FF"}'>
      Solana
    </div>
  </div>
  <div
    class='content-width horizontal-center'
    :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "rgba(10, 11, 26, 0.8)", marginTop: "24px"}'
  >
    Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between. Solana is a blockchain built for mass adoption. It's a high-performance network that is utilized for a range of use cases, including finance, NFTs, payments, and gaming. Solana operates as a single global state machine and is open, interoperable,and decentralized.
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "24px"}'>
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
              <td>Serias A</td>
              <td>$ 20M</td>
              <td>2018-09</td>
            </tr>
            <tr>
              <td>ICO</td>
              <td>$ 1.8M</td>
              <td>2020-03-26</td>
            </tr>
            <tr>
              <td>ICO</td>
              <td>$ 40M</td>
              <td>2021-03-25</td>
            </tr>
            <tr>
              <td>ICO</td>
              <td>$ 2314M</td>
              <td>2021-06-09</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px"}'>
        <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
          Mainnet:
        </div>
        <div class='col-2' :style='{color: "#A962FF"}'>
          22020-03-16
        </div>
      </div>
    </div>
  </div>
  <div class='investor section content-width horizontal-center'>
    <div class='row'>
      <div class='icon'>
        <LabelIcon color='rgba(169, 98, 255, 0.4)' />
      </div>
      <div class='label'>
        Solana backed by
      </div>
    </div>
    <div class='row logos'>
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/AlamedaResearch.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/AndreessenHorowitz.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Avoinvest.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/BlockChange.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/BlockTower.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/BlockWall.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Buckstash.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Cashica.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/CMS.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Coind.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/CoinFund.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/CS.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/CollabCurrency.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Crowd.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/DistributedGlobal.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/FoundationCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/GenesisOneCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/JumpTrading.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Kosmos.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/L1Digital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/LYVC.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/MulticoinCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/NGCVentures.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/AparafiCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/PassportCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/PolychainCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/RII.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Seax.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Sino.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/SlowVentures.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/ToKenzCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/500.png' />
    </div>
  </div>
  <div class='section team' :style='{background: "rgba(212, 255, 232, 0.4)"}'>
    <div class='content-width horizontal-center'>
      <div class='row'>
        <div class='icon'>
          <LabelIcon color='rgba(169, 98, 255, 0.4)' />
        </div>
        <div class='label'>
          Team
        </div>
      </div>
      <div class='row'>
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#A962FF"}'
          >
            Anatoly Yakovenko
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#A962FF", marginTop: "8px"}'
          >
            Co-founder
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Led development of operating systems at Qualcomm, distributed systems at Mesosphere, and compression at Dropbox. Holds 2 patents for high-performance Operating Systems protocols. Core kernel developer for BREW which powered every CDMA flip phone (100m+ devices), and led the development of tech that made Project Tango (VR/AR) possible on Qualcomm phones. Anatoly is also a Co-founder of Ethereum Classic and Filecoin.</p>
          </div>
        </div>
        <q-space />
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#A962FF"}'
          >
            Raj Gokal
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#A962FF", marginTop: "8px"}'
          >
            Co-founder
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>The previous director of product at Omada Health, an entrepreneur-in-residence at Rock Health. Co-founder of Sano, a minimally invasive glucose sensor company. Investor at General Catalyst Partners. Gokal has a Bachelor of Science in Economics from the Wharton School of the University of Pennsylvania.</p>
          </div>
        </div>
        <q-space />
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#A962FF"}'
          >
            Greg Fitzgerald
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#A962FF", marginTop: "8px"}'
          >
            Co-founder and CTO
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Greg is the principal architect of Solana. Formerly of Qualcomm’s Office of the Chief Scientist, Greg has explored the full landscape of embedded systems. He created a bidirectional RPC bridge between C and Lua for the BREW operating system, helped launch the ARM backend for the LLVM compiler toolchain, and published a variety of open-source projects including a streaming LLVM optimizer in Haskell, license analysis tooling in Python, and a reactive web framework in TypeScript.</p>
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
              <LabelIcon color='rgba(169, 98, 255, 0.4)' />
            </div>
            <div class='label'>
              Introduction
            </div>
          </div>
          <div class='text'>
            <p>Solana is a performant, permissionless blockchain boasting fast transactions and low fees. The team that’s building Solana is very strong and the ecosystem has attracted dedicated investors: Jump, Multicoin, etc. Solana has also drawn in a community of passionate users, builders, and validators, establishing itself as one of the most popular blockchains in 2022.</p>
            <p>We have Bitcoin and Ethereum, but when comes to Transactions Per Second, abbreviated as TPS, both Bitcoin and Ethereum are quite low (less than 30). In the real world, we need to process transactions much faster in the transaction system of a bank, or stake exchange. Solana is built for that. It posts a new consensus method named Proof of History, PoH, in which a system clock is used to automate the transaction ordering process for blockchains. Today, more than 1740 validators with high-performance machines help Solana to be one of the fastest blockchains in the world.</p>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(169, 98, 255, 0.4)' />
            </div>
            <div class='label'>
              Highlight
            </div>
          </div>
          <div class='text'>
            <ul>
              <li><span>High performance: Solana is one of the fastest transaction systems in the world</span></li>
              <li><span>New consensus algorithm: Proof of History (PoH)</span></li>
              <li><span>Team is constructed by top experts of the world from cryptocurrency, software engineer</span></li>
            </ul>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(169, 98, 255, 0.4)' />
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
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Gateio.png' />
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
              <LabelIcon color='rgba(169, 98, 255, 0.4)' />
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
              <LabelIcon color='rgba(169, 98, 255, 0.4)' />
            </div>
            <div class='label'>
              Token Economics
            </div>
          </div>
          <div class='text'>
            <q-img src='~assets/SolanaProposedInflationSchedule.png' />
            <br><br>
            <p><strong>*</strong> In the above graph we see the annual inflation rate [%] over time, given the inflation parameters proposed above.</p>
            <q-img src='~assets/SolanaTotalSupply.png' />
            <p><strong>*</strong> Similarly, here we see the Total Current Supply of SOL [MM] over time, assuming an initial Total Current Supply of 488,587,349 SOL (i.e. for this example, taking the Total Current Supply as of 2020-01-25 and simulating inflation starting from that day).</p>
            <q-img src='~assets/SolanaExampleStakedYields.png' />
            <p>The above shows an example of Staked Yield that a stalker might expect overtime on the Solana network with the Inflation Schedule as specified. This is an idealized Staked Yield as it neglects validator uptime impact on rewards, validator commissions, potential yield throttling, and potential slashing incidents. It additionally ignores that % of Staked SOL is dynamic by design - the economic incentives set up by this Inflation Schedule are more clearly seen when Token Dilution is taken into account (see the Adjusted Staking Yield section below).</p>
            <q-img src='~assets/SolanaGrowthofExampleStakedSupply.png' />
            <p>Due to this relative change in representation, the proportion of stake of any token holder will also change as a function of the Inflation Schedule and the proportion of all tokens that are staked.</p>
            <q-img src='~assets/SolanaExampleDilutionofUnStakedSOL.png' />
            <p>Dilution is independent of the total proportion of staked tokens and only depends on the inflation rate.</p>
            <q-img src='~assets/SolanaAdjustedStakingYield.png' />
            <p>Adjusted Staked Yield is a function of the inflation rate and the percent of staked tokens on the network.</p>
            <q-img src='~assets/SolanaRelativeDilutionofUnstakedStakedSOL.png' />
            <p>As might be intuitive, as the total fraction of staked tokens increases the relative dilution of un-staked tokens grows dramatically. E.g. with 80%80% of the network tokens staked, an un-staked token holder will experience ~400%400% more dilution than a staked holder.</p>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(169, 98, 255, 0.4)' />
            </div>
            <div class='label'>
              Proof of History
            </div>
            <div class='text'>
              <p>Proof of History is a sequence of computations that can provide a way to cryptographically verify the passage of time between two events. It uses a cryptographically secure function written so that output cannot be predicted from the input, and must be completely executed to generate the output. The function is run in a sequence on a single core, its previous output as the 3 current input, periodically recording the current output, and how many times its been called. The output can then be re-computed and verified by external computers in parallel by checking each sequence segment on a separate core.</p>
              <p>Data can be timestamped into this sequence by appending the data (or a hash of some data) into the state of the function. The recording of the state, index, and data as it was appended into the sequences provides a timestamp that can guarantee that the data was created sometime before the next hash was generated in the sequence. This design also supports horizontal scaling as multiple generators can synchronize amongst each other by mixing their state into each other's sequences.</p>
              <p>In the implementation of Solana, Proof of History won't help to generate blocks directly, it cooperates with Proof of Stake to let Solana to be one of the most performant blockchains of the world.</p>
            </div>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(169, 98, 255, 0.4)' />
            </div>
            <div class='label'>
              Disclaimer
            </div>
            <div class='text'>
              <p>We organize the above data from Solana's officially published content, and we rewrite some of the content based on our cognition and knowledge. We can confirm all of the above data and the original material from which we get the data are from reliable media channels. But we also would like to remind our users that we do not give any investment suggestions based on the above data. Investment risk in the Solana project, including mining, staking, or buying tokens is out of our control.</p>
            </div>
          </div>
        </div>
      </div>
      <div class='scale-hide links'>
        <div class='row'>
          <div class='icon'>
            <LabelIcon color='rgba(169, 98, 255, 0.4)' />
          </div>
          <div class='label'>
            Links
          </div>
        </div>
        <div class='inner'>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://solana.com/solana-whitepaper.pdf'>Whitepaper</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://solana.com/validators '>Validators</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/GithubDark.svg' />
            <a href='https://solana.com/github'>Github</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/InternetDark.svg' />
            <a href='https://solana.com'>Official Website</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/TwitterDark.svg' />
            <a href='https://solana.com/twitter'>Twitter</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/DiscordDark.svg' />
            <a href='https://solana.com/discord'>Discord</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://docs.solana.com'>Docs</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://solana.com/news/proof-of-history'>Proof of History</a>
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
  background: url('src/assets/SolanaBannerBg.png')
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
  background: linear-gradient(90deg, rgba(169, 98, 255, 0.4) 0%, rgba(169, 98, 255, 0) 100%)
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
  width: calc(100% - 660px)
  .inner
    border-radius: 8px
    table
      width: calc(100% - 40px)
      background: #FAFAFA
      border: 1px solid #EAEAEA
      border-radius: 8px
      border-spacing: 0
      color: #A962FF
      font-weight: 600
      font-size: 16px
      line-height: 26px
      margin-bottom: 24px
      margin-right: 40px
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
    background: url('src/assets/SolanaCardBg.png')
    width: 400px
    min-height: 350px
    padding: 24px
  .text
    font-weight: 500
    font-size: 16px
    line-height: 26px
    color: rgba(10, 11, 26, 0.8)
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
    ul
      padding-inline-start: 16px
    li
      list-style-type: square
      color: #A962FF
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
