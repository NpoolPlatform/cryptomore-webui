import { defineStore } from 'pinia'
import { SettingState } from './state'

export const useSettingStore = defineStore('setting', {
  state: (): SettingState => ({
    ShowHeaderAnnouncement: true,
    ShowSignHelper: true,
    ShowFooterTop: true,
    ShowTopTip: false
  }),
  getters: {},
  actions: {}
})
