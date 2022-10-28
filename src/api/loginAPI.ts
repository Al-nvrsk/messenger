import HTTPTransport from 'utils/HTTPTransport'
import { BaseAPI } from './baseAPI'

const authAPIInstance = new HTTPTransport()
const url = process.env.URL ?? 'https://ya-praktikum.tech/api/v2'

class LoginAPI extends BaseAPI {
  async create (user: string): Promise<object> {
    return await authAPIInstance.post(`${url}` + '/auth/signup',
      { data: user, headers: { 'Content-type': 'application/json' } })
  }

  async auth (user: string): Promise<object> {
    return await authAPIInstance.post(`${url}` + '/auth/signin',
      { data: user, headers: { 'Content-type': 'application/json' } })
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
