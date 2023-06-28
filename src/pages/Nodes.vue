<template>
  <HeadBackground />
  <div :style='{fontSize: "54px", fontWeight: 600, marginTop: "120px"}' class='text-primary content-width horizontal-center'>
    <span :style='{color: "#0190FF"}'>Filecoin</span>
    <span> Storage Provider</span>
  </div>
  <table
    :style='{marginTop: "64px", borderTop: "1px solid #56F09F", borderBottom: "1px solid #56F09F", fontWeight: 500, fontSize: "18px", lineHeight: "64px", borderCollapse: "collapse"}'
    class='text-primary content-width horizontal-center'
  >
    <tr>
      <td>Crypto More Storage</td>
      <td>50 PiB</td>
      <td>1231823 FIL</td>
      <td />
      <td />
    </tr>
    <tr class='table-head'>
      <th>Miner</th>
      <th>Storage Power</th>
      <th>Total Reward</th>
      <th>Yearly Lucky Value</th>
      <th>Colletral</th>
      <th />
    </tr>
    <tr
      v-for='miner in filecoinMiners'
      :key='miner.miner'
      class='cursor-pointer'
      @click='onBrowserNodeClick(miner.url)'
    >
      <td>{{ miner.miner }}</td>
      <td>{{ miner.power }}</td>
      <td>{{ miner.reward }}</td>
      <td>{{ miner.yearLucky }}</td>
      <td>{{ miner.colletral }}</td>
      <td>
        <q-img src='~assets/ArrowUpRightLargeMargin.svg' width='36px' height='36px' />
      </td>
    </tr>
  </table>
  <div :style='{fontSize: "54px", fontWeight: 600, marginTop: "120px"}' class='text-primary content-width horizontal-center'>
    <span :style='{color: "#000000"}'>Aptos</span>
    <span> Validator</span>
  </div>
  <table
    :style='{marginTop: "64px", borderTop: "1px solid #56F09F", borderBottom: "1px solid #56F09F", fontWeight: 500, fontSize: "18px", lineHeight: "64px", borderCollapse: "collapse"}'
    class='text-primary content-width horizontal-center'
  >
    <tr class='table-head'>
      <th>Name</th>
      <th>Vote Power</th>
      <th>Reward Perf</th>
      <th>Location</th>
      <th>APY</th>
      <th />
    </tr>
    <tr
      v-for='validator in aptosValidators'
      :key='validator.name'
      class='cursor-pointer'
      @click='onBrowserNodeClick(validator.url)'
    >
      <td>{{ validator.name }}</td>
      <td>{{ validator.votePower }}</td>
      <td>{{ validator.rewardPerf }}</td>
      <td>{{ validator.location }}</td>
      <td>{{ validator.apy }}</td>
      <td>
        <q-img src='~assets/ArrowUpRightLargeMargin.svg' width='36px' height='36px' />
      </td>
    </tr>
  </table>
  <div :style='{height: "180px"}' />
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref } from 'vue'

const HeadBackground = defineAsyncComponent(() => import('src/components/common/HeadBackground.vue'))

interface FilecoinMiner {
  miner: string
  power: string
  reward: string
  colletral: string
  yearLucky: string
  url: string
}

const filecoinMiners = ref([
  {
    miner: 'f07824',
    power: '101 TiB',
    reward: '1008 FIL',
    colletral: '1898 FIL',
    yearLucky: '88%',
    url: 'https://filscan.io/miner/f07824'
  }
] as Array<FilecoinMiner>)

interface AptosValidator {
  name: string,
  poolAddress: string,
  votePower: string
  rewardPerf: string
  location: string
  apy: string
  url: string
}

const aptosValidators = ref([
  {
    name: 'metahash.apt',
    poolAddress: '0x6c8a3474cb49202515d121fea0f3217d303e41f6bdc43e615f1cd90855118089',
    votePower: '15480467 APT',
    rewardPerf: '99.99%',
    location: 'Tokyo, Japan',
    apy: '7%',
    url: 'https://explorer.aptoslabs.com/account/0x6c8a3474cb49202515d121fea0f3217d303e41f6bdc43e615f1cd90855118089/resources?network=mainnet'
  }
] as Array<AptosValidator>)

const onBrowserNodeClick = (url: string) => {
  window.open(url)
}

</script>

<style lang='sass' scoped>
.table-head
  background: linear-gradient(90deg, rgba(86, 240, 159, 0.6) 0%, rgba(86, 240, 159, 0) 100%)
  text-align: left
  border: none

tr
  border: none
  border-top: 1px solid #56F09F

td
  border: none
  padding-left: 16px

th
  padding-left: 16px

tr:hover
  background: linear-gradient(90deg, rgba(86, 240, 159, 0.6) 0%, rgba(86, 240, 159, 0) 100%)
</style>
