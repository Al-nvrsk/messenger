import HTTPTransport from 'utils/HTTPTransport'
import { BaseAPI } from './baseAPI'

const chatAPIInstance = new HTTPTransport()
const url = process.env.URL

class ChatAPI extends BaseAPI {
  async getChats (query: Indexed): Promise<Indexed> {
    return await chatAPIInstance.get(`${url}` + '/chats',
      { data: query })
  }

  async createChats (title: string): Promise<Indexed> {
    return await chatAPIInstance.post(`${url}` + '/chats',
      { data: title, headers: { 'Content-type': 'application/json' } })
  }

  async deleteChat (query: string): Promise<object> {
    return await chatAPIInstance.delete(`${url}` + '/chats',
      { data: query, headers: { 'Content-type': 'application/json' } })
  }

  async addUser (user: string): Promise <Indexed> {
    return await chatAPIInstance.put(`${url}` + '/chats/users',
      { data: user, headers: { 'Content-type': 'application/json' } })
  }

  async getChatUsers (query: Indexed): Promise <Indexed> {
    return await chatAPIInstance.get(`${url}` + `/chats/${query.id}/users`,
      { data: query })
  }

  async deleteUser (query: string): Promise<Indexed> {
    return await chatAPIInstance.delete(`${url}` + '/chats',
      { data: query, headers: { 'Content-type': 'application/json' } })
  }
}

const chatsApi = new ChatAPI()

export default chatsApi
