/*
 * @Author: anne.yang
 * @Date: 2022-08-02 18:02:45
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-08-03 18:54:43
 */
import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = { mouse: false }  // 标识鼠标移入、移出

    // 鼠标移入、移出的回调
    handleMounse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    // 勾选、取消勾选某个todo的回调
    handleCheck = (id) => {
        return (event) => {
            console.log(id, event.target.checked);
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 删除一个todo的回调
    handleDelete = (id) => {
        // console.log('通知App删除', id);
        if (window.confirm('确定删除吗？')) {
            this.props.deleteTodo(id)
        }
    }



    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? '#bebebe' : 'white' }} onMouseEnter={this.handleMounse(true)} onMouseLeave={this.handleMounse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={event => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
