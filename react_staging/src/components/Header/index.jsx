/*
 * @Author: anne.yang
 * @Date: 2022-08-02 18:02:30
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-08-03 18:03:34
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

    // 对接收的props进行 类型、必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {

        // 解构赋值获取keyCode和target
        const { keyCode, target } = event
        // 未按下回车键，不返回
        if (keyCode !== 13) return
        // 添加的todo名字不能为空,trim()去空格
        if (target.value.trim() === '') {
            alert('输入不能为空')
            return
        }

        // 准备好一个todo对象，nanoid生成uuid
        const todoObj = { id: nanoid(), name: target.value.trim(), done: false }
        this.props.addTodo(todoObj)
        // console.log(target.value, keyCode, event, this.props);
        // 清空输入
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>

        )
    }
}
