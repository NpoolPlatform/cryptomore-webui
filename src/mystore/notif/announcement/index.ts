import { defineStore } from 'pinia'
import * as AnnouncementTypes from './types'
import { AnnouncementState } from './state'
import { doActionWithError } from '../../action'
import { API } from './const'

export const useNotifAnnouncementStore = defineStore('notif-announcement', {
  state: (): AnnouncementState => ({
    Announcements: [] as Array<AnnouncementTypes.Announcement>,
    Total: 0
  }),
  getters: {},
  actions: {
    getAnnouncements (req: AnnouncementTypes.GetAnnouncementsRequest, done: (error: boolean, infos: Array<AnnouncementTypes.Announcement>) => void) {
      doActionWithError<AnnouncementTypes.GetAnnouncementsRequest, AnnouncementTypes.GetAnnouncementsResponse>(
        API.GET_ANNOUNCEMENTS,
        req,
        req.Message,
        (resp: AnnouncementTypes.GetAnnouncementsResponse): void => {
          this.Announcements.push(...resp.Infos)
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
