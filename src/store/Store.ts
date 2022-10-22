import set from 'utils/helper/set'
import EventBus from 'utils/EventBus'
import { defaultState } from './defaultState'

export enum StoreEvents {
  Updated = 'updated',
  Deleted = 'deleted'
}

// export type Dispatch<State> = (
//   nextStateOrAction: Partial<State> | Action<State>,
//   payload?: any,
// ) => void

// export type Action<State> = (
//   dispatch: Dispatch<State>,
//   state: State,
//   payload: any,
// ) => void

class Store extends EventBus {
  private readonly state: Indexed = defaultState

  public getState (): Indexed {
    return this.state
  }

  public setState (path: string, value: unknown): void {
    set(this.state, path, value)
    this.emit(StoreEvents.Updated)
  };
}

export default new Store()
