import * as basetypes from '../../basetypes'
import { BaseRequest } from '../../notification'

export interface Announcement {
  ID: string
  AppID: string
  AppName: string
  UserID: string
  EmailAddress: string
  PhoneNO: string
  Username: string
  LangID: string
  Lang: string
  Title: string
  Content: string
  Read?: boolean
  Notified?: boolean
  EndAt: number
  Channel: basetypes.NotifChannel
  AnnouncementType: basetypes.AnnouncementType
  CreatedAt: number
  UpdatedAt: number
}

export interface CreateAnnouncementRequest extends BaseRequest {
  TargetLangID: string
  Title: string
  Content: string
  Channel: basetypes.NotifChannel
  EndAt: number
  AnnouncementType: basetypes.AnnouncementType
}

export interface CreateAnnouncementResponse {
  Info: Announcement
}

export interface UpdateAnnouncementRequest extends BaseRequest {
  ID: string
  Title?: string
  Content?: string
  EndAt?: string
  AnnouncementType?: basetypes.AnnouncementType
}

export interface UpdateAnnouncementResponse {
  Info: Announcement
}

export interface GetAnnouncementsRequest extends BaseRequest {
  Offset: number
  Limit: number
}

export interface GetAnnouncementsResponse {
  Infos: Array<Announcement>
  Total: number
}

export interface GetAppAnnouncementsRequest extends BaseRequest {
  Offset: number
  Limit: number
}

export interface GetAppAnnouncementsResponse {
  Infos: Array<Announcement>
  Total: number
}
