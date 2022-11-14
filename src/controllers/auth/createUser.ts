import loginApi from 'api/loginAPI'
import { router } from 'router/routerApp'
import store from 'store/Store'
import submitForm from 'utils/helper/submitForm'

const createUser = async (): Promise<void> => {
  const userForReg = submitForm()
  if (userForReg) {
    try {
      store.setState('isLoading', true)
      const value = JSON.stringify(userForReg)
      await loginApi.create(value)
        .then(() => router.go('/auth'))
        .then(() => store.setState('isLoading', false))
    } catch (error) {
      console.log(error)
    }
  }
}

export default createUser
