import isEqual from './isEqual'

describe('isEqual', () => {
  it('should return true for Obj', () => {
    const firstObj = {
      firstUnit: 'unit',
      firstUser: 'user'
    }
    const secondObj = {
      firstUnit: 'unit',
      firstUser: 'user'
    }

    expect(isEqual(firstObj, secondObj)).toBe(true)
  })

  it('should return false for Obj', () => {
    const firstObj = {
      firstUnit: 'unit',
      firstUser: 'user'
    }
    const secondObj = {
      secondtUnit: 'unit',
      secondUser: 'user'
    }
    expect(isEqual(firstObj, secondObj)).toBe(false)
  })
})
