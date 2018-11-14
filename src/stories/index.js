import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { text, boolean, number } from '@storybook/addon-knobs'

import Todo from '../Todo'
import Counter from '../Counter'
import Input from '../Input'
import ToggleButton from '../ToggleButton'
import Progressbar from '../Progressbar'

storiesOf('Todo', module)
  .add('with text', () => (
    <ul>
      <Todo
        text={text('Text', 'Hello World')}
        done={boolean('done', false)}
        onDelete={action('delete')}
        toggleDone={action('toggle')}
      />
    </ul>
  ))
  .add('in done state', () => (
    <ul>
      <Todo
        text={text('Text', 'Hello World')}
        done={boolean('done', true)}
        onDelete={action('delete')}
        toggleDone={action('toggle')}
      />
    </ul>
  ))

storiesOf('Counter', module).add('done number', () => (
  <Counter num={number('Done', 8)} />
))

storiesOf('Input', module).add('default state', () => (
  <Input handeInput={action('Entered value')} />
))

storiesOf('ToggleButton', module)
  .add('with default text', () => (
    <ToggleButton
      data={{
        defaultText: 'Show Done',
        altText: 'Hide Done',
        isDefault: false
      }}
      doClick={action('clicked')}
    />
  ))
  .add('with alt text', () => (
    <ToggleButton
      data={{
        defaultText: 'Show Done',
        altText: 'Hide Done',
        isDefault: true
      }}
      doClick={action('clicked')}
    />
  ))

storiesOf('Progressbar', module).add('with 75%', () => (
  <Progressbar progress={number('Percent', 75)} />
))
