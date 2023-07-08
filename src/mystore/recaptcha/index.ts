import { defineStore } from 'pinia'
import { GetGoogleTokenRequest } from './types'
import { useI18n } from 'vue-i18n'
import { useNotificationStore } from '../notification'

export const useRecaptchaStore = defineStore('recaptcha', {
  state: () => ({
    GoogleToken: new Map<string, string>(),
    I18n: useI18n()
  }),
  getters: {},
  actions: {
    getGoogleToken (req: GetGoogleTokenRequest, done: (token: string) => void) {
      const recaptcha = req.Recaptcha
      const notification = useNotificationStore()
      if (recaptcha) {
        const { executeRecaptcha, recaptchaLoaded } = recaptcha
        recaptchaLoaded()
          .then((loaded: boolean) => {
            if (loaded) {
              void executeRecaptcha(req.Req)
                .then((token: string) => {
                  this.GoogleToken.set(req.Req, token)
                  done(token)
                })
                .catch((err: Error) => {
                  if (req.Message.Error) {
                    req.Message.Error.Description = err.message
                    notification.Notifications.push(req.Message.Error)
                  }
                })
            }
          })
          .catch((err: Error) => {
            if (req.Message.Error) {
              req.Message.Error.Description = err.message
              notification.Notifications.push(req.Message.Error)
            }
          })
      }
    }
  }
})

export * from './types'
