import Block from '../../utils/Block'

export default class OnboardingPage extends Block {
  render (): string {
    // language=hbs
    return `
    <div class="screen screen_theme_full">
      <div class="screen__content">
        {{{Button text="Logggin"}}}
        <div>
          {{{Link text="Login" to="/login"}}}
          {{{Link text="Sign Up" to="/signup"}}}
        </div>
      </div>
    </div>
    `
  }
}
