import Block from 'utils/Block'

import './errorBase.css'

interface errorBaseProps {
  text: string
}

export default class errorBase extends Block<errorBaseProps> {
  protected render (): string {
    return `
    <div class = "errorBase" >{{#if text}}{{text}}{{/if}}</div>
  `
  }
}
