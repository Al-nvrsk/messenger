import { router } from '../../index'
import submitForm from 'utils/helper/submitForm'
import loginApi from '../../api/loginAPI'
import store from '../../store/Store'
import userGetController from './getOwnUserinfo'
import chatsGetController from '../chats/getAllChats'
import logout from './logout'

const signInUser = async (): Promise<any> => {
  const userForAuth = submitForm()
  if (userForAuth) {
    try {
      store.setState('isLoading', true)
      await logout()
        .then(async () => await loginApi.auth(JSON.stringify(userForAuth)))
        .then(async () => await userGetController())
        .then(async () => await chatsGetController())
        .then(() => store.setState('isAuth', true))
        .then(() => router.go('/chat'))
        .then(() => store.setState('isLoading', false))
    } catch (error) {
      console.log(error)
    }
  }
}

export default signInUser
