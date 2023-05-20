
import { defineStore } from 'pinia'
import { API } from './const'
import {
  GetAppCountriesRequest,
  GetAppCountriesResponse,
  AppCountry
} from './types'
import { doActionWithError } from '../../../action'
import { AppCountryState } from './state'

export const useAppCountryStore = defineStore('appcountry', {
  state: (): AppCountryState => ({
    Countries: [] as Array<AppCountry>,
    Total: 0
  }),
  getters: {
  },
  actions: {
    getAppCountries (req: GetAppCountriesRequest, done: (error: boolean, rows: Array<AppCountry>) => void) {
      doActionWithError<GetAppCountriesRequest, GetAppCountriesResponse>(
        API.GET_APPCOUNTRIES,
        req,
        req.Message,
        (resp: GetAppCountriesResponse): void => {
          this.Countries.push(...resp.Infos)
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
