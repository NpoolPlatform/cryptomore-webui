import { LocaleMessages, VueMessageType } from 'vue-i18n'
import { ReqMessage } from '../notifications/types'

interface Language {
  ID: string
  Lang: string
  Logo: string
  Name: string
  Short: string
}

interface AppLanguage {
  ID: string
  AppID: string
  LangID: string
}

interface AppLangInfo {
  AppLang: AppLanguage
  Lang: Language
}

interface GetLangsRequest {
  Message: ReqMessage
}

interface GetLangsResponse {
  Infos: Array<AppLangInfo>
}

interface LanguageState {
  Languages: Array<Language>
  Messages?: Map<string, LocaleMessages<VueMessageType>>
  CurLang?: Language
}

export {
  Language,
  AppLangInfo,
  LanguageState,
  GetLangsRequest,
  GetLangsResponse
}
