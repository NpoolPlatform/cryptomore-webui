import { defineStore } from 'pinia'
import * as AppLangTypes from './types'
import { AppLangState } from './state'
import { doActionWithError } from '../../../action'
import { API } from './const'
import { useLocaleStore } from '../../../locale'

export const useG11nAppLangStore = defineStore('g11n-applang', {
  state: (): AppLangState => ({
    Langs: [] as Array<AppLangTypes.Lang>,
    Total: 0
  }),
  getters: {},
  actions: {
    getLangs (req: AppLangTypes.GetLangsRequest, done: (error: boolean, rows?: Array<AppLangTypes.Lang>) => void) {
      doActionWithError<AppLangTypes.GetLangsRequest, AppLangTypes.GetLangsResponse>(
        API.GET_LANGS,
        req,
        req.Message,
        (resp: AppLangTypes.GetLangsResponse): void => {
          this.Langs.push(...resp.Infos)
          this.Total = resp.Total

          const locale = useLocaleStore()
          locale.setLangs(this.Langs)
          done(false, resp.Infos)
        }, () => {
          done(true)
        }
      )
    },
    updateLang (req: AppLangTypes.UpdateLangRequest, done: (error: boolean, row?: AppLangTypes.Lang) => void) {
      doActionWithError<AppLangTypes.UpdateLangRequest, AppLangTypes.UpdateLangResponse>(
        API.UPDATE_LANG,
        req,
        req.Message,
        (resp: AppLangTypes.UpdateLangResponse): void => {
          const index = this.Langs.findIndex((el) => el.ID === resp.Info.ID)
          this.Langs.splice(index < 0 ? 0 : index, index < 0 ? 0 : 1, resp.Info)
          done(false, resp.Info)
        }, () => {
          done(true)
        }
      )
    }
  }
})

export * from './types'
