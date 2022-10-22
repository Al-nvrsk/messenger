import HTTPTransport from 'utils/HTTPTransport'
import { BaseAPI } from './base-api'

const authAPIInstance = new HTTPTransport()
const url = process.env.URL

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

export default LoginAPI
