import * as basetypes from './../../../basetypes'

export interface User {
  ID: string

  AppID: string
  EmailAddress: string
  PhoneNO: string

  ImportedFromAppID: string
  ImportedFromAppName: string
  ImportedFromAppLogo: string
  ImportedFromAppHome: string

  Username: string
  AddressFields: Array<string>
  AddressFieldsString: string
  Gender: string
  PostalCode: string
  Age: number
  Birthday: number
  Avatar: string
  Organization: string
  FirstName: string
  LastName: string
  IDNumber: string

  SigninVerifyType: basetypes.SignMethodType
  SigninVerifyTypeStr: string
  GoogleAuthVerified: boolean
  GoogleAuthVerifiedInt: number
  GoogleSecret: string
  HasGoogleSecret: boolean
  GoogleOTPAuth: string
  SigninVerifyByGoogleAuth: boolean
  SigninVerifyByGoogleAuthInt: number

  ThirdPartyID: string
  ThirdPartyUserID: string
  ThirdPartyUsername: string
  ThirdPartyAvatar: string

  BanAppUserID: string
  Banned: boolean
  BanMessage: string

  Roles: Array<string>

  Logined: boolean
  LoginAccount: string
  LoginAccountType: basetypes.SignMethodType
  LoginToken: string
  LoginClientIP: string
  LoginClientUserAgent: string

  CreatedAt: number

  Kol: boolean
  KolConfirmed: boolean
  InvitationCodeID: string
  InvitationCode: string
  InvitationCodeConfirmed: boolean

  LoginVerified: boolean

  State: basetypes.KYCState
  KycStateStr: string
}
