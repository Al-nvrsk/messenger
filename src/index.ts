import registerComponent from 'utils/registerComponent'
import { routerApp } from 'router/routerApp'
import './styles/app.css'
import * as components from 'components'

Object.values(components).forEach((Component: any) => {
  registerComponent(Component)
})

routerApp()
