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
        .get<Array<UserInfo>>(apiUrl)
        .then((response) => {
          this.loading = false
          this.Infos = response.data
          this.error = ''
        })
        .catch((err: Error) => {
          this.loading = false
          this.error = err.message
        })
    }
  }
})
