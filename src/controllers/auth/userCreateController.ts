import LoginAPI from '../../api/login-api'
import { router } from '../../index'
import store from '../../store/Store'

const loginApi = new LoginAPI()
// const userLoginValidator = validateLoginFields(validateRules)

class UserCreateController {
  public async create (data: User): Promise<any> {
    try {
      store.setState('isLoading', true)// Запускаем крутилку
      const userID = loginApi.create(JSON.stringify(data))
      store.setState('user.userID', userID)
      router.go('/chat')

      store.setState('isLoading', false)
      console.log(store.getState())
      // Останавливаем крутилку
    } catch (error) {
      console.log(error)
      // Логика обработки ошибок
    }
  }

  // TODO: create separete controller for Logout
  public async logout (): Promise<void> {
    await loginApi.logout()
      .then(() => store.setState('isAuth', false))
      .then(() => router.go('/auth'))
  }
}

export default UserCreateController
