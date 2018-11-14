import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'

import Todo from '../Todo'
import Counter from '../Counter'
import Input from '../Input'
import ToggleButton from '../ToggleButton'
import Progressbar from '../Progressbar'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Todo', module)
  .add('with text', () => (
    <ul>
      <Todo
        text="Hello Word"
        done={false}
        onDelete={action('delete')}
        toggleDone={action('toggle')}
      />
    </ul>
  ))
  .add('in done state', () => (
    <ul>
      <Todo
        text="Hello Word"
        done={true}
        onDelete={action('delete')}
        toggleDone={action('toggle')}
      />
    </ul>
  ))

storiesOf('Counter', module).add('done number', () => <Counter num={8} />)

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

storiesOf('Progressbar', module)
  .add('with 0%', () => <Progressbar progress={0} />)
  .add('with 33%', () => <Progressbar progress={33} />)
  .add('with 75%', () => <Progressbar progress={75} />)
  .add('with 100%', () => <Progressbar progress={100} />)
