<template>
  <HeadBackground />
  <Header :parent='$t("MSG_FIRST_BATCH_MINING")' current='Aleo' />
  <div class='content-width banner horizontal-center text-center'>
    <div class='text'>
      Aleo: Truly Private Applications
    </div>
  </div>
  <div class='content-width horizontal-center row' :style='{marginTop: "40px"}'>
    <q-img width='36px' height='36px' src='~assets/Aleo.svg' :style='{marginRight: "12px"}' />
    <div :style='{fontWeight: 600, fontSize: "36px", lineHeight: "40px", color: "#00C0F9"}'>
      Aleo
    </div>
  </div>
  <div
    class='content-width horizontal-center'
    :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "rgba(10, 11, 26, 0.8)", marginTop: "24px"}'
  >
    Aleo develops a private application-building platform that enables privacy on blockchains.
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
                <td>Series A</td>
                <td>$ 28M</td>
                <td>2021-04</td>
              </tr>
              <tr>
                <td>Seed</td>
                <td>$ 200M</td>
                <td>2017-08-08</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px"}'>
          <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
            Alphanet:
          </div>
          <div class='col-2' :style='{color: "#00C0F9"}'>
            2019-09-25
          </div>
        </div>
        <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
          <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
            Testnet:
          </div>
          <div class='col-2' :style='{color: "#00C0F9"}'>
            2019-12-12
          </div>
          <div class='col-3' />
          <div class='col-4' :style='{color: "#00C0F9"}'>
            10+ PiB
          </div>
        </div>
        <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
          <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
            Space Race:
          </div>
          <div class='col-2' :style='{color: "#00C0F9"}'>
            2020-08-24
          </div>
          <div class='col-3' :style='{color: "#00C0F9"}'>
            4M FIL
          </div>
          <div class='col-4' :style='{color: "#00C0F9"}'>
            100+ PiB
          </div>
        </div>
        <div class='row schedule' :style='{fontWeight: 400, fontSize: "16px", lineHeight: "26px", marginTop: "8px"}'>
          <div class='col-1' :style='{color: "rgba(10, 11, 26, 0.8)"}'>
            Mainnet:
          </div>
          <div class='col-2' :style='{color: "#00C0F9"}'>
            2020-12-15
          </div>
          <div class='col-3' :style='{color: "#00C0F9"}'>
            2B FIL
          </div>
          <div class='col-4' :style='{color: "#00C0F9"}'>
            18.8 EiB
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
              <td>10K C/s</td>
              <td>10K C/s</td>
              <td>10K C/s</td>
              <td>10K C/s</td>
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
        Aleo backed by
      </div>
    </div>
    <div class='row logos'>
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/AndreessenHorowitz.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/SoftBankVisionFund.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/SamsungNext.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/BalajiSrinivasan.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/DavidJNamdar.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Kora.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/CoinbaseDark.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/ACapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/TigerGlobal.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/ZKV.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/SlowVentures.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Placeholder.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/GalaxyDigital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/DecryptCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/EtherealVentures.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/PolychainCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/ScalarCapital.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/TheSea.png' />
      <q-img class='logo cursor-pointer' width='180px' height='64px' src='~assets/Variant.png' />
    </div>
  </div>
  <div class='section team' :style='{background: "rgba(212, 255, 232, 0.4)"}'>
    <div class='content-width horizontal-center'>
      <div class='row'>
        <div class='icon'>
          <LabelIcon color='rgba(55, 145, 247, 0.4)' />
        </div>
        <div class='label'>
          Team
        </div>
      </div>
      <div class='row'>
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#00C0F9"}'
          >
            HOWARD WU
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#00C0F9", marginTop: "8px"}'
          >
            Co-founder
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Former engineer at Google after graduating from Berkeley. Worked in Blockchain at Berkeley (a blockchain accelerator at Berkeley University) and Dekrypt Capital for over 10 years.</p>
          </div>
        </div>
        <q-space />
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#00C0F9"}'
          >
            COLLIN CHIN
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#00C0F9", marginTop: "8px"}'
          >
            Co-founder
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Interned as a smart contract developer at ConsenSys while at Berkeley. Worked as a technical advisor and security consultant at Blockchain at Berkeley and Argus.</p>
          </div>
        </div>
        <q-space />
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#00C0F9"}'
          >
            ALEX PRUDEN
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#00C0F9", marginTop: "8px"}'
          >
            CEO
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Former U.S. Army Infantry and Special Operations officer and graduate of the Stanford MBA program. Worked at a16z, Coinbase, and GGV Capital.</p>
          </div>
        </div>
        <q-space />
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#00C0F9"}'
          >
            RAYMOND CHU
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#00C0F9", marginTop: "8px"}'
          >
            Co-founder
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>While at Berkeley, interned as an engineer at IBM and Amazon. After graduation, worked as a project manager and security consultant at Blockchain at Berkeley and Argus.</p>
          </div>
        </div>
        <q-space />
        <div class='member'>
          <div
            :style='{fontSize: "20px", fontWeight: 600, lineHeight: "26px", color: "#00C0F9"}'
          >
            MICHAEL BELLER
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "#00C0F9", marginTop: "8px"}'
          >
            CFO
          </div>
          <div
            :style='{fontSize: "14px", fontWeight: 400, lineHeight: "24px", marginTop: "12px", color: "rgba(10, 11, 26, 0.8)"}'
          >
            <p>Senior Manager at Accenture for 7 years. Performed as COO/CIO in numerous IT/financial startups.</p>
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
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
            </div>
            <div class='label'>
              Introduction
            </div>
          </div>
          <div class='text'>
            <p>When comes to the web and the internet, we know that the internet giant will collect personal information to make the better-recommended decision for every people. Everybody is naked when they're walking through the internet. This project, Aleo, tries to build a user experience on the web that is both truly personal and truly private. With creative new Leo program language which abstracts low-level cryptographic concepts and makes it easy to integrate private applications into any technique stack, Aleo provides new experiences for users with the possibility to manage their personal data by themselves when browsing web content and introduces an easy programming model to integrate with existing web for developers.</p>
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
              <li><span>Full adoption of ZK proof technology to keep personal data to be private individually</span></li>
              <li><span>Leo program language to develop dApp with private ability easily</span></li>
              <li><span>Aleo team contains the world's top cryptographers, engineers, designers and operators from Google, Amazon and Facebook, Standford, UC Berkeley, Johns Hopkins, New York University and Cornell University</span></li>
              <li><span>Largest fundraising round ever in the ZK industry, backers include Coinbase, a16z, SoftBank and, 19 other world-class investors</span></li>
            </ul>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
            </div>
            <div class='label'>
              Roadmap
            </div>
          </div>
          <div class='row logos'>
            <q-img src='~assets/AleoRoadmap.png' />
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
                  <th>C/s</th>
                </tr>
                <tr>
                  <td>Single NVIDIA GeForce RTX 2080 Ti</td>
                  <td>AMD EPYC 7302 16-Core</td>
                  <td>16GiB</td>
                  <td>Sugon 65N32-US</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>Single NVIDIA GeForce RTX 3080 Ti</td>
                  <td>AMD EPYC 7302 16-Core</td>
                  <td>16GiB</td>
                  <td>Sugon 65N32-US</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>Single NVIDIA GeForce RTX 3080</td>
                  <td>AMD EPYC 7302 16-Core</td>
                  <td>16GiB</td>
                  <td>Sugon 65N32-US</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>Single NVIDIA GeForce RTX 3090</td>
                  <td>AMD EPYC 7302 16-Core</td>
                  <td>16GiB</td>
                  <td>Sugon 65N32-US</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>Single NVIDIA GeForce RTX 4090</td>
                  <td>AMD EPYC 7302 16-Core</td>
                  <td>16GiB</td>
                  <td>Sugon 65N32-US</td>
                  <td>10000</td>
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
            <q-img src='~assets/AleoTokenEconomics.png' />
            <br><br>
            <p><strong>*</strong> Details of the overall economic model (Block time: approximately 20 seconds)</p>
            <br><br>
            <q-img src='~assets/AleoInflationScheduleandTotalSupply.png' />
            <br><br>
            <p><strong>*</strong> Aleo Inflation Schedule and Total Supply</p>
            <br><br>
            <q-img src='~assets/AleoCreditDistribution.png' />
            <br><br>
            <p><strong>*</strong> Aleo Credit Distribution</p>
          </div>
        </div>
        <div class='proj-main'>
          <div class='row'>
            <div class='icon'>
              <LabelIcon color='rgba(55, 145, 247, 0.4)' />
            </div>
            <div class='label'>
              Zero Knowledge Technology
            </div>
            <div class='text'>
              <p>ZK allows parties on a decentralized network to prove knowledge of some information without revealing the underlying facts that make it true. Technically, Zero-knowledge proofs are not proofs in the mathematical sense of the term because there is some small probability, the soundness error, that a cheating prover will be able to convince the verifier of a false statement. In other words, zero-knowledge proofs are probabilistic "proofs" rather than deterministic proofs. However, there are techniques to decrease the soundness error to negligibly small values (e.g. guessing correctly on a hundred or thousand binary decisions has a 1 / 2^100 or 1/ 2^1000, respectively. As the number of bits increases, soundness error decreases toward zero).</p>
              <p>A formal definition of zero-knowledge has to use some computational model, the most common one being that of a Turing machine. Let P, V, and S be Turing machines. An interactive proof system with (P, V) for a language L is zero-knowledge if for any probabilistic polynomial time (PPT) verifier V there exists a PPT simulator S such that</p>
              <q-img src='~assets/AleoFormula1.png' width='403px' height='40px' />
              <p>where <q-img src='~assets/AleoFormula2.png' width='193px' height='35px' />is a record of the interactions between P(x) and V(x, z). The prover P is modeled as having unlimited computation power (in practice, P usually is a probabilistic Turing machine). Intuitively, the definition states that an interactive proof system (P, V) is zero-knowledge if for any verifier V there exists an efficient simulator S (depending on V) that can reproduce the conversation between P and V on any given input. The auxiliary string in the definition plays the role of "prior knowledge" (including the random coins of). The definition implies that V cannot use any prior knowledge string to mine information out of its conversation with P, because if S is also given this prior knowledge then it can reproduce the conversation between V and P just as before.</p>
              <p>The definition given is that of perfect zero-knowledge. Computational zero-knowledge is obtained by requiring that the views of the verifier V and the simulator are only computationally indistinguishable, given the auxiliary string.</p>
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
              <p>We organize the above data from Aleo's officially published content, and we rewrite some of the content based on our cognition and knowledge. We can confirm all of the above data and the original materials from which we get the data are from reliable media channels. But we also would like to remind our users that we do not give any investment suggestions based on the above data. Investment risk in Aleo project, including mining, staking, or buying token is out of our control.</p>
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
  .inner
    border-radius: 8px
    width: 620px
    table
      width: 100%
      background: #FAFAFA
      border: 1px solid #EAEAEA
      border-radius: 8px
      border-spacing: 0
      color: #00C0F9
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
      color: #00C0F9
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
