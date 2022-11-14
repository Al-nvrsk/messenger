import deleteChat from './deleteChat'
import '@testing-library/jest-dom'
import store from 'store/Store'
import chatApi from 'api/chatAPI'
import getAllChats from './getAllChats'

jest.mock('./getAllChats')

describe('deleteChat', () => {
  test('should return all chains of deleteChat to server ', async () => {
    global.confirm = () => true
    const mockedChat = {
      chatId: 1
    }
    jest.spyOn(chatApi, 'deleteChat')
    jest.spyOn(store, 'setState')
    const argsForCall = JSON.stringify(mockedChat)
    await deleteChat(mockedChat.chatId)
    expect(chatApi.deleteChat).toHaveBeenCalledWith(argsForCall)
    expect(store.setState).toHaveBeenCalledTimes(2)
    expect(getAllChats).toHaveBeenCalledTimes(1)
  })
})
