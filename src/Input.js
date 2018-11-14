import React, { Component } from 'react'
import styled from 'styled-components'

const WrapperInp = styled.input`
  width: 200px;
  padding: 10px 10px;
  font-size: 30px;
  background-color: whitesmoke;
  border: none;
  box-shadow: 3px 3px 10px hotpink;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 20px 4px;

  ::placeholder {
    opacity: 0.4;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 3px 3px orange;
  }
`

export default class Input extends Component {
  render() {
    return (
      <WrapperInp
        type="text"
        placeholder="Add ToDo"
        onKeyUp={evt => {
          evt.target.value && this.props.handeInput(evt)
        }}
      />
    )
  }
}
