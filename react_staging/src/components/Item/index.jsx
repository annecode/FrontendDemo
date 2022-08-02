/*
 * @Author: anne.yang
 * @Date: 2022-08-02 18:02:45
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-08-02 18:48:00
 */
import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    render() {
        return (
            <div>
                <li>
                    <label>
                        <input type="checkbox" />
                        <span>xxxxx</span>
                    </label>
                    <button className="btn btn-danger" style={{ display: null }}>删除</button>
                </li>
            </div>
        )
    }
}
