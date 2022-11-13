import isEqual from './isEqual'
import Block from '../Block'
import store, { StoreEvents } from 'store/Store'
import type { AppState } from 'store/defaultState'

export function connect (mapStateToProps: (state: AppState | Indexed) => Indexed) {
  return function (Component: typeof Block<Indexed>) {
    return class extends Component {
      constructor (props: Indexed) {
        let state = mapStateToProps(store.getState())
        super({ ...props, ...state })
        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState())
          if (!isEqual(state, newState)) {
            this.setProps({ ...newState })
          }

          state = newState
        })
      }
    }
  }
}
