import React, { Component } from 'react'
import uid from 'uid'
import styled from 'styled-components'

import Todo from './Todo'
import Input from './Input'
import Counter from './Counter'

const Wrapfoot = styled.footer`
  display: flex;
  margin-top: 15px;
  justify-content: center;
`

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-left: 30px;
  padding-right: 30px;
  font-size: ${props => props.font || 28}px;
`

const WrapperProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-right: 30px;
  box-shadow: 3px 3px 10px hotpink;
  border-radius: 20px 4px;
  overflow: hidden;
`

const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 30px;
  width: ${props => props.progress || 0}%;
  background: deeppink;
  border-radius: 20px 4px;
`

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
          <Ul font={28}>{this.renderOpenTodos()}</Ul>
          <Counter num={this.countStuff()} />
          <WrapperProgress>
            <ProgressBar progress={this.getPercent()}>
              {this.getPercent() || 0}%
            </ProgressBar>
          </WrapperProgress>
          <Ul font={28}>{this.renderDoneTodos()}</Ul>
        </section>
        <Wrapfoot>
          <Input handeInput={this.handeInput} />
        </Wrapfoot>
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

  getPercent() {
    return Math.round(
      (this.state.todos.filter(item => item.done).length /
        this.state.todos.length) *
        100
    )
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
