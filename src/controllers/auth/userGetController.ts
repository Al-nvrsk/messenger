import LoginAPI from '../../api/login-api'
import store from '../../store/Store'

const loginApi = new LoginAPI()

class UserGetController {
  public async get (): Promise<any> {
    try {
      store.setState('isLoading', true)
      await loginApi.request()
        .then((data: ResponseData) => data.response &&
          store.setState('user', JSON.parse(data.response)))
        .then(() => store.setState('isLoading', false))
      console.log(store.getState())
    } catch (error) {
      console.log(error)
    }
  }
}
const userGetController = new UserGetController()
export default userGetController
