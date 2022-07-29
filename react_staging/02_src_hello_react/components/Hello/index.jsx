/*
 * @Author: anne.yang
 * @Date: 2022-07-29 15:58:11
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-07-29 16:24:54
 */
import React, {Component} from "react";
import hello from './index.module.css'

export default class Hello extends Component {
    render() {
        return(
            <h2 className={hello.title}>Hello, React!</h2>
        )
    }
}