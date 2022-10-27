import Block from 'utils/Block'
import './buttonChange.css'

interface ButtonChangeProps {
  value: string
  onClick: () => void
}

export default class ButtonChange extends Block {
  static componentName = 'ButtonChange'
  constructor ({ value, onClick }: ButtonChangeProps) {
    super({ value, events: { click: onClick } })
  }

  protected render (): string {
    return `
      <button class = "buttonChange" type = "button"> {{value}} </button>
    `
  }
}
