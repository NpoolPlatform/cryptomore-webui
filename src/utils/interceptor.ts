import { AxiosInstance, AxiosResponse } from 'axios'
import { Cookies } from 'quasar'
import { useLocalUserStore } from '../mystore/appuser/user/local'
import { useSettingStore } from '../mystore/setting'
import { API as LoginedAPI } from '../mystore/appuser/user/const'
import { LoginedResponse } from '../mystore/appuser/user/types'
import {
  NavigationGuardNext,
  RouteLocationNormalized
} from 'vue-router'
import { createAPI } from '../mystore/request'

interface RouteMetaImpl {
  ShowBannerAnnouncement: boolean
  ShowSignHelper: boolean
  NeedLogined: boolean
  ShowHeader: boolean
  ShowFooter: boolean
}

declare module 'vue-router' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface RouteMeta extends RouteMetaImpl {
  }
}

const loginInterceptor = (signInPath: string, to: RouteLocationNormalized, next: NavigationGuardNext) => {
  const setting = useSettingStore()
  setting.ShowBannerAnnouncement = to.meta.ShowBannerAnnouncement
  setting.ShowSignHelper = to.meta.ShowSignHelper
  setting.ShowHeader = to.meta.ShowHeader
  setting.ShowFooter = to.meta.ShowFooter

  const user = useLocalUserStore()
  if (user.User) {
    next()
    return
  }

  const userID = Cookies.get('X-User-ID')
  const token = Cookies.get('X-App-Login-Token')
  if (!userID || !token || userID.length === 0 || token.length === 0) {
    if (to.meta && to.meta.NeedLogined) {
      next({ path: signInPath, replace: true })
    } else {
      next()
    }
    return
  }

  const api = createAPI() as AxiosInstance

  const headers = api.defaults.headers as unknown as Record<string, string>
  headers['X-User-ID'] = userID
  headers['X-App-Login-Token'] = token

  api.post<unknown, AxiosResponse<LoginedResponse>>(LoginedAPI.LOGINED)
    .then((resp: AxiosResponse<LoginedResponse>) => {
      user.setUser(resp.data.Info)
      if (!user.User && to.meta && to.meta.NeedLogined) {
        next({ path: signInPath, replace: true })
        return
      }
      next()
    }).catch(() => {
      if (to.meta && to.meta.NeedLogined) {
        next({ path: signInPath, replace: true })
      } else {
        next()
      }
    })
}

export {
  loginInterceptor,
  RouteMetaImpl
}
