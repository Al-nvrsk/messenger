import HTTPTransport from 'utils/HTTPTransport'
import { BaseAPI } from './baseAPI'

const authAPIInstance = new HTTPTransport()
const url = 'https://ya-praktikum.tech/api/v2'

class UserOperationAPI extends BaseAPI {
  async changeProfile (user: string): Promise<object> {
    return await authAPIInstance.put(`${url}` + '/user/profile',
      { data: user, headers: { 'Content-type': 'application/json' } })
  }

  async changePassword (password: string): Promise<object> {
    return await authAPIInstance.put(`${url}` + '/user/password',
      { data: password, headers: { 'Content-type': 'application/json' } })
  }

  async changeAvatar (form: FormData): Promise<any> {
    return await authAPIInstance.put(`${url}` + '/user/profile/avatar',
      { data: form })
  }
}

const userOperationAPI = new UserOperationAPI()

export default userOperationAPI
