<template>
  <HeadBackground />
  <Header :parent='$t("MSG_READY_TO_DEPLOY")' current='Ethereum' />
  <div class='content-width banner horizontal-center text-center'>
    <div class='text'>
      Ethereum: First Smart Contract and Decentralized Application Platform
    </div>
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "40px"}'>
    <q-img width='36px' height='36px' src='~assets/Ethereum.svg' :style='{marginRight: "12px"}' />
    <div :style='{fontWeight: 600, fontSize: "36px", lineHeight: "40px", color: "#C5B0F9"}'>
      Ethereum
    </div>
  </div>
  <div
    class='content-width horizontal-center'
    :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "rgba(10, 11, 26, 0.8)", marginTop: "24px", marginBottom: "64px"}'
  >
    The intent of Ethereum is to create an alternative protocol for building decentralized applications, providing a different set of tradeoffs that we believe will be very useful for a large class of decentralized applications, with particular emphasis on situations where rapid development time, security for small and rarely used applications, and the ability of different applications to very efficiently interact, are important. Ethereum does this by building what is essentially the ultimate abstract foundational layer: a blockchain with a built-in Turing-complete programming language, allowing anyone to write smart contracts and decentralized applications where they can create their own arbitrary rules for ownership, transaction formats, and state transition functions.
  </div>
  <div class='section team' :style='{background: "rgba(212, 255, 232, 0.4)"}'>
    <div class='content-width horizontal-center'>
      <div class='row'>
        <div class='icon'>
          <LabelIcon color='rgba(197, 176, 249, 0.4)' />
        </div>
        <div class='label'>
          Vitalik Buterin and Ethereum Co-Funders
        </div>
      </div>
      <div class='text'>
        <p>Vitalik Buterin is a Russian-born programmer who emigrated to Canada as a child and later wrote Ethereum's whitepaper and co-founded Ethereum. Ethereum's other founders include Gavin Wood, who later founded Polkadot, Charles Hoskinson, the founder of Cardano, as well as Anthony Di Lorio and Joseph Lubin, who later launched Decentral and ConsenSys respectively.</p>
        <p>What inspired Buterin to build Ethereum? If you can believe it, the programmer reportedly decided to launch Ethereum after the developers of World of Warcraft (a multiplayer online role-playing game) removed the damage component from his Warlock character's spell. “I cried myself to sleep,” he said, “and on that day I realized what horrors centralized services can bring.”</p>
        <p>After quitting the game, Buterin co-founded Bitcoin Magazine and traveled the world learning about up-and-coming crypto projects. in his opinion, too many of the projects he saw on his travels focused on specific applications and none were “sufficiently general,” ergo the crypto space needed a base layer on which new applications could launch, which is what Ethereum has since become.</p>
        <p>Although the Ethereum blockchain has a number of founders, Vitalik Buterin was the one who initially published a white paper explaining the concept of Ethereum in November 2013. Following Buterin's initial work, other brains jumped on board in various capacities to help bring the project to fruition. Vitalik Buterin, Gavin Wood, Charles Hoskinson, Amir Chetrit, Anthony Di Iorio, Jeffrey Wilcke, Joseph Lubin, and Mihai Alisie are all considered co-founders of Ethereum. As mentioned above, most of them launch their own crypto business, they almost represent at least half of the trend of cryptocurrency.</p>
      </div>
    </div>
  </div>
  <div class='section row content-width horizontal-center'>
    <div class='row'>
      <div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(197, 176, 249, 0.4)' />
            </div>
            <div class='label'>
              Introduction
            </div>
          </div>
          <div class='text'>
            <p>Ethereum was thought to be the first smart contract application platform. It introduced the ability to issue a new type of digital assets based on a smart contract which is run by EVM.This fantastic technology makes it possible to run something which is predefined in the smart contract code at specific conditions. What Bitcoin took to the world, is trustless finance activities between different parties, Ethereum's smart contract implemented an even deeper trustless process between two cooperation parties not only in finance. With EVM smart contract and the ability to issue new digital assets, we're able to map assets in the real world to the digital world, then build our business with predefined logic implemented by smart contract.</p>
            <p>Ethereum's ability to run smart contracts also makes developers able to create applications that can interact with the blockchain. Such an application is called a decentralized application, abbreviated as dApp. For any industry, the application is always the biggest promotion. We can see different dApps run on the Ethereum network which can unleash Ethereum's power. DeFi, NFT, DAOs, Play2Earn, those new species which are only concepts in the old time are implementing and practicing by technique and product pioneers.</p>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(197, 176, 249, 0.4)' />
            </div>
            <div class='label'>
              Highlight
            </div>
          </div>
          <div class='text'>
            <ul>
              <li><span>First smart contract application platform</span></li>
              <li><span>Support issue digital assets</span></li>
              <li><span>Turing-Completeness EVMld</span></li>
            </ul>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(197, 176, 249, 0.4)' />
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
              <LabelIcon color='rgba(197, 176, 249, 0.4)' />
            </div>
            <div class='label'>
              Price
            </div>
          </div>
          <div class='row logos'>
            <LineCharts :style='{height: "240px"}' title='Bitcoin Price' :xdatas='xdatas' :ydatas='ydatas' />
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(197, 176, 249, 0.4)' />
            </div>
            <div class='label'>
              Token Economics
            </div>
          </div>
          <div class='text'>
            <q-img src='~assets/EthereumLongTerminFlationRate.png' />
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(197, 176, 249, 0.4)' />
            </div>
            <div class='label'>
              Smart Contract and Turing-Completeness EVM
            </div>
            <div class='text'>
              <p>A smart contract is a computer program or a transaction protocol that is intended to automatically execute, control or document events and actions according to the terms of a contract or an agreement. The objectives of smart contracts are the reduction of the need for trusted intermediates, arbitration costs, and fraud losses, as well as the reduction of malicious and accidental exceptions. Smart contracts are commonly associated with cryptocurrencies, and the smart contracts introduced by Ethereum are generally considered a fundamental building block for decentralized finance (DeFi) and NFT applications.</p>
              <p>Vending machines are mentioned as the oldest piece of technology equivalent to smart contract implementation. The original Ethereum white paper by Vitalik Buterin in 2014 describes the Bitcoin protocol as a weak version of the smart contract concept as originally defined by Nick Szabo, and proposed a stronger version based on the Solidity language, which is Turing complete. Since Bitcoin, various cryptocurrencies have supported programming languages that allow for more advanced smart contracts between untrusted partie</p>
              <p>We copy the above content from Wikipedia. But basically, a smart contract is a piece of code that will be run on the blockchain. Here, running on the blockchain is quite a different concept from running on the computer. When we run our program on the computer, we need to compile the program to binary code which could be recognized by the computer. Then the computer will load our program into its memory. After that, the CPU will fetch code from the entry address and run it one by one. Modern pipeline workflow is a bit different from this description, but the theory is always the same. When comes to the blockchain world, who will fetch the code and then run it? Different from a single machine, blockchain is run by nodes spread all over the world. They reach a final result with a consensus algorithm. Each node will maintain several vm instances which will run code contained in the transaction. So not a single machine will fetch the code to run, but every node will do that. All honest nodes will get the same result with the same code, then the account state transferred.</p>
            </div>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(197, 176, 249, 0.4)' />
            </div>
            <div class='label'>
              Disclaimer
            </div>
            <div class='text'>
              <p>We organize the above data from Ethereum's officially published content, and we rewrite some of the content based on our cognition and knowledge. We can confirm all of the above data and the original materials from which we get the data are from reliable media channels. But we also would like to remind our users that we do not give any investment suggestions based on the above data. Investment risk about the Ethereum project, including mining, staking, or buying tokens is out of our control.</p>
            </div>
          </div>
        </div>
      </div>
      <div class='scale-hide links'>
        <div class='row'>
          <div class='icon'>
            <LabelIcon color='rgba(197, 176, 249, 0.4)' />
          </div>
          <div class='label'>
            Links
          </div>
        </div>
        <div class='inner'>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://ethereum.org/en/whitepaper'>Whitepaper</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://ethereum.org/en'>Official Website</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, computed, onMounted } from 'vue'
