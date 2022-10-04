import Block from 'utils/Block'
import validateForm from 'utils/helper/validateForm'
import './controlledInput.css'

interface ControlledInputProps {
  onFocus?: () => void
  onInput?: () => void
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  value?: string
  name: string
  description: string
  label?: string
}

export default class ControlledInput extends Block {
  constructor (props: ControlledInputProps) {
    super({
      error: '',
      inputValue: '',
      ...props,
      onBlur: (e: FocusEvent): void => {
        const inputEl = e.target as HTMLInputElement
        const errorMessage = validateForm(
          { type: inputEl.name, value: inputEl.value }
        )

        this.refs.errorRef.setProps({ text: errorMessage })
        // if (errorMessage) {
        //   this.setProps({
        //     error: errorMessage,
        //     inputValue: inputEl.value
        //   })
        // }
      },
      onInput: (e): void => {
        if (this.refs.errorRef.props.text) {
          const inputEl = e.target as HTMLInputElement
          const errorMessage = validateForm(
            { type: inputEl.name, value: inputEl.value })

          this.refs.errorRef.setProps({ text: errorMessage })
        }
      }
    })
  }

  protected render (): string {
    return `
    <div>
      <div class="controlledInput">
      <div class = "controlledInputLabel">
        {{label}}:
      </div>
        <div class="errorrs">
      {{{errorBase ref="errorRef" text=error}}}
      </div>
      <div class="controlledInputField">
      {{{InputBase 
        name = "${this.props.name}"
        type = "${this.props.type}"
        placeholder = "${this.props.placeholder}"
        onFocus = onFocus
        onInput = onInput
        onBlur = onBlur
        value = "${this.props.inputValue}"
        ref = "{{ref}}"
        
      }}}
      </div>
      <hr class = "controlledInputLine" />
      </div>
      </div>
      `
  }
}
