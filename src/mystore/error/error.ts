import { defineStore } from 'pinia'
import { SwitchTarget } from './const'
import { ErrorSwitcherState, ErrorTarget } from './types'

export const useErrorStore = defineStore('error-switcher', {
  state: (): ErrorSwitcherState => ({
    ErrorTargets: [
      {
        ErrorCode: 403,
        Target: SwitchTarget.LOGIN
      }
    ],
    ErrorTrigger: undefined as unknown as ErrorTarget
  }),
  getters: {},
  actions: {}
})

export * as ErrorConsts from './const'
export * as ErrorTypes from './types'
