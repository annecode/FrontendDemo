/*
 * @Author: anne.yang
 * @Date: 2022-07-29 11:39:07
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-07-29 16:25:43
 */
// 创建“外壳”组件App
import React, {Component} from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome />
            </div>
        )
    }
}
