import loginApi from 'api/loginAPI'
import { router } from '../../index'
import store from 'store/Store'
import submitForm from 'utils/helper/submitForm'

const createUser = async (): Promise<void> => {
  const userForReg = submitForm()
  if (userForReg) {
    try {
      store.setState('isLoading', true)
      await loginApi.create(JSON.stringify(userForReg))
        .then(() => router.go('/auth'))
        .then(() => store.setState('isLoading', false))
    } catch (error) {
      console.log(error)
    }
  }
}

export default createUser
