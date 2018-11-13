import React, { Component } from 'react'
import styled from 'styled-components'

const WrapTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  border-bottom: 1px dotted lightgrey;

  .linethrough {
    text-decoration: line-through;
  }
`

const Deletebtn = styled.button`
  border: 0;
  background: hotpink;
  height: 25px;
  width: 25px;
  border-radius: 25% 5%;
  font-style: oblique;
  font-size: 20px;
`

export default class Todo extends Component {
  render() {
    const { text, done, id, toggleDone, onDelete } = this.props
    return (
      <WrapTodo>
        <li
          onClick={() => toggleDone(id)}
          className={done ? 'linethrough' : ''}
        >
          {text}
        </li>
        <Deletebtn onClick={() => onDelete(id)}>X</Deletebtn>
      </WrapTodo>
    )
  }
}
