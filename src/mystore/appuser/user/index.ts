import { defineStore } from 'pinia'
import { useLocalUserStore } from './local'
import { doAction, doActionWithError } from '../../action'
import { API } from './const'
import {
  LoginRequest,
  LoginResponse,
  LoginVerifyRequest,
  LoginVerifyResponse,
  LogoutRequest,
  LogoutResponse,
  ResetUserRequest,
  ResetUserResponse,
  SignupRequest,
  SignupResponse,
  UpdateUserKolRequest,
  UpdateUserKolResponse,
  UpdateUserRequest,
  UpdateUserResponse
} from './types'
import { UserTypes } from './base'

export const useUserStore = defineStore('user', {
  state: () => ({}),
  getters: {},
  actions: {
    login (req: LoginRequest, done: (error: boolean, user?: UserTypes.User) => void) {
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
    loginVerify (req: LoginVerifyRequest, done: (error: boolean, user?: UserTypes.User) => void) {
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
    updateUser (req: UpdateUserRequest, done: (error: boolean, user?: UserTypes.User) => void) {
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
    updateUserKol (req: UpdateUserKolRequest, done: (error: boolean, user?: UserTypes.User) => void) {
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
    }
  }
})

export * as UserBase from './base'
export * as UserLocal from './local'
export * as UserTypes from './types'
