import isEqual from './isEqual'
import Block from '../Block'
import store, { StoreEvents } from '../../store/Store'
import type { AppState } from 'store/defaultState'

export function connect (mapStateToProps: (state: AppState | Indexed) => Indexed) {
  return function (Component: typeof Block<Indexed>) {
    return class extends Component {
      constructor (props: Indexed) {
        // сохраняем начальное состояние
        let state = mapStateToProps(store.getState())

        super({ ...props, ...state })

        // подписываемся на событие
        store.on(StoreEvents.Updated, () => {
          // при обновлении получаем новое состояние
          const newState = mapStateToProps(store.getState())

          // если что-то из используемых данных поменялось, обновляем компонент
          if (!isEqual(state, newState)) {
            this.setProps({ ...newState })
          }

          // не забываем сохранить новое состояние
          state = newState
        })
      }
    }
  }
}
