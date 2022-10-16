import Block from 'utils/Block'
import './inputSearch.css'

interface InputSearchProps {
  onChange?: () => void
  type?: string
  placeholder?: string
  value?: string
  error?: string
  name: string
  description?: string
}

export default class InputSearch extends Block {
  static componentName = 'InputSearch'
  constructor ({ onChange = () => {}, type = 'text', error, placeholder, value, name, description }: InputSearchProps) {
    super({ type, placeholder, value, name, error, description, events: { input: onChange } })
  }

  protected render (): string {
    return `
      <div class = "inputAuth">
        <label for = {{name}}>
          <b> {{description}} </b>
        </label>
        <input name = {{name}} type = {{type}} placeholder = {{name}} required />
        <hr> 
      </div>
    `
  }
}
