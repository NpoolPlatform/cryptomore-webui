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

interface GetLanguagesRequest {
  Message: ReqMessage
}

interface GetLanguagesResponse {
  Infos: ReadonlyArray<AppLangInfo>
}

interface LanguageState {
  Languages: Map<string, Language>
  Messages?: Map<string, LocaleMessages<VueMessageType>>
  AppLangInfos:Array<AppLangInfo>
  CurLang?: Language
}

export {
  Language,
  GetLanguagesRequest,
  GetLanguagesResponse,
  AppLangInfo,
  LanguageState
}
