import userGetController from '../auth/userGetController'
import userOperationAPI from '../../api/user-api'
import store from '../../store/Store'
import submitForm from 'utils/helper/submitForm'

class UserChangeProfileController {
  public async changeProfile (): Promise<any> {
    const changedProfile = submitForm()
    if (changedProfile) {
      try {
        store.setState('isLoading', true)
        await userOperationAPI.changeProfile(JSON.stringify(changedProfile))
          .then((data: ResponseData) => data.response &&
          store.setState('user', JSON.parse(data.response)))
          .then(async () => await userGetController.get())
      } catch (error) {
        console.log(error)
      }
    }
  }
}
const userChangeProfileController = new UserChangeProfileController()
export default userChangeProfileController
