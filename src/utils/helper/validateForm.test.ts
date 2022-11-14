import validateForm from './validateForm'

describe('validateForm', () => {
  it('should return error for login', () => {
    const mockValue = {
      type: 'login',
      value: 'AA'
    }
    expect(validateForm(mockValue)).toBe('The login have to contein at least 3 letters')
  })
})
