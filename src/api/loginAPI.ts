import { HTTPTransport, headerJson } from 'utils/HTTPTransport'
import { BaseAPI, BASE_URL } from './baseAPI'

const authAPIInstance = new HTTPTransport()
const url = BASE_URL

class LoginAPI extends BaseAPI {
  async create (user: string): Promise<object> {
    return await authAPIInstance.post(`${url}` + '/auth/signup',
      { data: user, headers: headerJson })
  }

  async auth (user: string): Promise<object> {
    return await authAPIInstance.post(`${url}` + '/auth/signin',
      { data: user, headers: headerJson })
  }

  async request (): Promise<object> {
    return await authAPIInstance.get(`${url}` + '/auth/user')
  }

  async logout (): Promise<object> {
    return await authAPIInstance.post(`${url}` + '/auth/logout')
  }
}

const loginApi = new LoginAPI()
export default loginApi
