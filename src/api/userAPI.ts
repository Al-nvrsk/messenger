import { HTTPTransport, headerJson } from '../utils/HTTPTransport'
import { BaseAPI, BASE_URL } from './baseAPI'

const authAPIInstance = new HTTPTransport()
const url = BASE_URL

class UserOperationAPI extends BaseAPI {
  async changeProfile (user: string): Promise<Indexed> {
    return await authAPIInstance.put(`${url}` + '/user/profile',
      { data: user, headers: headerJson })
  }

  async changePassword (password: string): Promise<Indexed> {
    return await authAPIInstance.put(`${url}` + '/user/password',
      { data: password, headers: headerJson })
  }

  async changeAvatar (form: FormData): Promise<Indexed> {
    return await authAPIInstance.put(`${url}` + '/user/profile/avatar',
      { data: form })
  }
}

const userOperationAPI = new UserOperationAPI()

export default userOperationAPI
