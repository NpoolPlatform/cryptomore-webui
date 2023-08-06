import { defineStore } from 'pinia'
import { useLocalUserStore } from './local'
import { doAction, doActionWithError } from '../../action'
import { API } from './const'
import {
  AppOAuthThirdParty,
  BindUserRequest,
  BindUserResponse,
  GetAppOAuthThirdPartiesRequest,
  GetAppOAuthThirdPartiesResponse,
  GetOAuthLoginURLRequest,
  GetOAuthLoginURLResponse,
  LoginRequest,
  LoginResponse,
  LoginVerifyRequest,
  LoginVerifyResponse,
  LogoutRequest,
  LogoutResponse,
  OAuthLoginRequest,
  OAuthLoginResponse,
  ResetUserRequest,
  ResetUserResponse,
  SignupRequest,
  SignupResponse,
  UpdateUserKolRequest,
  UpdateUserKolResponse,
  UpdateUserRequest,
  UpdateUserResponse
} from './types'
import * as userbase from './base'

export const useUserStore = defineStore('user', {
  state: () => ({
    ThirdParties: [] as Array<AppOAuthThirdParty>
  }),
  getters: {},
  actions: {
    login (req: LoginRequest, done: (error: boolean, user?: userbase.User) => void) {
      doActionWithError<LoginRequest, LoginResponse>(
        API.LOGIN,
        req,
        req.Message,
        (resp: LoginResponse): void => {
          const user = useLocalUserStore()
          user.setUser(resp.Info)
          done(false, resp.Info)
        }, () => {
          done(true)
        })
    },
    loginVerify (req: LoginVerifyRequest, done: (error: boolean, user?: userbase.User) => void) {
      doActionWithError<LoginVerifyRequest, LoginVerifyResponse>(
        API.LOGIN_VERIFY,
        req,
        req.Message,
        (resp: LoginVerifyResponse): void => {
          const user = useLocalUserStore()
          user.setUser(resp.Info)
          done(false, resp.Info)
        }, () => {
          done(true)
        })
    },
    signup (req: SignupRequest, done: () => void) {
      doAction<SignupRequest, SignupResponse>(
        API.SIGNUP,
        req,
        req.Message,
        (): void => {
          done()
        })
    },
    logout (req: LogoutRequest, done: (error: boolean) => void) {
      doActionWithError<LogoutRequest, LogoutResponse>(
        API.LOGOUT,
        req,
        req.Message,
        (): void => {
          const user = useLocalUserStore()
          user.restUser()
          done(false)
        }, () => {
          done(true)
        })
    },
    updateUser (req: UpdateUserRequest, done: (error: boolean, user?: userbase.User) => void) {
      doActionWithError<UpdateUserRequest, UpdateUserResponse>(
        API.UPDATE_USER,
        req,
        req.Message,
        (resp: UpdateUserResponse): void => {
          const user = useLocalUserStore()
          user.setUser(resp.Info)
          done(false, resp.Info)
        }, () => {
          done(true)
        })
    },
    bindUser (req: BindUserRequest, done: (error: boolean, user?: userbase.User) => void) {
      doActionWithError<BindUserRequest, BindUserResponse>(
        API.BIND_USER,
        req,
        req.Message,
        (resp: BindUserResponse): void => {
          const user = useLocalUserStore()
          user.setUser(resp.Info)
          done(false, resp.Info)
        }, () => {
          done(true)
        })
    },
    resetUser (req: ResetUserRequest, done: (error: boolean) => void) {
      doActionWithError<ResetUserRequest, ResetUserResponse>(
        API.RESET_USER,
        req,
        req.Message,
        (): void => {
          done(false)
        }, () => {
          done(true)
        })
    },
    updateUserKol (req: UpdateUserKolRequest, done: (error: boolean, user?: userbase.User) => void) {
      doActionWithError<UpdateUserKolRequest, UpdateUserKolResponse>(
        API.UPDATE_USERKOL,
        req,
        req.Message,
        (resp: UpdateUserKolResponse): void => {
          done(false, resp.Info)
        }, () => {
          done(true)
        }
      )
    },
    getAppOAuthThirdParties (req: GetAppOAuthThirdPartiesRequest, done: (error: boolean, rows?: Array<AppOAuthThirdParty>) => void) {
      doActionWithError<GetAppOAuthThirdPartiesRequest, GetAppOAuthThirdPartiesResponse>(
        API.GET_APP_OAUTH_THIRD_PARTIES,
        req,
        req.Message,
        (resp: GetAppOAuthThirdPartiesResponse): void => {
          this.ThirdParties = resp.Infos
          done(false, resp.Infos)
        }, () => {
          done(true)
        }
      )
    },
    getOAuthLoginURL (req: GetOAuthLoginURLRequest, done: (error: boolean, url?: string) => void) {
      doActionWithError<GetOAuthLoginURLRequest, GetOAuthLoginURLResponse>(
        API.GET_OAUTH_LOGIN_URL,
        req,
        req.Message,
        (resp: GetOAuthLoginURLResponse): void => {
          done(false, resp.Info)
        }, () => {
          done(true)
        }
      )
    },
    oauthLogin (req: OAuthLoginRequest, done: (error: boolean, user?: userbase.User) => void) {
      doActionWithError<OAuthLoginRequest, OAuthLoginResponse>(
        API.OAUTH_LOGIN,
        req,
        req.Message,
        (resp: OAuthLoginResponse): void => {
          const user = useLocalUserStore()
          user.setUser(resp.Info)
          done(false, resp.Info)
        }, () => {
          done(true)
        }
      )
    }
  }
})

export * from './base'
export * from './local'
export * from './types'
