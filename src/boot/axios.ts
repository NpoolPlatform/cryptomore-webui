import { boot } from 'quasar/wrappers'
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { AppID } from 'src/const/const'
import { createAPI } from 'src/mystore/request'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
let baseURL = window.location.protocol + '//api.' + window.location.hostname + '/api'
if (window.location.hostname.startsWith('www.')) {
  baseURL = window.location.origin.replace('www', 'api') + '/api'
}
if (window.location.hostname.includes('.npool.top')) {
  baseURL = window.location.protocol + '//api.npool.top' + (window.location.port.length ? ':' + window.location.port : '') + '/api'
}
const api = createAPI(baseURL, AppID) as AxiosInstance

// define common response handle
interface CommonError {
  code: number
  message: string
}

const post = async <T, R>(url: string, data: T) => {
  return await api
    .post<T, AxiosResponse<R>>(url, data)
    .then((data: AxiosResponse<R>) => data.data)
    .catch((err: AxiosError<CommonError>) => {
      throw new Error(err.response?.data.message || err.message) // err.message is uncached error
    })
}

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

// export api, post method recommand post
export { api, post }
