import { defineStore } from 'pinia'
import { UserState } from './types'

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    LoginedUser: undefined
  }),
  getters: {
    getLogined (): boolean { return this.LoginedUser !== undefined }
  },
  actions: {}
})
