import { defineStore } from 'pinia'
import { SettingState } from './types'

export const useSettingStore = defineStore('setting', {
  state: (): SettingState => ({
    ShowHeaderAnnouncement: true,
    ShowMainHeader: true,
    ShowBigLogo: true
  }),
  getters: {},
  actions: {}
})
