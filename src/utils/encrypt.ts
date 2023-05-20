import { sha256 } from 'js-sha256'

const encryptPassword = (password: string): string => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return sha256(password) as unknown as string
}

export {
  encryptPassword
}
