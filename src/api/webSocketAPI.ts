import HTTPTransport from 'utils/HTTPTransport'
import { BaseAPI } from './baseAPI'

const chatAPIInstance = new HTTPTransport()
const url = process.env.URL

class WebSocketAPI extends BaseAPI {
  async getToken (id: string): Promise<Indexed> {
    return await chatAPIInstance.post(`${url}` + `/chats/token/${id}`)
  }
}

const webSocketAPI = new WebSocketAPI()

export default webSocketAPI
