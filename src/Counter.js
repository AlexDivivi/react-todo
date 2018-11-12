import React, { Component } from 'react'
import './Counter.css'

export default class Counter extends Component {
  render() {
    return <div className="Counter">Done: {this.props.num}</div>
  }
}
