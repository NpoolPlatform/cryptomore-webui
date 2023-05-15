import { defineStore } from 'pinia'
import * as NotifTypes from './types'
import { NotifState } from './state'
import { doActionWithError } from '../../action'
import { API } from './const'

export const useNotifNotifStore = defineStore('notif-notif', {
  state: (): NotifState => ({
    Notifs: [] as Array<NotifTypes.Notif>,
    Total: 0
  }),
  getters: {},
  actions: {
    getNotifs (req: NotifTypes.GetNotifsRequest, done: (error: boolean, infos: Array<NotifTypes.Notif>) => void) {
      doActionWithError<NotifTypes.GetNotifsRequest, NotifTypes.GetNotifsResponse>(
        API.GET_NOTIFS,
        req,
        req.Message,
        (resp: NotifTypes.GetNotifsResponse): void => {
          this.Notifs.push(...resp.Infos)
          this.Total = resp.Total
          done(false, resp.Infos)
        }, () => {
          done(true, [])
        }
      )
    }
  }
})

export * from './types'
