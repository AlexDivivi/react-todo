import { configure, addDecorator } from '@storybook/react'
import React from 'react'
import { GlobalStyle } from '../src/GlobalStyle'

function loadStories() {
  require('../src/stories')
}
addDecorator(story => (
  <React.Fragment>
    <GlobalStyle />
    {story()}
  </React.Fragment>
))

configure(loadStories, module)
