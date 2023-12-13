import { defineStore } from 'pinia'
import { SettingState } from './state'
import { constants } from 'src/const'

export const useSettingStore = defineStore('setting', {
  state: (): SettingState => ({
    ShowBannerAnnouncement: true,
    ShowSignHelper: true,
    ShowHeader: true,
    ShowFooter: true,
    PricingMenu: constants.ServiceType.CryptoEnterprise
  }),
  getters: {},
  actions: {}
})
