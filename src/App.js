import React, { Component } from 'react'
import Todo from './Todo'
import Input from './Input'
import './App.css'

class App extends Component {
  state = {
    inpValue: '',
    todos: []
  }

  handeInput = event => {
    if (event.key === 'Enter') {
      const newEntry = [
        { text: event.target.value, done: false },
        ...this.state.todos
      ]
      this.setState({
        todos: newEntry
      })
      event.target.value = ''
    }
  }

  toggleDone = keyV => {
    const { todos } = this.state
    const newTodos = [
      ...todos.slice(0, keyV),
      { ...todos[keyV], done: true },
      ...todos.slice(keyV + 1)
    ]
    this.setState({
      todos: newTodos
    })
  }

  renderTodos() {
    return this.state.todos.map((todo, index) => (
      <Todo
        key={Math.random()}
        keyV={index}
        text={todo.text}
        done={todo.done}
        toggleDone={this.toggleDone}
      />
    ))
  }

  render() {
    return (
      <section>
        <Input handeInput={this.handeInput} />
        <ul>{this.renderTodos()}</ul>
      </section>
    )
  }
}

export default App
