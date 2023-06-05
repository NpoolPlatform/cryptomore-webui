<template>
  <HeadBackground />
  <Header :parent='$t("MSG_READY_TO_DEPLOY")' current='Filecoin' />
  <div class='content-width banner horizontal-center text-center'>
    <div class='text'>
      Filecoin:  Turns cloud storage into an algorithmic market
    </div>
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "40px"}'>
    <q-img width='36px' height='36px' src='~assets/Filecoin.svg' :style='{marginRight: "12px"}' />
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
  <div class='investor section content-width horizontal-center'>
    <div class='row'>
      <div class='icon'>
        <LabelIcon color='rgba(55, 145, 247, 0.4)' />
      </div>
      <div class='label'>
        Filecoin backed by
      </div>
    </div>
    <div class='row logos'>
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/DigitalCurrencyGroup.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Combinator.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/UnionSquareVentures.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/AndreessenHorowitz.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Winklevoss.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/FundersClub.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Sequoia.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/StanfordUniversity.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/NirvanaCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/IOSGVentures.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Bossanova.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/JuneFund.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Placeholder.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/MintVentures.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/TheArkFund.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/BlueYard.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/BoastVC.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/LombardStreet.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/GenesisOneCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Visary.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/AlumniVentures.png' />
    </div>
  </div>
  <div class='section team' :style='{background: "rgba(212, 255, 232, 0.4)"}'>
    <div class='content-width horizontal-center'>
      <div class='row'>
        <div class='icon'>
          <LabelIcon color='rgba(55, 145, 247, 0.4)' />
        </div>
        <div class='label'>
          Protocol Labs and Jurn Benet
        </div>
      </div>
      <div class='text'>
        <p>Protocol Labs is a research, development, and deployment lab for network protocols. Protocol Labs creates software systems that tackle significant challenges, aiming to solve them with new technology breakthroughs, great user experience design, and an open-source approach to creation. Protocol Labs creates a series of tools to fulfill a low-cost transportation and storage infrastructure that is inherited from traditional peer-to-peer networks. In a traditional peer-to-peer network, we have to maintain a stun server cluster to let devices behind NAT can access each other, then we need a tracker server cluster to record each node of the network. New protocols like DHT or kademlia support such a peer-to-peer network with a distributed hash table. But even with DHT or kademlia, the node behind NAT or firewall may still won't be accessible. The Libp2p project, which is a part of the IPFS project developed by Protocols Labs, implements protocol named AuthNAT to let node in different network can access each other freely. Besides Libp2p, IPFS, Protocol Labs also create a lot of valuable protocols and software such as IPLD, Multiformats to archive their goal: make a low cost, private storage network. In Aug. 2017, Protocol Labs launches Filecoin project, which aimed to be the incentive layer of IPFS network to solve the problem of traditiona peer-to-peer networks: nodes in the network just use the resources freely, but won't be willing to contribute resources to the network. Filecoin's initial coin offering raise more than 250 million dollars from the open market within 30 minutes. And at Nov. 2020, Filecoin mainnet is deployed. After that, the network has grown to be the largest storage network and the largest zero-knowledge network of the world.</p>
        <p>Jurn Benet is the Founder and CEO of Protocol Labs. He was born in Mexico and then moved to San Diego as a teenager. He obtained his bachelor's and master's degrees in Computer Science from Stanford University. Jurn Bunet applied to Y Combinator on April 9, 2014 with his startup company, Protocol Labs, and a project named IPFS, a decentralized file-sharing system. At that time, Jurn Benet had already built a reputation as a world-class coder. But nobody will know about the achievement of his new project. It was really a great project. Jurn Benet created a lot of valuable tools and infrastructure with his partners, some of them even worked as volunteers for Protocol Labs, just for the passion to archive a great target. Since its launch, Filecoin has gained a significant following and has been widely recognized as an innovative and disruptive technology in the cryptocurrency and blockchain communities. Benet and the team at Protocol Labs continue to work on Filecoin and other projects aimed at improving the internet and making it a more decentralized and open platform.</p>
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
            <p>Filecoin is a decentralized storage network that turns cloud storage into an algorithmic market. The market runs on a blockchain with a native protocol token (also called “Filecoin”), which miners earn by providing storage to clients. Conversely, clients spend Filecoin hiring miners to store or distribute data. As with Bitcoin, Filecoin miners compete to mine blocks with sizable rewards, but Filecoin mining power is proportional to active storage, which directly provides a useful service to clients (unlike Bitcoin mining, whose usefulness is limited to maintaining blockchain consensus). This creates a powerful incentive for miners to amass as much storage as they can, and rent it out to clients. The protocol weaves these amassed resources into a self-healing storage network that anybody in the world can rely on. The network achieves robustness by replicating and dispersing content, while automatically detecting andrepairing replica failures. Clients can select replication parameters to protect against different threat models. The protocol's cloud storage network also provides security, as content is encrypted end-to-end at the client, while storage providers do not have access to decryption keys. Filecoin works as an incentive layer on top of IPFS, which can provide storage infrastructure for any data. It is especially usefulfor decentralizing data, building and running distributed applications, and implementing smart contracts.</p>
            <p>Althrough we copy the above paragraph from Filecoin white paper, we should admit that implementation of Filecoin is still in a very early stage when we write those text at April, 28, 2023. Storage Provider can provide their storage to clients who need store data, but they have to pay to clients for 10 times block reward, it's rediculous. For the algorithm market, clients can only select specific Storage Provider to store their data. Even we have EVM compatible virtual machine named F(E)VM which can support smart contract, PreCommit and Commit message will take a lot of space of the block, too much message of the smart contracts may also affect Filecoin network health. But even at this early stage, we still can forecast the future of Filecoin network, which support a totally online data and storage market. That's the basement of a new world and new thing, called DAO.</p>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
            </div>
            <div class='label'>
              Highlight
            </div>
          </div>
          <div class='text'>
            <ul>
              <li><span>Largest storage network of the world, more than 18EiB storage space is landed</span></li>
              <li><span>First use case of storage and smart contract</span></li>
              <li><span>Basement of Web 3.0 application</span></li>
              <li><span>The team is constructed with the best experts in cryptographic, decentralized storage, zero-knowledge of the world</span></li>
              <li><span>Raise more than 250 million dollars within 30 minutes at Initial Coin Offering</span></li>
            </ul>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
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
            <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Upbit.png' />
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
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
            </div>
            <div class='label'>
              Price
            </div>
          </div>
          <div class='row logos'>
            <LineCharts :style='{height: "240px"}' title='Filecoin Price' :xdatas='xdatas' :ydatas='ydatas' />
          </div>
        </div>
        <div class='proj-main' v-if='false'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
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
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
            </div>
            <div class='label'>
              Token Economics
            </div>
          </div>
          <div class='text'>
            <q-img src='~assets/FilecoinTokenEconomics.png' />
            <br><br><br>
            <p>The vesting schedule for each participating group is as follows:</p>
            <ul>
              <li><span>Investors: 1 year minimum (advisor pre-sale), 6-month minimum (public sale)</span></li>
              <li><span>Protocol Labs: 6 years, linear vesting</span></li>
              <li><span>Foundation: 6 years, linear vesting</span></li>
              <li><span>Miners: Release half-life of 6 years</span></li>
            </ul>
            <br>
            <p>For investors, the following vesting periods and discounts are available:</p>
            <ul>
              <li><span>6-month vesting, 0% discount</span></li>
              <li><span>1-year vesting, 7.5% discount</span></li>
              <li><span>2-year vesting, 15% discount</span></li>
              <li><span>3-year vesting, 20% discount</span></li>
            </ul>
            <q-img src='~assets/FilecoinInvestorVestingSchedule.png' />
            <q-img src='~assets/FilecoinCoinSupply.png' />
            <q-img src='~assets/FilecoinMarketCap.png' />
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
            </div>
            <div class='label'>
              PoRep and PoSt
            </div>
            <div class='text'>
              <p>In quite a long history of blockchain, the only way to reach consensus is Proof of Work, or called PoW. Blockchain nodes take part in blockchain activity with computing resources, help to keep ledger information of the transactions, then get rewards. Some technique pioneers had thought about if the consensus could be reached with resources other than computing units. As we know, the modern computer contains computing resources, storage resources, and network resources. Other than computing resources, could storage resources and network resources be the source of the consensus? Before Filecoin, some projects do quite important and beneficial jobs for that, but all of them are blocked by engineering mass adoption. In other words, they can create a network that proves the concept of prove by storage space or prove by network bandwidth, but they cannot provide a real implementation that can be scalable from a small prototype cluster in which only less than 100 nodes could take part in the consensus to a large production cluster in which may be more than 100,000 nodes need to take part in the consensus. Both security and performance won't reach a production-level scenario.</p>
              <p>Filecoin introduced concepts named Proof of Replication, abbreviated as PoRep, and Proof of Space Time, abbreviated as PoSt. The basic question that needs to be answered is: if a node announces that it stores a piece of data, how can the network verify that it really stores the data, but not only store the digest of the data, or not only store the proof of the data? And how can the network verify data is not re-generated by the node when the data owner is accessing it? The core concept of PoRep is a process named sealing, in which data will be processed by a series of serial algorithms to generate the final stored result piece. After that, when the client wants to access the data, the storage provider must recover data from the result piece with the same process of sealing which need quite a long time to run the process named unseal. This seems lower the usability of the storage, but it let the storage provider must select to store the resulting piece honestly, and let the upper layer such as Saturn  provide  better data accessibility. If the cache data of the upper layer is lost, we still can recover the original data from the sealed piece. After sealing is done, the storage provider will commit a proof of the piece, called a sector, to Filecoin network which will be used in future challenges. For all committed storage power, they will be separated into 48 deadlines in one day. That to say, one deadline will occupy 30 minutes of a day. And within one deadline, it introduced partition to manage the sectors to let storage providers be able to manage large storage power. The network will challenge all deadlines one time every day with different challenges. Storage provider has to generate the right proof with the challenge provided by the network, then commit to the Filecoin network. the storage provider who wins the block will verify the proof, and includes it in the next block then let all network node to verify it. If the proof is invalid, the storage provider will be punished.</p>
              <p>The low-level implementation of PoRep and PoSt is zero-knowledge, in which the verifier does not need to get the data piece from the storage provider to verify. The network has proof that was committed by the storage provider when the storage provider decide to store the data piece. After that, the verifier only needs to get the committed proof and the challenge, then verify (note that here we do not use compare, due to zero-knowledge proving one thing with some mathematical method but not content compares) with the initial proof. We won't over-describe detail about zero-knowledge, but we have to admit Filecoin is a great practice of mass adoption of zero-knowledge.</p>
            </div>
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
              <p>We can confirm all of the above data and the original materials from which we get the data are from reliable media channels. But we also would like to remind our users that we do not give any investment suggestions based on the above data. Investment risk in the Filecoin project, including mining, staking, or buying tokens is out of our control.</p>
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
            <a href='https://filfox.info'>Filecoin Explorer</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/GithubDark.svg' />
            <a href='https://github.com/filecoin-project/lotus'>Github</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/InternetDark.svg' />
            <a href='https://filecoin.io'>Official Website</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://filecoin.io/build/#community'>Blog</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://filecoin.io/slack'>Community</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SlackDark.svg' />
            <a href='https://twitter.com/Filecoin'>Slack</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/TwitterDark.svg' />
            <a href='#'>Twitter</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/DiscordDark.svg' />
            <a href='https://discord.gg/ipfs'>IPFS Discord</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/SocialMediaDark.svg' />
            <a href='https://docs.filecoin.io'>Docs</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/GithubDark.svg' />
            <a href='https://github.com/filecoin-project/community#forums'>Github Community</a>
          </div>
          <div class='row line'>
            <q-img class='icon' width='24px' height='24px' src='~assets/WechatDark.svg' />
            <a href='https://weixin.qq.com/r/1xz54Y-EctINrcuC90nF'>Wechat</a>
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
const currencies = computed(() => chainStore.currencies('bitcoin'))
const xdatas = computed(() => Array.from(currencies.value).map((el) => el.CreatedAt))
const ydatas = computed(() => Array.from(currencies.value).map((el) => Number(el.MarketValueHigh)))

const fetchCurrencies = (offset: number, limit: number) => {
  chainStore.getCurrencies({
    CoinNames: ['bitcoin'],
    Offset: offset,
    Limit: limit,
    Message: {
      Error: {
        Title: t('MSG_SIGNIN'),
        Message: t('MSG_SIGNIN_FAIL'),
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
      color: #3791F7
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
