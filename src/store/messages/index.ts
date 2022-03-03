import { defineStore } from 'pinia'
import { MessageState } from './types'

export const useMessageStore = defineStore('message', {
  state: (): MessageState => ({
    Messages: []
  }),
  getters: {},
  actions: {}
})
