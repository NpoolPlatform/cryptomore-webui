<template>
  <HeadBackground />
  <Header :parent='$t("MSG_READY_TO_DEPLOY")' current='Bitcoin' />
  <div class='content-width banner horizontal-center text-center'>
    <div class='text'>
      Bitcoin: Open source P2P money
    </div>
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "40px"}'>
    <q-img width='36px' height='36px' src='~assets/Bitcoin.svg' :style='{marginRight: "12px"}' />
    <div :style='{fontWeight: 600, fontSize: "36px", lineHeight: "40px", color: "#FF9500"}'>
      Bitcoin
    </div>
  </div>
  <div
    class='content-width horizontal-center'
    :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "rgba(10, 11, 26, 0.8)", marginTop: "24px"}'
  >
    Bitcoin is an innovative payment network and a new kind of money. Bitcoin is open-source, its design is public, nobody owns or controls Bitcoin and everyone can take part.
  </div>
  <div class='content-width horizontal-center' :style='{marginTop: "24px"}'>
    <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px"}'>
      <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
        Whitepaper:
      </div>
      <div class='col-2' />
      <div class='col-3' :style='{color: "#FF9500"}'>
        2008-12-31
      </div>
    </div>
    <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
      <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
        Genesis:
      </div>
      <div class='col-2' :style='{color: "#FF9500"}'>
        Block number 0
      </div>
      <div class='col-3' :style='{color: "#FF9500"}'>
        2009-01-03
      </div>
    </div>
    <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
      <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
        First Transaction:
      </div>
      <div class='col-2' :style='{color: "#FF9500"}'>
        Block number 170
      </div>
      <div class='col-3' :style='{color: "#FF9500"}'>
        2009-01-03
      </div>
      <div class='col-4' :style='{color: "#FF9500"}'>
        10 BTC
      </div>
    </div>
    <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
      <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
        First Fiat Exchange:
      </div>
      <div class='col-2' :style='{color: "#FF9500"}'>
        Block number 24835
      </div>
      <div class='col-3' :style='{color: "#FF9500"}'>
        2009-10-11
      </div>
      <div class='col-4' :style='{color: "#FF9500"}'>
        5050 BTC
      </div>
      <div class='col-5' :style='{color: "#FF9500"}'>
        $ 505
      </div>
      <div class='col-6' :style='{color: "#FF9500"}'>
        New Liberty Standard
      </div>
    </div>
    <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
      <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
        bitcoinexchange.com:
      </div>
      <div class='col-2' />
      <div class='col-3' :style='{color: "#FF9500"}'>
        2010-03
      </div>
    </div>
    <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
      <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
        Bitcoin Pizza Day:
      </div>
      <div class='col-2' :style='{color: "#FF9500"}'>
        Block number 57034
      </div>
      <div class='col-3' :style='{color: "#FF9500"}'>
        2010-05-22
      </div>
      <div class='col-4' :style='{color: "#FF9500"}'>
        10,000 BTC
      </div>
      <div class='col-5' :style='{color: "#FF9500"}'>
        2 Pizzas
      </div>
      <div class='col-6'>
        Laszlo Hanyecz
      </div>
    </div>
    <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
      <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
        Mt Gox Exchange:
      </div>
      <div class='col-2' />
      <div class='col-3' :style='{color: "#FF9500"}'>
        2010-07-18
      </div>
    </div>
    <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
      <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
        Freenode IRC #bitcoin-otc:
      </div>
      <div class='col-2' />
      <div class='col-3' :style='{color: "#FF9500"}'>
        2010-10-17
      </div>
    </div>
    <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
      <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
        First Million Dollar Capitalization:
      </div>
      <div class='col-2' />
      <div class='col-3' :style='{color: "#FF9500"}'>
        2010-11
      </div>
      <div class='col-4' />
      <div class='col-5' :style='{color: "#FF9500"}'>
        $ 0.5
      </div>
    </div>
    <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
      <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
        SlushPool:
      </div>
      <div class='col-2' />
      <div class='col-3' :style='{color: "#FF9500"}'>
        2010-12-16
      </div>
      <div class='col-4' />
      <div class='col-5' />
      <div class='col-6'>
        Fist Bitcoin Pool
      </div>
    </div>
    <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
      <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
        Parity Between US Dollar and Bitcoin:
      </div>
      <div class='col-2' />
      <div class='col-3' :style='{color: "#FF9500"}'>
        2011-02
      </div>
      <div class='col-4' />
      <div class='col-5' :style='{color: "#FF9500"}'>
        $ 1.00
      </div>
      <div class='col-6' />
    </div>
    <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
      <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
        Mt Gox Hack:
      </div>
      <div class='col-2' />
      <div class='col-3' :style='{color: "#FF9500"}'>
        2011-07
      </div>
      <div class='col-4' :style='{color: "#FF9500"}'>
        850,000 BTC
      </div>
      <div class='col-5' :style='{color: "#FF9500"}'>
        $ 450,000,000
      </div>
      <div class='col-6' />
    </div>
    <q-btn
      flat
      class='btn btn-medium contact-btn'
      :label='$t("MSG_CONTACT_CRYPTO_MORE_BITCOIN")'
      no-caps
      :icon-right='"img:" + arrowUpRight'
      @click='onLetsTalkClick'
    />
  </div>
  <div class='section team' :style='{background: "rgba(212, 255, 232, 0.4)"}'>
    <div class='content-width horizontal-center'>
      <div class='row'>
        <div class='icon'>
          <LabelIcon color='rgba(255, 149, 0, 0.4)' />
        </div>
        <div class='label'>
          Satoshi Nakamoto and Bitcoin Core Developers
        </div>
      </div>
      <div class='text'>
        <p>Even after more than 15 years of Bitcoin Whitepaper presented (Oct. 31, 2008), Satoshi Nakamoto is still not revealed to be a specific person or organization. We don't know whether Satoshi Nakamoto is a woman, a man, or a team. Satoshi Nakamoto post the concept of "an electronic payment system based on cryptographic proof instead of trust, allowing any two willing parties to transact directly with each other without the need for a trusted third party". Since that time, we get to a new epoch of cryptocurrency. Some people are suspected, or claimed by themselves to be Satoshi Nakamoto, but all of them lack of robust evidence about their announcement. After sending his final emails to fellow Bitcoin developers on April 26, 2011, Satoshi Nakamoto was never heard from. Till now, Bitcoin is still running healthily as the biggest cryptocurrency network in the world, not controlled by Satoshi Nakamoto, or anyone else. It's really a great social experiment not only in the cryptocurrency world but also in our real life.</p>
        <p>Today, developers who spread across the globe maintain Bitcoin software, and improve it. The widely used Bitcoin software is based on Bitcoin Core, which is forked from the original Satoshi Nakamoto's Bitcoin software. The first public release of Bitcoin software could be found at <a href='https://sourceforge.net/p/bitcoin/news/2009/01/bitcoin-v01-released---p2p-e-cash'>https://sourceforge.net/p/bitcoin/news/2009/01/bitcoin-v01-released---p2p-e-cash/</a>. In the GitHub Bitcoin code repository, if we check out the first commit, we can know the most popular Bitcoin software we use currently is from here: git-svn-id: <strong>https://bitcoin.svn.sourceforge.net/svnroot/bitcoin/trunk@11a98c847-1fd6-4fd8-948a-caf3550aa51b</strong>. And after that, more and more developers were involved in Bitcoin development. Within 15 years, several hundred developers commit more than 37300 code changes to the repository and release 24 major software versions to improve the protocol and software quality.</p>
      </div>
    </div>
  </div>
  <div class='section row content-width horizontal-center'>
    <div class='row'>
      <div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(255, 149, 0, 0.4)' />
            </div>
            <div class='label'>
              Introduction
            </div>
          </div>
          <div class='text'>
            <p>A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution. Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending. We propose a solution to the double-spending problem using a peer-to-peer network. The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work. The longest chain not only serves as proof of the sequence of events witnessed but proof that it came from the largest pool of CPU power. As long as a majority of CPU power is controlled by nodes that are not cooperating to attack the network, they'll generate the longest chain and outpace attackers. The network itself requires minimal structure. Messages are broadcast on a best-effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone.</p>
            <p>The abstract of the Bitcoin whitepaper posts some key concepts which will guide blockchain technology, including peer-to-peer electronic cash, hash-based proof-of-work and longest chain, messages are broadcast on a best-effort basis, and nodes can leave and rejoin the network at will. Even today, we have so many blockchains running in the world, but all blockchains still can only obey such basic concepts. At the time we write those tests, about 1 year to go before Bitcoin Halving, about 350 EH/s computing power is running to compete with Bitcoin block reward, and it's still growing up. The latest best news is that Bitcoin already supports NFT, and this will open a gate to a new world for Bitcoin. Bitcoin is crazy! The world is crazy! We're all crazy!</p>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(255, 149, 0, 0.4)' />
            </div>
            <div class='label'>
              Highlight
            </div>
          </div>
          <div class='text'>
            <ul>
              <li><span>The symbol of blockchain industry, and the world biggest market capacity cryptocurrency</span></li>
              <li><span>The first large scale cryptocurrency network</span></li>
              <li><span>Already form robust consensus over the world</span></li>
            </ul>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(255, 149, 0, 0.4)' />
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
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Bitmex.png' />
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
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(255, 149, 0, 0.4)' />
            </div>
            <div class='label'>
              Price
            </div>
          </div>
          <div class='row logos'>
            <LineCharts :style='{height: "240px"}' title='Bitcoin Price' :xdatas='xdatas' :ydatas='ydatas' />
          </div>
        </div>
        <div v-if='false' class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(255, 149, 0, 0.4)' />
            </div>
            <div class='label'>
              Performance
            </div>
          </div>
          <div class='row logos'>
            TODO: implemented with backend service
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(255, 149, 0, 0.4)' />
            </div>
            <div class='label'>
              Token Economics
            </div>
          </div>
          <div class='text'>
            <p>Total circulation will be 21,000,000 coins. It'll be distributed to network nodes when they make blocks, with the amount cut in half every 4 years.</p>
            <ul>
              <li><span>First 4 years: 10,500,000 coins</span></li>
              <li><span>Next 4 years: 5,250,000 coins</span></li>
              <li><span>Next 4 years: 2,625,000 coins</span></li>
              <li><span>Next 4 years: 1,312,500 coins</span></li>
            </ul>
            <q-img src='~assets/BitcoinInflationvsTime.png' />
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(255, 149, 0, 0.4)' />
            </div>
            <div class='label'>
              Proof of Work
            </div>
            <div class='text'>
              <p>Proof of work (PoW) is a form of cryptographic proof in which one party (the prover) proves to others (the verifiers) that a certain amount of a specific computational effort has been expended. Verifiers can subsequently confirm this expenditure with minimal effort on their part. The concept was invented by Moni Naor and Cynthia Dwork in 1993 as a way to deter denial-of-service attacks and other service abuses such as spam on a network by requiring some work from a service requester, usually meaning processing time by a computer. The term "proof of work" was first coined and formalized in a 1999 paper by Markus Jakobsson and Ari Juels.</p>
              <p>Proof of work was later popularized by Bitcoin as a foundation for consensus in a permissionless decentralized network, in which miners compete to append blocks and mine new currency, each miner experiencing a success probability proportional to the computational effort expended. PoW and PoS (proof of stake) remain the two best-known Sybil deterrence mechanisms. In the context of cryptocurrencies, they are the most common mechanisms.</p>
              <p>A key feature of proof-of-work schemes is their asymmetry: the work – the computation – must be moderately hard (yet feasible) on the prover or requester side but easy to check for the verifier or service provider. This idea is also known as a CPU cost function, client puzzle, computational puzzle, or CPU pricing function. Another common feature is built-in incentive-structures that reward allocating computational capacity to the network with value in the form of cryptocurrency.</p>
              <p>The purpose of proof-of-work algorithms is not to prove that certain work was carried out or that a computational puzzle was "solved", but to deter manipulation of data by establishing large energy and hardware-control requirements to be able to do so.[5] Proof-of-work systems have been criticized by environmentalists for their energy consumption.</p>
              <p>Within the Bitcoin community, there are groups working together in mining pools. Some miners use application-specific integrated circuits (ASICs) for PoW. This trend toward mining pools and specialized ASICs has made mining some cryptocurrencies economically infeasible for most players without access to the latest ASICs, nearby sources of inexpensive energy, or other special advantages.</p>
            </div>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(255, 149, 0, 0.4)' />
            </div>
            <div class='label'>
              Disclaimer
            </div>
            <div class='text'>
              <p>We organize the above data from Bitcoin's officially published content, and we rewrite some of the content based on our cognition and knowledge. We can confirm all of the above data and the original materials from which we get the data are from reliable media channels. But we also would like to remind our users that we do not give any investment suggestions based on the above data. Investment risk in the Bitcoin project, including mining, staking, or buying tokens is out of our control.</p>
            </div>
          </div>
        </div>
      </div>
      <div class='scale-hide links'>
        <div class='row'>
          <div class='icon'>
            <LabelIcon color='rgba(255, 149, 0, 0.4)' />
          </div>
          <div class='label'>
            Links
          </div>
        </div>
        <div class='inner'>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://bitcoin.org/bitcoin.pdf'>Whitepaper</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/GithubDark.svg' />
            <a href='https://github.com/bitcoin/bitcoin.git'>Github</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/InternetDark.svg' />
            <a href='https://bitcoin.org/en/'>Official Website</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://en.wikipedia.org/wiki/Proof_of_work'>Proof of Work</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, computed, onMounted } from 'vue'
