import { defineStore } from 'pinia'
import * as MinerTypes from './types'
import { MinerState } from './state'
import axios from 'axios'

export const useFilecoinMinerStore = defineStore('filecoin-miner', {
  state: (): MinerState => ({
    Miners: new Map<string, MinerTypes.MinerStat>()
  }),
  getters: {},
  actions: {
    getMiner (id: string, done: (error: boolean, miner?: MinerTypes.MinerStat) => void) {
      axios
        .post('https://api.filscan.io:8700/rpc/v1?0=' + id, {
          id: 1,
          jsonrpc: '2.0',
          method: 'filscan.FilscanActorById',
          params: [id]
        })
        .then((resp) => {
          const miner = {} as MinerTypes.MinerStat
          const result = (resp.data as Record<string, unknown>).result as Record<string, unknown>
          const basic = result.basic as Record<string, unknown>
          const extra = result.extra as Record<string, unknown>
          miner.rewards = basic.rewards as string
          miner.initPledge = extra.init_pledge as string
          miner.qualityAdjustPower = extra.quality_adjust_power as string
          axios
            .post('https://api.filscan.io:8700/rpc/v1?0=' + id + '&1=1y&2=1', {
              id: 1,
              jsonrpc: '2.0',
              method: 'filscan.FilscanStatisticalIndicatorsUnite',
              params: [[id], '1y', 1]
            })
            .then((resp) => {
              miner.lucky = ((resp.data as Record<string, unknown>).result as Record<string, unknown>).lucky as string
              this.Miners.set(id, miner)
              done(false, miner)
            })
            .catch(() => {
              done(true)
            })
        })
        .catch((error) => {
          console.log(error)
          done(true)
        })
    }
  }
})

export * from './types'
