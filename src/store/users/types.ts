interface UserInfo {
  userId: number
  id: number
  title: string
  body: string
}

interface GetUserResponse {
  Infos: ReadonlyArray<UserInfo>
}

interface UserState {
  Infos: Array<UserInfo>
  loading: boolean
  error: string
}

export { UserInfo, UserState, GetUserResponse }
