/*
 * @Author: anne.yang
 * @Date: 2022-08-02 18:02:30
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-08-02 18:47:02
 */
import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" />
                
            </div>
            
        )
    }
}
