export const AppID = '8bff7570-f554-11ed-bf85-8fc53e66d1b4'

const NotSet = 'NOT SET'

const VerificationCodeLength = 6
const MinPasswordLength = 8
const MaxPasswordLength = 32
const SecondsEachDay = 24 * 60 * 60

const InvalidID = '00000000-0000-0000-0000-000000000000'

const GoogleRecaptchaKey = '6Lcg4yIeAAAAANIyLz_mbENlYRSkK1C_aQkejb_4'

enum GoogleTokenType {
  Login = 'login'
}

export {
  NotSet,
  VerificationCodeLength,
  MinPasswordLength,
  MaxPasswordLength,
  InvalidID,
  GoogleRecaptchaKey,
  GoogleTokenType,
  SecondsEachDay
}
