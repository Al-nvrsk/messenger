import { router } from 'router/routerApp'
import submitForm from 'utils/helper/submitForm'
import loginApi from 'api/loginAPI'
import store from 'store/Store'
import getOwnUserinfo from './getOwnUserinfo'
import getAllChats from '../chats/getAllChats'

const signInUser = async (): Promise<void> => {
  const userForAuth = submitForm()
  if (userForAuth) {
    try {
      store.setState('isLoading', true)
      await loginApi.auth(JSON.stringify(userForAuth))
        .then(async () => await getOwnUserinfo())
        .then(async () => await getAllChats())
        .then(() => store.setState('isAuth', true))
        .then(() => router.go('/chat'))
        .then(() => store.setState('isLoading', false))
    } catch (error) {
      console.log(error)
    }
  }
}

export default signInUser
