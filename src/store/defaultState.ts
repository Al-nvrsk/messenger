export interface AppState {
  appIsInited: boolean
  isLoading: boolean
  isAuth: boolean
  isModalActive: boolean
  currentChatId: number
  loginFormError: string | null
  user: User | null
  chats: object[] | null
}

export const defaultState: AppState = {
  appIsInited: false,
  isLoading: false,
  isAuth: false,
  currentChatId: 0,
  isModalActive: false,
  loginFormError: null,
  user: null,
  chats: null
}
