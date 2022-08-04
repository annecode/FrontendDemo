/*
 * @Author: anne.yang
 * @Date: 2022-08-04 18:11:06
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-08-04 21:53:28
 */
import React, { Component } from 'react';
import axios from 'axios'

export default class App extends Component {

    getStudentData = () => {
        axios.get('http://localhost:5000/students').then(
            response => {console.log('成功了', response.data);},
            error => {console.log('失败了', error);}
        )
        
    }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
      </div>
    )
  }
}
