import addUsersToChat from './addUsersToChat'
import '@testing-library/jest-dom'
import store from 'store/Store'
import chatApi from 'api/chatAPI'

describe('addUsersToChat', () => {
  test('should return all chains of addUsersToChat to server ', async () => {
    const mockSendData = {
      users: ['1'],
      chatId: store.getState().currentChatId
    }
    global.prompt = () => mockSendData.users.join(',')
    jest.spyOn(chatApi, 'addUser')
    jest.spyOn(store, 'setState')
    const argsForCall = JSON.stringify(mockSendData)
    await addUsersToChat()
    expect(chatApi.addUser).toHaveBeenCalledWith(argsForCall)
  })
})
