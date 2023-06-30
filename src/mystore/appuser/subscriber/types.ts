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
  EmailAddress: string
  SubscribeAppID?: string
}

export interface CreateSubscriberResponse {
  Info: Subscriber
}

export interface GetSubscriberesRequest extends BaseRequest {
  Offset: number
  Limit: number
}

export interface GetSubscriberesResponse {
  Infos: Array<Subscriber>
  Total: number
}

export interface DeleteSubscriberRequest extends BaseRequest {
  EmailAddress: string
}

export interface DeleteSubscriberResponse {
  Info: Subscriber
}
