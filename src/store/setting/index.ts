import { defineStore } from 'pinia'
import { SettingState } from './types'

export const useSettingStore = defineStore('setting', {
  state: (): SettingState => ({
    ShowHeaderAnnouncement: true,
    ShowMainHeader: true,
    ShowBigLogo: true,
    ShowSignHelper: true,
    ShowFooterTop: true,
    ShowTopTip: false
  }),
  getters: {},
  actions: {}
})
