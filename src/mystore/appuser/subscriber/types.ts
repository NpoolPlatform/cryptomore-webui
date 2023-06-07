import { BaseRequest } from '../../notification'

export interface Subscriber {
  ID: string
  AppID: string
  AppName: string
  EmailAddress: string
  Registered: boolean
  CreatedAt: number
  UpdatedAt: number
}

export interface CreateSubscriberRequest extends BaseRequest {
  AppID: string
  EmailAddress: string
}

export interface CreateSubscriberResponse {
  Info: Subscriber
}

export interface GetSubscriberesRequest extends BaseRequest {
  AppID: string
  Offset: number
  Limit: number
}

export interface GetSubscriberesResponse {
  Infos: Array<Subscriber>
  Total: number
}

export interface DeleteSubscriberRequest extends BaseRequest {
  AppID: string
  EmailAddress: string
}

export interface DeleteSubscriberResponse {
  Info: Subscriber
}
