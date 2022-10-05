import Block from 'utils/Block'
import './tempNavigation.css'

interface NavigationProps {
  value: string
  adress: string
}

export default class Navigation extends Block {
  static componentName = 'Navigation'
  constructor (props: NavigationProps) {
    const onClick = (e: MouseEvent): void => {
      e.preventDefault()
    }

    super({ ...props, events: { click: onClick } })
  }

  render (): string {
    return `
      <a class = "tempNavigation" href = {{adress}}> {{value}} </a>
    `
  }
}
