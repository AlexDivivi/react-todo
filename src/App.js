import React, { Component } from 'react'
import uid from 'uid'

import Todo from './Todo'
import Input from './Input'
import Counter from './Counter'
import './App.css'

class App extends Component {
  state = {
    todos: this.load()
  }

  render() {
    this.save()
    return (
      <React.Fragment>
        <section>
          <h1>ToDo - List</h1>
          <ul>{this.renderOpenTodos()}</ul>
          <Counter num={this.countStuff()} />
          <ul>{this.renderDoneTodos()}</ul>
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
