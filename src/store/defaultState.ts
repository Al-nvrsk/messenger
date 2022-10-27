export interface AppState {
  appIsInited: boolean
  isLoading: boolean
  isAuth: boolean
  isChangeAvatarActive: boolean
  isChangePasswordActive: boolean
  isChangeUserInfoActive: boolean
  currentChatId: number
  currentChatTitle: string
  loginFormError: string | null
  token: any
  currentChatMessages: object[]
  user: {
    id: number | null
  }
  chats: object[] | null
  getState?: () => any
  setState?: () => void
}

export const defaultState: AppState = {
  appIsInited: false,
  isLoading: false,
  isAuth: false,
  currentChatId: 0,
  currentChatTitle: '',
  isChangeAvatarActive: false,
  isChangePasswordActive: false,
  isChangeUserInfoActive: false,
  loginFormError: null,
  token: '',
  currentChatMessages: [],
  user: {
    id: null
  },
  chats: null
}
