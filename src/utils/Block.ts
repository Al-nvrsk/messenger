import EventBus from './EventBus'
import { nanoid } from 'nanoid'
import Handlebars from 'handlebars'

type Events = Values<typeof Block.EVENTS>

export default class Block<P extends Record<string, any>> {
  static componentName: string
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  } as const

  public id = nanoid(6)

  protected _element: Nullable<HTMLElement> = null
  protected readonly props: P
  protected children: { [id: string]: Block<{}> } = {}

  eventBus: () => EventBus<Events>

  protected refs: { [key: string]: HTMLElement & P } = {}

  public constructor (props?: P) {
    const eventBus = new EventBus<Events>()

    this.props = this._makePropsProxy(props ?? {} as P)

    this.eventBus = () => eventBus

    this._registerEvents(eventBus)

    eventBus.emit(Block.EVENTS.INIT, this.props)
  }

  private _registerEvents (eventBus: EventBus<Events>): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _createResources (): void {
    this._element = this._createDocumentElement('div')
  }

  init (): void {
    this._createResources()
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props)
  }

  private _componentDidMount (props: P): void {
    this.componentDidMount(props)
  }

  componentDidMount (_props: P): void {
  }

  private _componentDidUpdate (oldProps: P, newProps: P): void {
    const response = this.componentDidUpdate(oldProps, newProps)
    if (!response) {
      return
    }
    this._render()
  }

  componentDidUpdate (_oldProps: P, _newProps: P): boolean {
    return true
  }

  setProps = (nextProps: P): void => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  get element (): Nullable<HTMLElement> {
    return this._element
  }

  private _render (): void {
    const fragment = this._compile()

    this._removeEvents()
    const newElement = fragment.firstElementChild!

    this._element!.replaceWith(newElement)

    this._element = newElement as HTMLElement
    this._addEvents()
  }

  protected render (): string {
    return ''
  };

  getContent (): HTMLElement {
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      setTimeout(() => {
        if (this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
          this.eventBus().emit(Block.EVENTS.FLOW_CDM)
        }
      }, 100)
    }

    return this.element!
  }

  private _makePropsProxy (props: P): P {
    const self = this

    return new Proxy(props as unknown as object, {
      get (target: Record<string, unknown>, prop: string) {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set (target: Record<string, unknown>, prop: string, value: unknown) {
        target[prop] = value

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target)
        return true
      },
      deleteProperty () {
        throw new Error('Нет доступа')
      }
    }) as unknown as P
  }

  private _createDocumentElement (tagName: string): HTMLElement {
    return document.createElement(tagName)
  }

  private _removeEvents (): void {
    const events: Record<string, () => void> = (this.props).events

    if (!events || (this._element == null)) {
      return
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener)
    })
  }

  private _addEvents (): void {
    const events: Record<string, () => void> = (this.props).events

    if (!events) {
      return
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.addEventListener(event, listener)
    })
  }

  private _compile (): DocumentFragment {
    const fragment = document.createElement('template')

    const template = Handlebars.compile(this.render())
    fragment.innerHTML = template({ ...this.props, children: this.children, refs: this.refs })

    Object.entries(this.children).forEach(([id, component]) => {
      const stub = fragment.content.querySelector(`[data-id="${id}"]`)

      if (stub == null) {
        return
      }

      const stubChilds = stub.childNodes.length ? stub.childNodes : []

      const content = component.getContent()
      stub.replaceWith(content)

      const slotContent = content.querySelector('[data-slot="1"]') as HTMLDivElement

      if (slotContent && stubChilds.length) {
        slotContent.append(...stubChilds)
        delete slotContent.dataset.slot
      }
    })

    return fragment.content
  }

  show (): void {
    this.getContent().style.display = 'block'
  }

  hide (): void {
    this.getContent().style.display = 'none'
  }
}
