import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
  render() {
    const { text, done, keyV, toggleDone, onDelete } = this.props
    return (
      <div>
        <li
          onClick={() => toggleDone(keyV)}
          className={done ? 'linethrough' : ''}
        >
          {text}
        </li>
        <button className="deletebtn" onClick={() => onDelete(keyV)}>
          x
        </button>
      </div>
    )
  }
}