import { coincurrencyhistory, coincurrencybase, notify } from 'src/npoolstore'
import { useI18n } from 'vue-i18n'
import { useChatWoot } from '@productdevbook/chatwoot/vue'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

import arrowUpRight from 'src/assets/ArrowUpRightLargeMargin.svg'

const Header = defineAsyncComponent(() => import('src/components/product/Header.vue'))
const HeadBackground = defineAsyncComponent(() => import('src/components/common/HeadBackground.vue'))
const LabelIcon = defineAsyncComponent(() => import('src/components/product/LabelIcon.vue'))
const LineCharts = defineAsyncComponent(() => import('src/components/charts/LineCharts.vue'))

const currency = coincurrencyhistory.useCoinCurrencyHistoryStore()
const currencies = computed(() => currency.historiesByCoinName('bitcoin'))
const xdatas = computed(() => Array.from(currencies.value).map((el) => el.CreatedAt))
const ydatas = computed(() => Array.from(currencies.value).map((el) => Number(el.MarketValueHigh)))

const fetchCurrencies = (offset: number, limit: number) => {
  currency.getCurrencyHistories({
    CoinNames: ['bitcoin'],
    Offset: offset,
    Limit: limit,
    StartAt: Math.floor(Date.now() / 1000 - 7 * 24 * 60 * 60),
    Message: {
      Error: {
        Title: t('MSG_GET_CURRENCIES'),
        Message: t('MSG_GET_CURRENCIES_FAIL'),
        Popup: true,
        Type: notify.NotifyType.Error
      }
    }
  }, (error: boolean, rows?: Array<coincurrencybase.CoinCurrency>) => {
    if (error || rows?.length === 0) {
      return
    }
    fetchCurrencies(offset + limit, limit)
  })
}

onMounted(() => {
  fetchCurrencies(0, 100)
})

const onViewMoreClick = () => {
  window.open('https://coinmarketcap.com/currencies/bitcoin/')
}

const chatwoot = useChatWoot()
const onLetsTalkClick = () => {
  chatwoot.toggle('open')
  return true
}

</script>

<style lang='sass' scoped>
.banner
  background: url('src/assets/BitcoinBannerBg.png')
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

.contact-btn
  color: rgba(10, 11, 26, 0.8)
  font-weight: 500
  font-size: 16px
  line-height: 26px
  background: #EAEAEA
  margin-top: 24px
  margin-bottom: 64px

.schedule
  background: linear-gradient(90deg, rgba(255, 149, 0, 0.4) 0%, rgba(255, 149, 0, 0) 100%)
  width: 100%
  padding: 7px
  .col-1
    width: 320px
  .col-2
    width: 240px
  .col-3
    width: 160px
  .col-4
    width: 160px
  .col-5
    width: 160px
  .col-6
    width: 160px

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
      color: #FF9500
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
