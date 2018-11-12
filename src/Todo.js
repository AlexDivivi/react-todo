import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
  render() {
    const { text, done, id, toggleDone, onDelete } = this.props
    return (
      <div className="Todo">
        <li
          onClick={() => toggleDone(id)}
          className={done ? 'linethrough' : ''}
        >
          {text}
        </li>
        <button className="deletebtn" onClick={() => onDelete(id)}>
          X
        </button>
      </div>
    )
  }
}
