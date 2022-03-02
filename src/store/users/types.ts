import { ReqMessage } from '../notifications/types'

interface AppUser {
  ID?: string
  AppID?: string
  EmailAddress?: string
  PhoneNO?: string
  ImportedFromApp?: string
  CreateAt?: number
}

interface AppRole {
  ID: string
  AppID: string
  CreatedBy: string
  Role: string
  Description: string
  Default: boolean
}

interface AppUserExtra {
  ID?: string
  AppID?: string
  UserID?: string
  Username?: string
  FirstName?: string
  LastName?: string
  AddressFields?: Array<string>
  Gender?: string
  PostalCode?: string
  Age?: number
  Birthday?: number
  Avatar?: string
  Organization?: string
}

interface AppUserControl {
  ID?: string
  AppID?: string
  UserID?: string
  SigninVerifyByGoogleAuthentication?: boolean
  GoogleAuthenticationVerified?: boolean
}

interface BanAppUser {
  ID: string
  AppID: string
  UserID: string
  Message: string
}

interface UserInfo {
  User: AppUser
  Extra: AppUserExtra
  Ctrl: AppUserControl
  Ban?: BanAppUser
  Roles?: Array<AppRole>
}

interface UserSignUpRequest {
  PasswordHash: string
  Account: string
  AccountType: string
  VerificationCode: string
  AppID?: string
  InvitationCode: string
  Message: ReqMessage
}

interface UserSignUpResponse {
  Info: AppUser
}

interface UserLoginRequest {
  Account: string
  PasswordHash: string
  AccountType: string
  // google recaptcha response
  ManMachineSpec: string
  Message: ReqMessage
}

interface UserLoginResponse {
  Info: UserInfo
  Token: string
}

interface UserState {
  LoginedUser?: UserInfo
}

export {
  UserInfo,
  UserState,
  UserSignUpRequest,
  UserSignUpResponse,
  UserLoginRequest,
  UserLoginResponse
}
