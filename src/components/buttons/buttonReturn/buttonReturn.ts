import Block from 'utils/Block'
import './buttonReturn.css'

interface ButtonReturnProps {

  value: string
  onClick: () => void
}

export default class ButtonReturn extends Block {
  static componentName = 'ButtonReturn'
  constructor ({ value, onClick }: ButtonReturnProps) {
    super({ value, events: { click: onClick } })
  }

  protected render (): string {
    return `
      <button class = "arrowleft"> {{value}} </button>
    `
  }
}
