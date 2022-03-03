import { AxiosResponse } from 'axios'
import { api } from 'src/boot/axios'
import { useNotificationStore } from './notifications'
import { ReqMessage } from './notifications/types'

const notification = useNotificationStore()

function doAction<MyRequest, MyResponse> (
  url: string,
  req: MyRequest,
  message: ReqMessage,
  success: (resp: MyResponse) => void) {
  api
    .post<MyRequest, AxiosResponse<MyResponse>>(url, req)
    .then((response: AxiosResponse<MyResponse>) => {
      success(response.data)
      if (message.Info) {
        notification.Notifications.push(message.Info)
      }
    })
    .catch((err: Error) => {
      if (message.Error) {
        message.Error.Description = err.message
        notification.Notifications.push(message.Error)
      }
    })
}

export {
  doAction
}
