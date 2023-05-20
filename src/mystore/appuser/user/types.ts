import { BaseRequest } from '../../notification'
import * as userbase from './base'
import * as basetypes from '../../basetypes'

export interface SignupRequest extends BaseRequest{
  Account: string;
  PasswordHash: string;
  AccountType: basetypes.SignMethodType;
  VerificationCode: string;
  InvitationCode?: string;
}

export interface SignupResponse {
  Info: userbase.User
}

export interface LoginRequest extends BaseRequest {
  Account: string;
  PasswordHash: string;
  AccountType: basetypes.SignMethodType;
  ManMachineSpec: string;
  EnvironmentSpec?: string;
}

export interface LoginResponse {
  Info: userbase.User;
}

export interface LoginVerifyRequest extends BaseRequest {
  UserID: string;
  Account: string;
  AccountType: basetypes.SignMethodType,
  Token: string;
  VerificationCode: string;
}

export interface LoginVerifyResponse {
  Info: userbase.User;
}

export interface LogoutRequest extends BaseRequest {
  Token?: string;
}

export interface LogoutResponse {
  Info: userbase.User;
}

export interface UpdateUserRequest extends BaseRequest {
  Account?: string;
  NewAccount?:string;
  AccountType?: basetypes.SignMethodType;
  NewAccountType?: basetypes.SignMethodType;
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
  SigninVerifyType?: basetypes.SignMethodType;
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

export interface ResetUserRequest extends BaseRequest {
  Account: string
  AccountType: basetypes.SignMethodType
  VerificationCode: string
  PasswordHash?: string
  RecoveryCode?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ResetUserResponse {
}

export interface UpdateUserKolRequest extends BaseRequest {
  TargetUserID: string
  Kol: boolean
}

export interface UpdateUserKolResponse {
  Info: userbase.User
}

export interface LoginedResponse {
  Info: userbase.User
}
