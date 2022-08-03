/*
 * @Author: anne.yang
 * @Date: 2022-08-02 18:11:21
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-08-03 18:53:06
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  // 对接收的props进行 类型、必要性的限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
  }

  render() {
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo) => {
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          })
        }

      </ul>
    )
  }
}
