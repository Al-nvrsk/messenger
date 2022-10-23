import Block from 'utils/Block'
import './inputBase.css'

interface InputBaseProps {

  onBlur?: () => void
  onFocus?: () => void
  onInput?: () => void
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  value?: string
  name: string
  description: string
}

export default class InputBase extends Block {
  static componentName = 'InputBase'
  constructor ({ onBlur, onFocus, onInput, ...props }: InputBaseProps) {
    super({ ...props, events: { focus: onFocus, blur: onBlur, input: onInput } })
  }

  protected render (): string {
    return `
      <input name = "{{name}}" class = "inputBase" type = {{type}} placeholder = "{{placeholder}}" value = "{{value}}" />
    `
  }
}
