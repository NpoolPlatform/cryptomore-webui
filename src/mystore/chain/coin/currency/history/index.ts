
import { defineStore } from 'pinia'
import { API } from './const'
import { doActionWithError } from '../../../../action'
import { HistoryState } from './state'
import {
  Currency,
  GetCurrenciesRequest,
  GetCurrenciesResponse
} from './types'

export const useHistoryStore = defineStore('coin-currency-history', {
  state: (): HistoryState => ({
    Histories: [] as Array<Currency>,
    Total: 0
  }),
  getters: {
    currencies (): (coinName: string) => Array<Currency> {
      return (coinName: string) => {
        return this.Histories.filter((el) => el.CoinName === coinName)
      }
    }
  },
  actions: {
    getCurrencies (req: GetCurrenciesRequest, done: (error: boolean, rows: Array<Currency>) => void) {
      doActionWithError<GetCurrenciesRequest, GetCurrenciesResponse>(
        API.GET_COIN_CURRENCY_HISTORIES,
        req,
        req.Message,
        (resp: GetCurrenciesResponse): void => {
          this.Histories.push(...resp.Infos)
          this.Total = resp.Total
          done(false, resp.Infos)
        }, () => {
          done(true, [])
        }
      )
    }
  }
})

export * from './types'
