import { defineStore } from 'pinia'
import { Language, LanguageState } from './types'
import { LocaleMessages, VueMessageType } from 'vue-i18n'

export const useLangStore = defineStore('lang', {
  state: (): LanguageState => ({
    Languages: new Map<string, Language>(),
    Messages: new Map<string, LocaleMessages<VueMessageType>>(),
    AppLangInfos: []
  }),
  getters: {},
  actions: {
    getLangs () {
      // TODO
    }
  }
})
