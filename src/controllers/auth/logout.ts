import loginApi from '../../api/loginAPI'
import { router } from '../../index'
import store from '../../store/Store'

const logout = async (): Promise<void> => {
  await loginApi.logout()
    .then(() => store.setState('isAuth', false))
    .then(() => router.go('/auth'))
}

export default logout
