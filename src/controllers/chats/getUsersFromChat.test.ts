import getUsersFromChat from './getUsersFromChat'
import '@testing-library/jest-dom'
import store from 'store/Store'
import chatApi from 'api/chatAPI'
import mockedUsers from 'test/mockedUsers'

describe('getUsersFromChat', () => {
  test('should return all chains of getUsersFromChat to server ', async () => {
    const mockQuery = {
      id: 11,
      offset: 3,
      limit: 15,
      name: '',
      email: ''
    }
    jest.spyOn(chatApi, 'getChatUsers')
    jest.spyOn(store, 'setState')
    await getUsersFromChat(mockQuery.id, mockQuery)
    expect(chatApi.getChatUsers).toHaveBeenCalledWith(mockQuery)
    expect(store.setState).toHaveBeenCalledTimes(1)
    expect(store.getState().currentChatUsers).toEqual(mockedUsers)
  })
})
