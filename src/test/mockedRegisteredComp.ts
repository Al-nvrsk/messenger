import * as components from 'components/index'
import registerComponent from 'utils/registerComponent'

const mockedRegisteredComp = (): void => {
  Object.values(components).forEach((Component: any) => {
    registerComponent(Component)
  })
}

export default mockedRegisteredComp
