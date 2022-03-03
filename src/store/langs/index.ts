import { defineStore } from 'pinia'
import { GetLangsRequest, GetLangsResponse, LanguageState } from './types'
import { LocaleMessages, VueMessageType } from 'vue-i18n'
import { doAction } from '../action'
import { API } from './const'

export const useLangStore = defineStore('lang', {
  state: (): LanguageState => ({
    Languages: [],
    Messages: new Map<string, LocaleMessages<VueMessageType>>()
  }),
  getters: {},
  actions: {
    getLangs (req: GetLangsRequest) {
      doAction<GetLangsRequest, GetLangsResponse>(
        API.GET_LANGS,
        req,
        req.Message,
        (resp: GetLangsResponse): void => {
          this.Languages = []
          resp.Infos.forEach((lang) => {
            this.Languages.push(lang.Lang)
          })
        })
    }
  }
})
