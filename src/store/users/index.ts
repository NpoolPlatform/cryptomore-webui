import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { UserState, UserInfo } from './types'

// use public api
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    Infos: [],
    loading: false,
    error: ''
  }),
  getters: {},
  actions: {
    async getUserInfos () {
      this.loading = true
      await api
        .get<ReadonlyArray<UserInfo>>(apiUrl)
        .then((response) => {
          console.log('infos: ', response.data)
          this.loading = false
          response.data.forEach((info: UserInfo) => this.Infos.push(info))
          this.error = ''
        })
        .catch((err: Error) => {
          this.loading = false
          this.error = err.message
        })
    }
  }
})
