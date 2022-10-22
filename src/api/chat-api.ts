import HTTPTransport from 'utils/HTTPTransport'
import { BaseAPI } from './base-api'

const chatAPIInstance = new HTTPTransport()
const url = process.env.URL

class ChatAPI extends BaseAPI {
  async getChats (query: object): Promise<object> {
    return await chatAPIInstance.get(`${url}` + '/chats',
      { data: query })
  }

  async createChats (title: string): Promise<object> {
    return await chatAPIInstance.post(`${url}` + '/chats',
      { data: title, headers: { 'Content-type': 'application/json' } })
  }

  async deleteChats (id: string): Promise<object> {
    return await chatAPIInstance.delete(`${url}` + '/chats',
      { data: id, headers: { 'Content-type': 'application/json' } })
  }
}

export default ChatAPI