import { chain, notification } from 'src/mystore'
import { useI18n } from 'vue-i18n'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

import arrowUpRight from 'src/assets/ArrowUpRightLargeMargin.svg'

const Header = defineAsyncComponent(() => import('src/components/product/Header.vue'))
const HeadBackground = defineAsyncComponent(() => import('src/components/common/HeadBackground.vue'))
const LabelIcon = defineAsyncComponent(() => import('src/components/product/LabelIcon.vue'))
const LineCharts = defineAsyncComponent(() => import('src/components/charts/LineCharts.vue'))

const chainStore = chain.CoinCurrency.useHistoryStore()
const currencies = computed(() => chainStore.currencies('ethereum'))
const xdatas = computed(() => Array.from(currencies.value).map((el) => el.CreatedAt))
const ydatas = computed(() => Array.from(currencies.value).map((el) => Number(el.MarketValueHigh)))

const fetchCurrencies = (offset: number, limit: number) => {
  chainStore.getCurrencies({
    CoinNames: ['ethereum'],
    Offset: offset,
    Limit: limit,
    StartAt: Math.floor(Date.now() / 1000 - 7 * 24 * 60 * 60),
    Message: {
      Error: {
        Title: t('MSG_GET_CURRENCIES'),
        Message: t('MSG_GET_CURRENCIES_FAIL'),
        Popup: true,
        Type: notification.NotifyType.Error
      }
    }
  }, (error: boolean, rows: Array<chain.CoinCurrency.Currency>) => {
    if (error) {
      return
    }
    if (rows.length === 0) {
      return
    }
    fetchCurrencies(offset + limit, limit)
  })
}

onMounted(() => {
  fetchCurrencies(0, 100)
})

</script>

<style lang='sass' scoped>
.banner
  background: url('src/assets/EthereumBannerBg.png')
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

.section
  .icon
    padding: 3px 0
  .label
    font-weight: 600
    font-size: 24px
    line-height: 32px
    color: rgba(10, 11, 26, 0.8)
    margin-left: 12px

.team
  padding-top: 64px
  padding-bottom: 64px
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
      color: #C5B0F9
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
