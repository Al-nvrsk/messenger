import { router } from '../../index'
import submitForm from 'utils/helper/submitForm'
import LoginAPI from '../../api/login-api'
import store from '../../store/Store'
import userGetController from './userGetController'
import chatsGetController from '../chats/chatsGetController'

const loginApi = new LoginAPI()

class UserSignInController {
  public async auth (): Promise<any> {
    const userForAuth = submitForm()
    if (userForAuth) {
      try {
        store.setState('isLoading', true)
        await loginApi.auth(JSON.stringify(userForAuth))
          .then(async () => await userGetController.get())
          .then(async () => await chatsGetController.getChats())
          .then(() => router.go('/chat'))
          .then(() => store.setState('isLoading', false))
          .then(() => store.setState('isAuth', true))
      } catch (error) {
        console.log(error)
      }
    }
  }
}

const userSignInController = new UserSignInController()

export default userSignInController
