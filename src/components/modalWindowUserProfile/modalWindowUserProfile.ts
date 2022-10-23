import Block from 'utils/Block'
import './modalWindowUserProfile.css'
import validateForm from 'utils/helper/validateForm'
import userProfileForm from '../../data/UserProfileForm'
import type { AppState } from 'store/defaultState'
import { connect } from '../../utils/helper/connect'
import store from '../../store/Store'
import userChangeProfileController from '../../controllers/user/userChangeProfileController'

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
      onSave: async () => await userChangeProfileController.changeProfile()

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
                
                ${this.props.store?.user && (userProfileForm.map(val =>
                  `{{{ ControlledInput name = "${val.name}"
                            onFocus=onFocus
                            onInput=onInput
                            type = "text"
                            value = "${this.props.store.user[val.name]}"
                            placeholder = "${val.name}"
                            description = "${val.description}"
                            label = "${val.description}"
                            ref = "${val.ref}"}}}`)).join(' ')}
                           
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
