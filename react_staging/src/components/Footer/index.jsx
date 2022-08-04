/*
 * @Author: anne.yang
 * @Date: 2022-08-02 18:02:04
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-08-04 14:33:44
 */
import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    // 全选checkbox的回调
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    // 清除已完成回调
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }

    render() {
        const { todos } = this.props
        // 已完成的个数
        const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        // 总数
        const total = todos.length
        // console.log('~~~~~~', doneCount, total);


        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
