import renderDOM from './utils/renderDOM'
import registerComponent from './utils/registerComponent'
import OnboardingPage from './pages/onboarding/onboarding'
// import { Block, renderDOM, registerComponent }  from './utils/Block';

// import './app.css';
import Block from './utils/Block'

import Button from './components/button/button'
require('@babel/register')
// import Link from './components/link';
// import Input from './components/input';
// import Layout from './components/layout';

registerComponent(Button)
// registerComponent(Link);
// registerComponent(Input);
// registerComponent(Layout);

// TODO: // Добавить MyComponent

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new OnboardingPage())
})
