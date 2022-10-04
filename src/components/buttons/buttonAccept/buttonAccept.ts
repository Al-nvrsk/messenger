import Block from 'utils/Block'

import './buttonAccept.css'

interface ButtonAcceptProps {

  value: string
  type: string
  onClick: () => void
}

export default class ButtonAccept extends Block {
  constructor ({ value, type, onClick }: ButtonAcceptProps) {
    super({ value, type, events: { click: onClick } })
  }

  protected render (): string {
    return `
    <button type = {{type}} class = "buttonAccept"> {{value}} </button>
    `
  }
}
