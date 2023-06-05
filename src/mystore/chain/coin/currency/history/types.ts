import { BaseRequest } from '../../../../notification'

export interface Currency {
  ID: string
  CoinTypeID: string
  CoinName: string
  CoinLogo: string
  CoinUnit: string
  MarketValueHigh: string
  MarketValueLow: string
  CreatedAt: number
  UpdatedAt: number
}

export interface GetCurrenciesRequest extends BaseRequest {
  CoinNames: Array<string>
  StartAt?: number
  EndAt?: number
  Offset: number
  Limit: number
}

export interface GetCurrenciesResponse {
  Infos: Array<Currency>
  Total: number
}
