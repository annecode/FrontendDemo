/*
 * @Author: anne.yang
 * @Date: 2022-08-02 18:11:21
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-08-02 18:47:25
 */
import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    return (
      <ul className="todo-main">
        <Item />
        <Item />
      </ul>
    )
  }
}
