export interface AppState {
  appIsInited: boolean
  isLoading: boolean
  isAuth: boolean
  loginFormError: string | null
  user: User | null
  chats: object[] | null
}

export const defaultState: AppState = {
  appIsInited: false,
  isLoading: false,
  isAuth: false,
  loginFormError: null,
  user: null,
  chats: null
}
