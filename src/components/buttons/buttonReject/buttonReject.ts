import Block from 'utils/Block'
import './buttonReject.css'

interface ButtonRejectProps {

  value: string
  type: string
  onClick: () => void
}

export default class ButtonReject extends Block {
  static componentName = 'ButtonReject'
  constructor ({ value, type, onClick }: ButtonRejectProps) {
    super({ value, type, events: { click: onClick } })
  }

  protected render (): string {
    return `
    <button type = {{type}} class = "buttonReject"> {{value}} </button>
    `
  }
}
