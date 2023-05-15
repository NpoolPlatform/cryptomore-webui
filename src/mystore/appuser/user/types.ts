import * as doRequest from '../../request'
import * as userbase from './base'

export interface SignupRequest extends doRequest.BaseRequest{
  Account: string;
  PasswordHash: string;
  AccountType: userbase.SignMethodType;
  VerificationCode: string;
  InvitationCode: string;
}

export interface SignupResponse {
  Info: userbase.User
}

export interface LoginRequest extends doRequest.BaseRequest {
  Account: string;
  PasswordHash: string;
  AccountType: userbase.SignMethodType;
  ManMachineSpec: string;
  EnvironmentSpec?: string;
}

export interface LoginResponse {
  Info: userbase.User;
}

export interface LoginVerifyRequest extends doRequest.BaseRequest {
  UserID: string;
  Account: string;
  AccountType: userbase.SignMethodType,
  Token: string;
  VerificationCode: string;
}

export interface LoginVerifyResponse {
  Info: userbase.User;
}

export interface LogoutRequest extends doRequest.BaseRequest {
  Token?: string;
}

export interface LogoutResponse {
  Info: userbase.User;
}

export interface UpdateUserRequest extends doRequest.BaseRequest {
  Account?: string;
  NewAccount?:string;
  AccountType?: userbase.SignMethodType;
  NewAccountType?: userbase.SignMethodType;
  VerificationCode?: string;
  NewVerificationCode?:string;
  EmailAddress?: string;
  PhoneNO?: string;
  Username?: string;
  AddressFields?: string[];
  Gender?: string;
  PostalCode?: string;
  Age?: number;
  Birthday?: number;
  Avatar?: string;
  Organization?: string;
  FirstName?: string;
  LastName?: string;
  IDNumber?: string;
  SigninVerifyType?: userbase.SigninVerifyType;
  PasswordHash?: string;
  OldPasswordHash?:string;
  SigninVerifyByGoogleAuth?: boolean;
  GoogleAuthVerified?: boolean;
  InvitationCodeID?: string;
  InvitationCodeConfirmed?: boolean;
  KolConfirmed?: boolean
}

export interface UpdateUserResponse {
  Info: userbase.User;
}

export interface ResetUserRequest extends doRequest.BaseRequest {
  Account: string
  AccountType: userbase.SignMethodType
  VerificationCode: string
  PasswordHash?: string
  RecoveryCode?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ResetUserResponse {
}

export interface UpdateUserKolRequest extends doRequest.BaseRequest {
  TargetUserID: string
  Kol: boolean
}

export interface UpdateUserKolResponse {
  Info: userbase.User
}

export interface LoginedResponse {
  Info: userbase.User
}
