import Block from './Block'
import Handlebars, { HelperOptions } from 'handlebars'

interface BlockConstructable<Props = any> {
  new(props: Props): Block
  componentName: string
}

export default function registerComponent<Props extends any> (Component: BlockConstructable<Props>): void {
  Handlebars.registerHelper(Component.componentName || Component.name, function (this: Props, { hash: { ref, ...hash }, data, fn }: HelperOptions) {
    if (!data.root.children) {
      data.root.children = {}
    }

    if (!data.root.refs) {
      data.root.refs = {}
    }

    const { children, refs } = data.root

    const component = new Component(hash)

    children[component.id] = component

    if (ref) {
      refs[ref] = component
    }

    const contents = fn ? fn(this) : ''

    return `<div data-id="${component.id}">${contents}</div>`
  })
}
