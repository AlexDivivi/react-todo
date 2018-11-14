import React, { Component } from 'react'
import uid from 'uid'
import styled from 'styled-components'

import Todo from './Todo'
import Input from './Input'
import Counter from './Counter'
import ToggleButton from './ToggleButton'
import Progessbar from './Progressbar'

const Wrapfoot = styled.footer`
  display: flex;
  margin-top: 15px;
  justify-content: center;
`

class App extends Component {
  state = {
    todos: this.load(),
    toggleButton: {
      defaultText: 'Show Done',
      altText: 'Hide Done',
      isDefault: false
    }
  }

  render() {
    this.save()
    const { isDefault } = this.state.toggleButton
    this.doneTodos = this.state.todos.filter(item => item.done).length
    return (
      <React.Fragment>
        <h1>ToDo - List</h1>
        <ul>{this.renderOpenTodos()}</ul>
        <ToggleButton
          data={this.state.toggleButton}
          doClick={this.handleToggleButtonClick}
        />
        {isDefault && (
          <React.Fragment>
            <Counter num={this.countStuff()} />{' '}
            {this.doneTodos > 0 && <Progessbar progress={this.getPercent()} />}
            <ul>{this.renderDoneTodos()}</ul>
          </React.Fragment>
        )}
        <Wrapfoot>
          <Input handeInput={this.handeInput} />
        </Wrapfoot>
      </React.Fragment>
    )
  }

  handleToggleButtonClick = () => {
    const { toggleButton } = this.state
    const newButton = {
      ...toggleButton,
      isDefault: !toggleButton.isDefault
    }

    this.setState({
      toggleButton: newButton
    })
  }

  handeInput = event => {
    if (event.key === 'Enter') {
      const newEntry = [
        { text: event.target.value, done: false, id: uid() },
        ...this.state.todos
      ]
      this.setState({
        todos: newEntry
      })
      event.target.value = ''
    }
  }

  toggleDone = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1)
    ]
    this.setState({
      todos: newTodos
    })
  }

  onDelete = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const delTodo = [...todos.slice(0, index), ...todos.slice(index + 1)]
    this.setState({
      todos: delTodo
    })
  }

  getPercent() {
    return Math.round((this.doneTodos / this.state.todos.length) * 100)
  }

  renderOpenTodos() {
    return this.state.todos.filter(item => !item.done).map(this.renderTodo())
  }

  renderDoneTodos() {
    return this.state.todos.filter(item => item.done).map(this.renderTodo())
  }

  renderTodo() {
    return todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        done={todo.done}
        toggleDone={this.toggleDone}
        onDelete={this.onDelete}
      />
    )
  }

  countStuff() {
    return this.state.todos.filter(item => item.done).length
  }

  save() {
    localStorage.setItem('todo-app--todos', JSON.stringify(this.state.todos))
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('todo-app--todos')) || []
    } catch (err) {
      return []
    }
  }
}

export default App
