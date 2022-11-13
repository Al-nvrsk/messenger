import set from 'utils/helper/set'
import EventBus from 'utils/EventBus'
import { AppState, defaultState } from './defaultState'

export enum StoreEvents {
  Updated = 'updated',
  Deleted = 'deleted'
}

class Store extends EventBus {
  private readonly state: AppState = defaultState

  public getState (): AppState {
    return this.state
  }

  public setState (path: string, value: unknown): void {
    set(this.state, path, value)
    this.emit(StoreEvents.Updated)
  };
}

export default new Store()
