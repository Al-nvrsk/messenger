import { defaultState } from './defaultState'
import store from './Store'

describe('store', () => {
  it('should get state', () => {
    expect(store.getState()).toEqual(defaultState)
  })

  it('should set state', () => {
    store.setState('user.id', 1122)
    expect(store.getState().user.id).toEqual(1122)
  })
})
