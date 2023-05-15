import { ReqMessage } from '../../notification'

export interface Message {
  ID: string
  AppName: string
  LangID: string
  Lang: string
  MessageID: string
  Message: string
  GetIndex: number
  Disabled: boolean
  CreatedAt: number
  UpdatedAt: number
}

export interface GetMessagesRequest {
  LangID: string
  Disabled: boolean
  Offset: number
  Limit: number
  NotifyMessage: ReqMessage
}

export interface GetMessagesResponse {
  Infos: Message[]
  Total: number
}
