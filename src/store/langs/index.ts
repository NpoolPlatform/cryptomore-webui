import { defineStore } from 'pinia'
import {
  GetLangMessagesRequest,
  GetLangMessagesResponse,
  GetLangsRequest,
  GetLangsResponse,
  LanguageState
} from './types'
import { doAction } from '../action'
import { API } from './const'

export const useLangStore = defineStore('lang', {
  state: (): LanguageState => ({
    Languages: [],
    Messages: {},
    CurLang: undefined
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
            if (!this.CurLang) {
              this.CurLang = lang.Lang
            }
            this.Languages.push(lang.Lang)
          })
          console.log(this.CurLang)
        })
    },
    getLangMessages (req: GetLangMessagesRequest) {
      doAction<GetLangMessagesRequest, GetLangMessagesResponse>(
        API.GET_LANG_MESSAGES,
        req,
        req.Message,
        (resp: GetLangMessagesResponse): void => {
          let messages = this.Messages[this.CurLang?.Lang as string]
          if (!messages) {
            messages = {}
          }
          resp.Infos.forEach((msg) => {
            messages[msg.MessageID] = msg.Message
          })
          this.Messages[this.CurLang?.Lang as string] = messages
        })
    }
  }
})
