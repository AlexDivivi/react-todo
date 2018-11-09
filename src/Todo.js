import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
  render() {
    const { text, done, keyV, toggleDone } = this.props
    return (
      <li
        onClick={() => toggleDone(keyV)}
        className={done ? 'linethrough' : ''}
      >
        {text}
      </li>
    )
  }
}
