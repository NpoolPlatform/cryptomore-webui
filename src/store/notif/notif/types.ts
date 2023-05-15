import { NotifChannel, UsedFor } from 'src/store/basetypes'
import { BaseRequest } from 'npool-cli-v4'

export interface Notif {
  ID: string
  AppID: string
  AppName: string
  UserID: string
  EmailAddress: string
  PhoneNO: string
  Username: string
  LangID: string
  Lang: string
  EventType: UsedFor.UsedFor
  UseTemplate: boolean
  Title: string
  Content: string
  Channel: NotifChannel.NotifChannel
  Notified: boolean
  CreatedAt: number
  UpdatedAt: number
}

export interface GetNotifRequest extends BaseRequest {
  ID: string
}

export interface GetNotifResponse {
  Info: Notif
}

export interface UpdateNotifsRequest extends BaseRequest {
  IDs: Array<string>
  Notified: boolean
}

export interface UpdateNotifsResponse {
  Infos: Array<Notif>
}

export interface GetNotifsRequest extends BaseRequest {
  Offset: number
  Limit: number
}

export interface GetNotifsResponse {
  Infos: Array<Notif>
  Total: number
}

export interface GetAppNotifsRequest extends BaseRequest {
  Offset: number
  Limit: number
}

export interface GetAppNotifsResponse {
  Infos: Array<Notif>
  Total: number
}
