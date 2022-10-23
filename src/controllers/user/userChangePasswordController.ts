import userGetController from '../auth/userGetController'
import userOperationAPI from '../../api/user-api'
import store from '../../store/Store'
import submitForm from 'utils/helper/submitForm'
import errorHendlerApi from '../../api/errorHendlerApi'

class UserChangePasswordController {
  public async changePassword (): Promise<any> {
    const changedPassword = submitForm()
    if (changedPassword) {
      try {
        store.setState('isLoading', true)
        await userOperationAPI.changePassword(JSON.stringify(changedPassword))
          .then(async (res) => await errorHendlerApi(res))
          .then(async () => await userGetController.get())
      } catch (err) {
        console.log('Error: ', err.response.response)
        if (err.response.response) {
          alert('new password was saved')
        }
        // console.log(err.response.response)
      }
    }
  }
}
const userChangePasswordController = new UserChangePasswordController()
export default userChangePasswordController
