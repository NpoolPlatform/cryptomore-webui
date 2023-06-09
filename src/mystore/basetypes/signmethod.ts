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
export const SignupMethodTypes = [
  SignMethodType.Email,
  SignMethodType.Mobile
]
