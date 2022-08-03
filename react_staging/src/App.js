/*
 * @Author: anne.yang
 * @Date: 2022-07-29 11:39:07
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-08-03 18:52:55
 */
// 创建“外壳”组件App
import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css';

// 创建并暴露App组件
export default class App extends Component {

    // 状态在哪里，操作状态的方法就在哪里
    // 初始化状态
    state = {
        todos: [
            { id: 1, name: "吃饭", done: false },
            { id: 2, name: "睡觉", done: true },
            { id: 3, name: "打豆豆", done: true },
            { id: 4, name: "逛街", done: false },
        ]
    }

    // 添加一个todo，接收的参数是todo对象
    addTodo = (todoObj) => {

        // 获取原todos
        const { todos } = this.state
        // 追加一个todo
        const newTodos = [todoObj, ...todos]
        // 更新状态
        this.setState({ todos: newTodos })
    }

    // 更新一个todo对象
    updateTodo = (id, done) => {
        // 获取状态中的todos
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done }
            else return todoObj
        })
        this.setState({ todos: newTodos })
    }

    // 删除一个todo对象
    deleteTodo = (id) => {
        const { todos } = this.state
        // 删除指定id的todo对象,filter()过滤出满足条件的数组
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        // 更新状态
        this.setState({todos: newTodos})
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer />
                </div>
            </div>
        )
    }
}
