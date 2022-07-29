/*
 * @Author: anne.yang
 * @Date: 2022-07-29 11:39:20
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-07-29 16:01:50
 */
// 引入react核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom/client'
// 引入App组件
import App from './App'

// 渲染App到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)