import userOperationAPI from '../../api/userAPI'
import store from '../../store/Store'

const changeUserAvatar = async (): Promise<void> => {
  const myUserForm = document.getElementById('myUserForm') as HTMLFormElement
  const form = new FormData(myUserForm)
  if (form) {
    try {
      store.setState('isLoading', true)
      await userOperationAPI.changeAvatar((form))
        .then((data: ResponseData) => data.response &&
        store.setState('user', JSON.parse(data.response)))
      store.setState('isLoading', false)
    } catch (err) {
      console.log('Error: ', err)
    }
  }
}

export default changeUserAvatar
