import createNewChat from './createNewChat'
import '@testing-library/jest-dom'
import store from 'store/Store'
import chatApi from 'api/chatAPI'
import getAllChats from './getAllChats'

jest.mock('./getAllChats')

describe('createNewChat', () => {
  test('should return all chains of createNewChat to server ', async () => {
    global.prompt = () => 'newChatName'
    const mockMessage = {
      title: 'newChatName'
    }
    jest.spyOn(chatApi, 'createChats')
    jest.spyOn(store, 'setState')
    const argsForCall = JSON.stringify(mockMessage)
    await createNewChat()
    expect(chatApi.createChats).toHaveBeenCalledWith(argsForCall)
    expect(getAllChats).toHaveBeenCalledTimes(1)
  })
})
