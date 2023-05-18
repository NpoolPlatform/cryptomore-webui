import { defineStore } from 'pinia'
import { SettingState } from './state'

export const useSettingStore = defineStore('setting', {
  state: (): SettingState => ({
    ShowBannerAnnouncement: true,
    ShowSignHelper: true
  }),
  getters: {},
  actions: {}
})
