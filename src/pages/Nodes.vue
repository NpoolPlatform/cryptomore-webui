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
      <td>{{ bytesReadable(totalFilecoinPower.toFixed(0)) }}</td>
      <td>{{ totalFilecoinReward.toFixed(2) }} FIL</td>
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
      <td :style='{lineHeight: "64px"}'>
        <q-icon
          :name='"img:" + arrowUpRight'
          size='32px'
        />
      </td>
    </tr>
  </table>
  <div id='aptos-nodes' :style='{fontSize: "54px", fontWeight: 600, marginTop: "120px"}' class='text-primary content-width horizontal-center'>
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
        <q-icon
          :name='"img:" + arrowUpRight'
          size='32px'
        />
      </td>
    </tr>
  </table>
  <div :style='{height: "180px"}' />
</template>

<script setup lang='ts'>
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { node } from 'src/mystore'

import arrowUpRight from 'src/assets/ArrowUpRightLargeMargin.svg'

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
    url: 'https://filscan.io/miner/f07824'
  },
  {
    miner: 'f01970622',
    url: 'https://filscan.io/miner/f01970622'
  },
  {
    miner: 'f01970625',
    url: 'https://filscan.io/miner/f01970625'
  },
  {
    miner: 'f01970630',
    url: 'https://filscan.io/miner/f01970630'
  },
  {
    miner: 'f0705704',
    url: 'https://filscan.io/miner/f0705704'
  },
  {
    miner: 'f0422266',
    url: 'https://filscan.io/miner/f0422266'
  },
  {
    miner: 'f01735897',
    url: 'https://filscan.io/miner/f01735897'
  },
  {
    miner: 'f071664',
    url: 'https://filscan.io/miner/f071664'
  },
  {
    miner: 'f023152',
    url: 'https://filscan.io/miner/f023152'
  },
  {
    miner: 'f01876488',
    url: 'https://filscan.io/miner/f01876488'
  },
  {
    miner: 'f0159883',
    url: 'https://filscan.io/miner/f0159883'
  },
  {
    miner: 'f01953944',
    url: 'https://filscan.io/miner/f01953944'
  },
  {
    miner: 'f01953959',
    url: 'https://filscan.io/miner/f01953959'
  },
  {
    miner: 'f0111584',
    url: 'https://filscan.io/miner/f0111584'
  },
  {
    miner: 'f079426',
    url: 'https://filscan.io/miner/f079426'
  },
  {
    miner: 'f01713152',
    url: 'https://filscan.io/miner/f01713152'
  },
  {
    miner: 'f01146045',
    url: 'https://filscan.io/miner/f01146045'
  },
  {
    miner: 'f01211859',
    url: 'https://filscan.io/miner/f01211859'
  },
  {
    miner: 'f0832131',
    url: 'https://filscan.io/miner/f0832131'
  }
] as Array<FilecoinMiner>)

const totalFilecoinPower = ref(0)
const totalFilecoinReward = ref(0)

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
    rewardPerf: '100%',
    location: 'Tokyo, Japan',
    apy: '7%',
    url: 'https://explorer.aptoslabs.com/account/0x6c8a3474cb49202515d121fea0f3217d303e41f6bdc43e615f1cd90855118089/resources?network=mainnet'
  }
] as Array<AptosValidator>)

const onBrowserNodeClick = (url: string) => {
  window.open(url)
}

const filecoin = node.filecoin.useFilecoinMinerStore()

const fetchFilecoinMiner = (index: number) => {
  if (index >= filecoinMiners.value.length) {
    return
  }
  filecoin.getMiner(filecoinMiners.value[index].miner, (error: boolean, _miner?: node.filecoin.MinerStat) => {
    if (error) {
      return
    }
    if (!_miner) {
      return
    }
    filecoinMiners.value[index].colletral = Number(_miner.initPledge).toFixed(2) + ' FIL'
    filecoinMiners.value[index].power = bytesReadable(_miner.qualityAdjustPower)
    filecoinMiners.value[index].reward = Number(_miner.rewards).toFixed(2) + ' FIL'
    filecoinMiners.value[index].yearLucky = (Number(_miner.lucky) * 100).toFixed(2) + '%'
    totalFilecoinPower.value += Number(_miner.qualityAdjustPower)
    totalFilecoinReward.value += Number(_miner.rewards)
    fetchFilecoinMiner(index + 1)
  })
}

const bytesReadable = (n: string) => {
  const bytes = Number(n)
  if (bytes <= 1024) {
    return n
  }
  if (bytes <= 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + ' KiB'
  }
  if (bytes <= 1024 * 1024 * 1024) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MiB'
  }
  if (bytes <= 1024 * 1024 * 1024 * 1024) {
    return (bytes / 1024 / 1024 / 1024).toFixed(2) + ' GiB'
  }
  if (bytes <= 1024 * 1024 * 1024 * 1024 * 1024) {
    return (bytes / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TiB'
  }
  if (bytes <= 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
    return (bytes / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' PiB'
  }
  return (bytes / 1024 / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' EiB'
}

onMounted(() => {
  fetchFilecoinMiner(0)
})

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
