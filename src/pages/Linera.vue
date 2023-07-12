<template>
  <HeadBackground />
  <Header :parent='$t("MSG_FIRST_BATCH_STAKING")' current='Linera' />
  <div class='content-width banner horizontal-center text-center'>
    <div class='text'>
      Linera: A Blockchain Infrastructure for Highly Scalable Web3 Applications
    </div>
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "40px"}'>
    <q-img width='36px' height='36px' src='~assets/Linera.svg' :style='{marginRight: "12px"}' />
    <div :style='{fontWeight: 600, fontSize: "36px", lineHeight: "40px", color: "#FF2A00"}'>
      Linera
    </div>
  </div>
  <div
    class='content-width horizontal-center'
    :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "rgba(10, 11, 26, 0.8)", marginTop: "24px"}'
  >
    Linera is a blockchain infrastructure that aims to support the most demanding web3 applications by providing them with predictable performance, security, and responsiveness at the Internet scale. It solves the block space scarcity problem by introducing a new, integrated, multi-chain paradigm built upon elastic validators.
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
              <td>Seed</td>
              <td>$ 3M</td>
              <td>2022-06-06</td>
              <td />
            </tr>
            <tr>
              <td>Angel</td>
              <td>$ 30M</td>
              <td>2022-08-06</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class='investor section content-width horizontal-center'>
    <div class='row'>
      <div class='icon'>
        <LabelIcon color='rgba(255, 42, 0, 0.4)' />
      </div>
      <div class='label'>
        Linera backed by
      </div>
    </div>
    <div class='row logos'>
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/FTX.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/AndreessenHorowitz.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Jump.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Luxcapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/KimaVentures.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/TribeCapital.png' />
    </div>
  </div>
  <div class='section team' :style='{background: "rgba(212, 255, 232, 0.4)"}'>
    <div class='content-width horizontal-center'>
      <div class='row'>
        <div class='icon'>
          <LabelIcon color='rgba(255, 42, 0, 0.4)' />
        </div>
        <div class='label'>
          Team
        </div>
      </div>
      <div class='row'>
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#FF2A00"}'
          >
            Mathieu Baudet
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#FF2A00", marginTop: "8px"}'
          >
            Founder
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Former Blockchain Researcher at Libra/Novi. Former Software Engineer at Facebook. Specialist in BFT consensus protocols, cryptographic protocols, and formal verification. Experience in blockchain infrastructure, AI infrastructure, developer infrastructure, security consulting, and startup development.</p>
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
              <LabelIcon color='rgba(255, 42, 0, 0.4)' />
            </div>
            <div class='label'>
              Introduction
            </div>
          </div>
          <div class='text'>
            <p>When comes to blockchain TPS, we're always suffered from the limited block space which causes high gas fees when a lot of transactions need to be processed. Traditional blockchains are implemented with the mempool model, in which the transactions will be broadcast to the network with the expected gas fee, then synchronized by a block generator to their mempool. After that, the block generator will pick transactions which will be packed to the next block according to predefined gas fee rules. In the worst case, transactions that have quite low gas fees will never be picked by the block generator and then stay in mempool for a long time, until being promoted by the sender with a higher gas fee or canceled with some empty transaction. Thus each transaction's process time will not be deterministic. It's relevant to the network congestion state when the transaction was broadcasted.</p>
            <p>Linera posts a new idea as a possible solution to make the transaction process of blockchain be deterministic. That is to say, when transaction is broadcasted, it should be processed in a expected manner and in predictable delay. They called it a Micro chain. It's something like blockchain sharding, but what is different from blockchain sharding implemented as a layer-2 solution is that Linera won't adopt mempool model,and they don't need to synchronize the state between different sharding parts. Linera tries to build a synchronization communication mechanism between a subset of nodes, they called them micro chain owner(s) and validators. Owners will keep the micro chain, and validators verify the transactions. Blockchain state will be kept within micro chain, and won't be synchronized to the public chain, then the execution of microchain transaction will always be deterministic.</p>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(255, 42, 0, 0.4)' />
            </div>
            <div class='label'>
              Highlight
            </div>
          </div>
          <div class='text'>
            <ul>
              <li><span>Creative solution to make blockchain transaction be deterministic</span></li>
              <li><span>Team is constructed by top engineers from Meta (aka Facebook) and was in charge of Libra, Diem, Move and Meta wallet Novi</span></li>
              <li><span>Inherited from Meta blockchain project Libra and Diem</span></li>
            </ul>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(255, 42, 0, 0.4)' />
            </div>
            <div class='label'>
              Microchain
            </div>
          </div>
          <div class='text'>
            <p>A microchain (or simply chain for short) is similar to a regular blockchain in the sense that it is made of a chain of blocks, each containing a sequence of operations. Importantly, Linera separates the role of proposing new blocks (chain owners' role) from validating them (validators' role). The protocol to extend a chain is configurable and depends on the type of the chain.</p>
            <p>
              A micro chain is represented by an identifier id designed to be non-replayable. Specifically, a unique identifier (or simply identifier ) is a non-empty sequence of numbers written as for some
              <br>
              <q-img height='26px' width='183px' src='~assets/LineraFormula1.png' /><q-img height='26px' width='143px' src='~assets/LineraFormula2.png' />
              <br>
              We use :: to denote the concatenation of one number at the end of a sequence
              <br>
              <q-img height='26px' width='292px' src='~assets/LineraFormula3.png' /><q-img height='26px' width='88px' src='~assets/LineraFormula4.png' />
              <br>
              In this example, we say that<q-img height='26px' width='131px' src='~assets/LineraFormula5.png' /> is the parent of <q-img height='26px' width='88px' src='~assets/LineraFormula6.png' />
            </p>
            <p>A Linera system starts with a fixed set of micro chains defined in the genesis configuration. To create a new chain, the owner of an existing chain must execute a chain-creation operation. The new identifier is computed as the concatenation of the parent identifier and the index of the operation creating the new chain.</p>
            <p>In all three cases, the agreement between validators regarding the next block B of a chain is represented in fine by a certificate C = cert[B]. In the case of a single-owner chain, the production of the certificate C is inspired by reliable broadcast . In the case of public chains, certificate C is proof of commit produced by a classical BFT consensus protocol between validators. For simplicity, unless mentioned otherwise, the rest of this report focuses on single-owner chains. Every chain includes a field<q-img height='26px' width='85px' src='~assets/LineraFormula7.png' />to authenticate its<q-img height='26px' width='80px' src='~assets/LineraFormula8.png' />, if any. We write <q-img height='26px' width='137px' src='~assets/LineraFormula9.png' /> when the chain has a single owner authenticated by the public-key pk. Permissioned chains<q-img height='26px' width='218px' src='~assets/LineraFormula10.png' />and public chains <q-img height='26px' width='120px' src='~assets/LineraFormula11.png' />. When <q-img height='26px' width='141px' src='~assets/LineraFormula12.png' /> the chain is said to be inactive.</p>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(255, 42, 0, 0.4)' />
            </div>
            <div class='label'>
              Disclaimer
            </div>
            <div class='text'>
              <p>We organize above data from Linera officially published content, and we rewrite some of the content based on our cognition and knowledge. We can confirm all of the above data and the original marterials which we get the data are from reliable media channel. But we also would like to remind our users that we do not give any investment suggestion based on above data. Investment risk about  Linera project, including mining, staking or buying token is out of our control.</p>
            </div>
          </div>
        </div>
      </div>
      <div class='scale-hide links'>
        <div class='row'>
          <div class='icon'>
            <LabelIcon color='rgba(255, 42, 0, 0.4)' />
          </div>
          <div class='label'>
            Links
          </div>
        </div>
        <div class='inner'>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://static1.squarespace.com/static/62d6e9b8bf6051136f934527/t/63a0b9041c1f491f5b3a9d30/1671477510830/Linera_whitepaper_v1.pdf'>Whitepaper</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/GithubDark.svg' />
            <a href='https://github.com/linera-io'>Github</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/TwitterDark.svg' />
            <a href='https://twitter.com/linera_io'>Twitter</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/MediumDark.svg' />
            <a href='https://medium.com/@linera'>Medium</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/TelegramDark.svg' />
            <a href='https://t.me/linera_official'>Telegram</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/DiscordDark.svg' />
            <a href='https://discord.gg/linera'>Discord</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const Header = defineAsyncComponent(() => import('src/components/product/Header.vue'))
const HeadBackground = defineAsyncComponent(() => import('src/components/common/HeadBackground.vue'))
const LabelIcon = defineAsyncComponent(() => import('src/components/product/LabelIcon.vue'))

</script>

<style lang='sass' scoped>
.banner
  background: url('src/assets/LineraBannerBg.png')
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

.funding
  width: 80%
  .inner
    border-radius: 8px
    table
      width: calc(100% - 40px)
      background: #FAFAFA
      border: 1px solid #EAEAEA
      border-radius: 8px
      border-spacing: 0
      color: #FF2A00
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
    background: url('src/assets/LineraTeambg.png')
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
      color: #FF2A00
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
