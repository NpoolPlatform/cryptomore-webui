import { BaseRequest } from '../../notification'
import * as basetypes from '../../basetypes'

export interface SendCodeRequest extends BaseRequest {
  Account: string;
  AccountType: basetypes.SignMethodType
  UsedFor: basetypes.UsedFor;
  ToUsername: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SendCodeResponse {
}
