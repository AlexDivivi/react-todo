import React, { Component } from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  height: 20px;
  width: 110px;
  border-radius: 20px 4px;
  border: 0;
  box-shadow: 3px 3px 10px hotpink;
  background: whitesmoke;
  margin-top: 25px;
`

export default class ToggleButton extends Component {
  render() {
    const { defaultText, altText, isDefault } = this.props.data
    return (
      <Btn onClick={() => this.props.doClick()}>
        {isDefault ? altText : defaultText}
      </Btn>
    )
  }
}
