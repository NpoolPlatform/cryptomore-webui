export enum SigninVerifyType {
  Mobile = 'Mobile',
  Email = 'Email',
  Google = 'Google'
}

export enum SignMethodType {
  Mobile = 'Mobile',
  Email = 'Email',
  Twitter = 'Twitter',
  Github = 'Github',
  Facebook = 'Facebook',
  Linkedin = 'Linkedin',
  Wechat = 'Wechat',
  Google = 'Google',
  Username = 'Username'
}

export const SignMethodTypes = Object.values(SignMethodType)

export enum KYCState {
  DefaultState = 'DefaultState',
  Approved = 'Approved',
  Reviewing = 'Reviewing',
  Rejected = 'Rejected'
}
