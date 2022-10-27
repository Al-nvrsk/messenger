import userGetController from '../auth/getOwnUserinfo'
import userOperationAPI from '../../api/userAPI'
import store from '../../store/Store'
import submitForm from 'utils/helper/submitForm'
import errorHendlerApi from '../../api/errorHendlerApi'

const changeUserPassword = async (): Promise<void> => {
  const changedPassword = submitForm()
  if (changedPassword) {
    try {
      store.setState('isLoading', true)
      await userOperationAPI.changePassword(JSON.stringify(changedPassword))
        .then(async (res) => await errorHendlerApi(res))
        .then(async () => await userGetController())
    } catch (err) {
      console.log(err)
    }
  }
}

export default changeUserPassword
