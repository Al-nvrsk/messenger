import Block from 'utils/Block'
import template from 'bundle-text:./tempNavigation.hbs'
import './tempNavigation.css'

interface NavigationProps {
  value: string
  adress: string
}

export default class Navigation extends Block {
  constructor (props: NavigationProps) {
    const onClick = (e: MouseEvent): void => {
      // const router = new Router();
      // router.go(this.props.to);

      e.preventDefault()
    }

    super({ ...props, events: { click: onClick } })
  }

  render (): string {
    // language=hbs
    return template
  }
}
