import * as doRequest from '../../request'
import { UserConsts, UserTypes } from './base'

export interface SignupRequest extends doRequest.BaseRequest{
  Account: string;
  PasswordHash: string;
  AccountType: UserConsts.SignMethodType;
  VerificationCode: string;
  InvitationCode: string;
}

export interface SignupResponse {
  Info: UserTypes.User
}

export interface LoginRequest extends doRequest.BaseRequest {
  Account: string;
  PasswordHash: string;
  AccountType: UserConsts.SignMethodType;
  ManMachineSpec: string;
  EnvironmentSpec?: string;
}

export interface LoginResponse {
  Info: UserTypes.User;
}

export interface LoginVerifyRequest extends doRequest.BaseRequest {
  UserID: string;
  Account: string;
  AccountType: UserConsts.SignMethodType,
  Token: string;
  VerificationCode: string;
}

export interface LoginVerifyResponse {
  Info: UserTypes.User;
}

export interface LogoutRequest extends doRequest.BaseRequest {
  Token?: string;
}

export interface LogoutResponse {
  Info: UserTypes.User;
}

export interface UpdateUserRequest extends doRequest.BaseRequest {
  Account?: string;
  NewAccount?:string;
  AccountType?: UserConsts.SignMethodType;
  NewAccountType?: UserConsts.SignMethodType;
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
  SigninVerifyType?: UserConsts.SigninVerifyType;
  PasswordHash?: string;
  OldPasswordHash?:string;
  SigninVerifyByGoogleAuth?: boolean;
  GoogleAuthVerified?: boolean;
  InvitationCodeID?: string;
  InvitationCodeConfirmed?: boolean;
  KolConfirmed?: boolean
}

export interface UpdateUserResponse {
  Info: UserTypes.User;
}

export interface ResetUserRequest extends doRequest.BaseRequest {
  Account: string
  AccountType: UserConsts.SignMethodType
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
  Info: UserTypes.User
}

export interface LoginedResponse {
  Info: UserTypes.User
}
