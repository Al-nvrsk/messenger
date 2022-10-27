import userGetController from '../auth/getOwnUserinfo'
import userOperationAPI from '../../api/userAPI'
import store from '../../store/Store'
import submitForm from 'utils/helper/submitForm'

const changeUserProfile = async (): Promise<void> => {
  const changedProfile = submitForm(true)
  if (changedProfile) {
    try {
      store.setState('isLoading', true)
      await userOperationAPI.changeProfile(JSON.stringify(changedProfile))
        .then((data: ResponseData) => data.response &&
          store.setState('user', JSON.parse(data.response)))
        .then(async () => await userGetController())
    } catch (error) {
      console.log(error)
    }
  }
}

export default changeUserProfile
