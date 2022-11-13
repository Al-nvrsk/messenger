import '@testing-library/jest-dom'
import { getByTestId } from '@testing-library/dom'
import AuthPage from './authPage'
import Block from 'utils/Block'
import registerComponent from 'utils/registerComponent'
import ButtonAccept from 'components/buttons/buttonAccept/buttonAccept'
import store from 'store/Store'

jest.mock('utils/renderDOM')

function renderBlock (Block: Block<Indexed>): void {
  registerComponent(ButtonAccept)
  const el = Block
  document.body.innerHTML = '<div id="app"></div>'
  const root = document.querySelector('#app')
  root!.innerHTML = ''
  root!.appendChild(el.getContent())
};

describe('pages/Authpage', () => {
  it('should render authPageButton element', () => {
    renderBlock(new AuthPage(store))

    expect(getByTestId(document.body, 'authPageButton')).toBeInTheDocument()
  })
})
