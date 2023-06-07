
import { defineStore } from 'pinia'
import { API } from './const'
import { doActionWithError } from '../../action'
import { SubscriberState } from './state'
import {
  CreateSubscriberRequest, CreateSubscriberResponse,
  DeleteSubscriberRequest, DeleteSubscriberResponse, GetSubscriberesRequest,
  GetSubscriberesResponse,
  Subscriber
} from './types'

export const useSubscriberStore = defineStore('subscriber', {
  state: (): SubscriberState => ({
    Subscriberes: [] as Array<Subscriber>,
    Total: 0
  }),
  getters: {},
  actions: {
    createSubscriber (req: CreateSubscriberRequest, done: (error: boolean, row?: Subscriber) => void) {
      doActionWithError<CreateSubscriberRequest, CreateSubscriberResponse>(
        API.CREATE_SUBSCRIBER,
        req,
        req.Message,
        (resp: CreateSubscriberResponse): void => {
          this.Subscriberes.push(resp.Info)
          done(false, resp.Info)
        }, () => {
          done(true)
        }
      )
    },
    getSubscriberes (req: GetSubscriberesRequest, done: (error: boolean, rows: Array<Subscriber>) => void) {
      doActionWithError<GetSubscriberesRequest, GetSubscriberesResponse>(
        API.GET_SUBSCRIBERES,
        req,
        req.Message,
        (resp: GetSubscriberesResponse): void => {
          this.Subscriberes.push(...resp.Infos)
          this.Total = resp.Total
          done(false, resp.Infos)
        }, () => {
          done(true, [])
        }
      )
    },
    deleteSubscriber (req: DeleteSubscriberRequest, done: (error: boolean, row?: Subscriber) => void) {
      doActionWithError<DeleteSubscriberRequest, DeleteSubscriberResponse>(
        API.DELETE_SUBSCRIBER,
        req,
        req.Message,
        (resp: DeleteSubscriberResponse): void => {
          const index = this.Subscriberes.findIndex((el) => el.ID === resp.Info.ID)
          this.Subscriberes.splice(index >= 0 ? index : 0, index >= 0 ? 1 : 0)
          done(false, resp.Info)
        }, () => {
          done(true)
        }
      )
    }
  }
})

export * from './types'
