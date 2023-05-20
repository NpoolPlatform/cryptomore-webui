import { BaseRequest } from '../../../notification'

export interface AppCountry {
  ID: string
  AppID: string
  AppName: string
  CountryID: string
  Country: string
  Flag: string
  Code: string
  Short: string
  CreatedAt: number
  UpdatedAt: number
}

export interface GetAppCountriesRequest extends BaseRequest {
  Offset: number
  Limit: number
}

export interface GetAppCountriesResponse {
  Infos: AppCountry[]
  Total: number
}
