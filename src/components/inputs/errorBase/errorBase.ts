import Block from 'utils/Block'
import './errorBase.css'

interface errorBaseProps {
  text: string
}

export default class errorBase extends Block<errorBaseProps> {
  static componentName = 'errorBase'
  protected render (): string {
    return `
      <div class = "errorBase" >{{#if text}}{{text}}{{/if}}</div>
  `
  }
}
