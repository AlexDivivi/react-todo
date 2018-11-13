import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return <div style={{ marginTop: '50px' }}>Done: {this.props.num}</div>
  }
}
