/*
 * @Author: anne.yang
 * @Date: 2022-07-29 11:39:07
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-08-02 18:39:06
 */
// 创建“外壳”组件App
import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css';

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header />
                    <List />
                    <Footer />
                </div>
            </div>
        )
    }
}
