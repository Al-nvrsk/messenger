import loginApi from 'api/loginAPI'
import store from 'store/Store'

const getOwnUserinfo = async (): Promise<void> => {
  try {
    store.setState('isLoading', true)
    await loginApi.request()
      .then((data: ResponseData) => data.response &&
          store.setState('user', JSON.parse(data.response)))
      .then(() => store.setState('isLoading', false))
  } catch (error) {
    console.log(error)
  }
}

export default getOwnUserinfo
