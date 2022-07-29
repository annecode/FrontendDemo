/*
 * @Author: anne.yang
 * @Date: 2022-07-29 16:10:35
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-07-29 16:27:31
 */

import React, {Component} from "react";
import welcome from './index.module.css'

export default class Welcome extends Component {
    render() {
        return <h2 className={welcome.title}>Welcome</h2>
    }
}