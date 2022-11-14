import deleteUserFromChat from './deleteUserFromChat'
import '@testing-library/jest-dom'
import store from 'store/Store'
import chatApi from 'api/chatAPI'
import getUsersFromChat from './getUsersFromChat'

jest.mock('./getUsersFromChat')

describe('deleteUserFromChat', () => {
  test('should return all chains of deleteUserFromChat to server ', async () => {
    store.setState('currentChatId', 3)
    global.prompt = () => '1'
    const mockedQuery = {
      users: ['1'],
      chatId: store.getState().currentChatId
    }
    jest.spyOn(chatApi, 'deleteUser')
    const argsForCall = JSON.stringify(mockedQuery)
    await deleteUserFromChat()
    expect(chatApi.deleteUser).toHaveBeenCalledWith(argsForCall)
    expect(getUsersFromChat).toHaveBeenCalledTimes(1)
  })
})
