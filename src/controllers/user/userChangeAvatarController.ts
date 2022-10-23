import userOperationAPI from '../../api/user-api'
import store from '../../store/Store'

class UserChangeAvatarController {
  public async changeAvatar (): Promise<any> {
    const myUserForm = document.getElementById('myUserForm')
    const avatar = document.getElementById('avatar')
    const form = new FormData(myUserForm)
    form.append('avatar', avatar)
    if (avatar) {
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
}

const userChangeAvatarController = new UserChangeAvatarController()

export default userChangeAvatarController
