import React, { Component } from 'react'
import './Input.css'

export default class Input extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Add ToDo"
        onKeyUp={evt => {
          evt.target.value && this.props.handeInput(evt)
        }}
      />
    )
  }
}
