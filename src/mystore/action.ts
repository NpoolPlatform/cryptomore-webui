import { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { createAPI } from './request'
import * as error from './error'
import * as notification from './notification'

const _notification = notification.useNotificationStore()
const errorswitcher = error.useErrorStore()

function processError (err: AxiosError, message?: notification.Notification) {
  if (message) {
    message.Description = err.response?.statusText
  }

  for (const target of errorswitcher.ErrorTargets) {
    if (target.ErrorCode === err.response?.status) {
      if (!errorswitcher.ErrorTrigger) {
        errorswitcher.ErrorTrigger = {
          ErrorCode: target.ErrorCode,
          Target: target.Target,
          Error: message
        }
      }
      return
    }
  }

  if (message) {
    _notification.Notifications.push(message)
  }
}

function doAction<MyRequest, MyResponse> (
  url: string,
  req: MyRequest,
  message: notification.ReqMessage,
  success: (resp: MyResponse) => void) {
  const api = createAPI() as AxiosInstance
  api
    .post<MyRequest, AxiosResponse<MyResponse>>(url, req)
    .then((response: AxiosResponse<MyResponse>) => {
      success(response.data)
      if (message.Info) {
        _notification.Notifications.push(message.Info)
      }
    })
    .catch((err: AxiosError) => {
      processError(err, message.Error)
    })
}
function doActionWithError<MyRequest, MyResponse> (
  url: string,
  req: MyRequest,
  message: notification.ReqMessage,
  success: (resp: MyResponse) => void,
  error: () => void) {
  const api = createAPI() as AxiosInstance
  api
    .post<MyRequest, AxiosResponse<MyResponse>>(url, req)
    .then((response: AxiosResponse<MyResponse>) => {
      success(response.data)
      if (message.Info) {
        _notification.Notifications.push(message.Info)
      }
    })
    .catch((err: AxiosError) => {
      processError(err, message.Error)
      error()
    })
}

function doGet<MyRequest, MyResponse> (
  url: string,
  req: MyRequest,
  message: notification.ReqMessage,
  success: (resp: MyResponse) => void) {
  const api = createAPI(undefined, undefined, true) as AxiosInstance
  api
    .get<MyRequest, AxiosResponse<MyResponse>>(url)
    .then((response: AxiosResponse<MyResponse>) => {
      success(response.data)
      if (message.Info) {
        _notification.Notifications.push(message.Info)
      }
    })
    .catch((err: AxiosError) => {
      processError(err, message.Error)
    })
}

function doGetWithError<MyRequest, MyResponse> (
  url: string,
  req: MyRequest,
  message: notification.ReqMessage,
  success: (resp: MyResponse) => void,
  error: () => void) {
  const api = createAPI(undefined, undefined, true) as AxiosInstance
  api
    .get<MyRequest, AxiosResponse<MyResponse>>(url)
    .then((response: AxiosResponse<MyResponse>) => {
      success(response.data)
      if (message.Info) {
        _notification.Notifications.push(message.Info)
      }
    })
    .catch((err: AxiosError) => {
      processError(err, message.Error)
      error()
    })
}

export {
  doAction,
  doActionWithError,
  doGet,
  doGetWithError
}
