import React, { Component } from 'react'
import Todo from './Todo'
import Input from './Input'
import Counter from './Counter'
import './App.css'

class App extends Component {
  state = {
    todos: []
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <h1>ToDo - List</h1>
          <Counter num={this.countStuff()} />
          <ul>{this.renderTodos()}</ul>
        </section>
        <footer>
          <Input handeInput={this.handeInput} />
        </footer>
      </React.Fragment>
    )
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
      { ...todos[keyV], done: !todos[keyV].done },
      ...todos.slice(keyV + 1)
    ]
    this.setState({
      todos: newTodos
    })
  }

  onDelete = keyV => {
    const { todos } = this.state
    const delTodo = [...todos.slice(0, keyV), ...todos.slice(keyV + 1)]
    this.setState({
      todos: delTodo
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
        onDelete={this.onDelete}
      />
    ))
  }

  countStuff() {
    return this.state.todos.filter(item => item.done).length
  }
}

export default App
