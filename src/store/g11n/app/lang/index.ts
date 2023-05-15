import { defineStore } from 'pinia'
import * as AppLangTypes from './types'
import { AppLangState } from './state'

export const useG11nAppLangStore = defineStore('g11n-applang', {
  state: (): AppLangState => ({
    Langs: [] as Array<AppLangTypes.Lang>,
    Total: 0
  }),
  getters: {},
  actions: {}
})

export * as AppLangTypes from './types'
