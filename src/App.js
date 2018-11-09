import React, { Component } from 'react'
import Todo from './Todo'
import './App.css'

class App extends Component {
  state = {
    todos: []
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
        <ul>{this.renderTodos()}</ul>
      </section>
    )
  }
}

export default App
