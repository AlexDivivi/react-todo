import { configure, addDecorator } from '@storybook/react'
import React from 'react'
import { GlobalStyle } from '../src/GlobalStyle'
import { withKnobs } from '@storybook/addon-knobs'

function loadStories() {
  require('../src/stories')
}
addDecorator(story => (
  <React.Fragment>
    <GlobalStyle />
    {story()}
  </React.Fragment>
))

addDecorator(withKnobs)

configure(loadStories, module)
