import { IReCaptchaComposition } from 'vue-recaptcha-v3'
import { constants } from '../../const'
import { BaseRequest } from '../notification'

export interface GetGoogleTokenRequest extends BaseRequest {
  Recaptcha: IReCaptchaComposition | undefined
  Req: constants.GoogleTokenType
}

export interface GoogleToken {
  Req: constants.GoogleTokenType
  Token: string
}
