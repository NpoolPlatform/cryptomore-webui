import { defineStore } from 'pinia'
import { Cookies } from 'quasar'
import * as userbase from '../base'

export const useLocalUserStore = defineStore('local-user', {
  state: () => ({
    User: undefined as unknown as userbase.User
  }),
  getters: {
    logined (): boolean {
      return this.User && this.User.Logined && this.User.LoginVerified
    },
    findInvitationCode () : boolean {
      return this.User && this.User.InvitationCode?.length > 0
    },
    findEmailAddress () : boolean {
      return this.User && this.User.EmailAddress?.length > 0
    },
    findPhoneNO () : boolean {
      return this.User && this.User.PhoneNO?.length > 0
    },
    isKol () : boolean {
      return this.User && this.User?.Kol
    }
  },
  actions: {
    setUser (user: userbase.User) {
      this.User = user
      if (user) {
        Cookies.set('X-User-ID', user.ID, { expires: '4h', secure: true, path: '/' })
        Cookies.set('X-App-Login-Token', user.LoginToken, { expires: '4h', secure: true, path: '/' })
      }
    },
    restUser () {
      Cookies.remove('X-User-ID')
      Cookies.remove('X-AppLogin-Token')
      this.User = undefined as unknown as userbase.User
    }
  }
})
