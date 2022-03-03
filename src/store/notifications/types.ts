import { Type } from './const'

interface Notification {
  Title?: string
  Message?: string
  Description?: string
  Popup?: boolean
  Type?: Type
}

interface ReqMessage {
  Info?: Notification
  Error?: Notification
}

interface NotificationState {
  Notifications: Array<Notification>
}

export {
  Notification,
  ReqMessage,
  NotificationState
}
