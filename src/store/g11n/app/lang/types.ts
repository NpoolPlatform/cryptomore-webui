import { BaseRequest } from 'npool-cli-v4'

export interface Lang {
  ID: string
  AppID: string
  AppName: string
  LangID: string
  Lang: string
  Logo: string
  Name: string
  Short: string
  Main: boolean
  CreatedAt: number
  UpdatedAt: number
}

export interface CreateLangRequest extends BaseRequest {
  TargetAppID: string
  TargetLangID: string
  Main?: boolean
}

export interface CreateLangResponse {
  Info: Lang
}

export interface UpdateLangRequest extends BaseRequest {
  ID: string
  Main: boolean
}

export interface UpdateLangResponse {
  Info: Lang
}

export interface GetLangsRequest extends BaseRequest {
  Offset: number
  Limit: number
}

export interface GetLangsResponse {
  Infos: Array<Lang>
  Total: number
}

export interface GetAppLangsRequest extends BaseRequest {
  TargetAppID: string
  Offset: number
  Limit: number
}

export interface GetAppLangsResponse {
  Infos: Array<Lang>
  Total: number
}

export interface DeleteLangRequest extends BaseRequest {
  ID: string
  TargetAppID: string
}

export interface DeleteLangResponse {
  Info: Lang
}
