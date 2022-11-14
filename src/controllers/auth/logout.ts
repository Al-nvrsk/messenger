import loginApi from 'api/loginAPI'
import { router } from 'router/routerApp'
import store from 'store/Store'

const logout = async (): Promise<void> => {
  await loginApi.logout()
    .then(() => store.setState('isAuth', false))
    .then(() => router.go('/auth'))
}

export default logout
