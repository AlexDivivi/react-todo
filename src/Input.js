import React, { Component } from 'react'

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