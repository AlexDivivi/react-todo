import React, { Component } from 'react'
import './Input.css'

export default class Input extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Enter ToDo"
        onKeyUp={evt => {
          this.props.handeInput(evt)
        }}
      />
    )
  }
}
