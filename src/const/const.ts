export const AppID = '8bff7570-f554-11ed-bf85-8fc53e66d1b4'
export const HashAgeAppID = 'a9bcd598-173d-11ee-8d44-ff0e65081b44'

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

enum ServiceType {
  CryptoPlusService = 'CryptoPlusService',
  CryptoEnterprise = 'CryptoEnterprise',
  MiningStaking = 'MiningStaking'
}

export {
  NotSet,
  VerificationCodeLength,
  MinPasswordLength,
  MaxPasswordLength,
  InvalidID,
  GoogleRecaptchaKey,
  GoogleTokenType,
  SecondsEachDay,
  ServiceType
}
