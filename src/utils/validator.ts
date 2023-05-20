export const validateEmail = (email: string) => {
  const reg1 = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
  return reg1.test(email)
}

export const validateVerficationCode = (code: string) => {
  const reg1 = /^[0-9]{6}$/
  return reg1.test(code)
}

export const validatePassword = (password: string) => {
  const reg1 = /^[A-Za-z0-9](?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]){7,31}$/
  return reg1.test(password)
}

export const validatePhoneNO = (phoneNO: string) => {
  const reg1 = /^[0-9]{7,16}$/
  return reg1.test(phoneNO)
}
