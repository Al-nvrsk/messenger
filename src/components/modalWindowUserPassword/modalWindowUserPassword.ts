import Block from 'utils/Block'
import './modalWindowUserPassword.css'
import validateForm from 'utils/helper/validateForm'
import type { AppState } from 'store/defaultState'
import { connect } from '../../utils/helper/connect'
import store from '../../store/Store'
import userChangeProfileController from '../../controllers/user/userChangeProfileController'
import userChangePasswordController from '../../controllers/user/userChangePasswordController'

interface modalWindowType {
  active: boolean
  onWindow: () => void
  onInput: () => void
  onBlur: () => void
  onCancel: () => void
  onSave: () => void
}

class modalWindow extends Block {
  static componentName = 'modalWindow'
  constructor ({ onWindow, onCancel, ...props }: modalWindowType) {
    // super({ active, children, events: { click: onCancel,  } })
    super({
      ...props,
      onInput: (e: Event): void => {
        if (this.refs.errorRef.props.text) {
          const inputEl = e.target as HTMLInputElement
          const errorMessage = validateForm(
            { type: inputEl.name, value: inputEl.value })

          this.refs.errorRef.setProps({ text: errorMessage })
        }
      },
      onBlur: (e: FocusEvent): void => {
        const inputEl = e.target as HTMLInputElement
        const errorMessage = validateForm(
          { type: inputEl.name, value: inputEl.value }
        )

        this.refs.errorRef.setProps({ text: errorMessage })
      },
      onCancel: () => this.props.store.setState('isModelActive', true),
      onSave: async () => await userChangePasswordController.changePassword()

    })
    this.setProps({
      store: store.getState()
    })
  }

  render (): string {
    console.log('modal', this.props)
    return `
    
              <div  class = "modalWindow_contentActive" }>
          <form class = "changeInfoInput">
                
                {{{ ControlledInput name = "oldPassword"
                            onFocus=onFocus
                            onInput=onInput
                            type = "password"
                            value = ""
                            placeholder = oldPassword
                            description = "Input old Password"
                            label = "Input old Password"
                            ref = "oldPasswordRef"}}}

                {{{ ControlledInput name = "newPassword"
                            onFocus=onFocus
                            onInput=onInput
                            type = "password"
                            value = ""
                            placeholder = "newPassword"
                            description = "Input new Password"
                            label = "Input new Password"
                            ref = "newPasswordRef"}}}
          <div class = "changeInfoButton">
        {{{ ButtonAccept value = "Save" type = "button" onClick = onSave }}}
        {{{ ButtonReject value = "Cancel" type = "button" onClick = onCancel }}}
            </div>
          </form>
          
      </div>
    `
  }
}

// function mapStateToProps (state: AppState | Indexed): Indexed {
//   return {
//     user: state.user,
//     isModalActive: state.isModalActive
//   }
// }
// const withStore = connect(mapStateToProps)

export default modalWindow

// <div class = ${this.props.isModalActive ? 'modalWindowActive' : 'modalWindow'}>
//           <div  class = ${this.props.isModalActive ? 'modalWindow_contentActive' : 'modalWindow_content'}>
