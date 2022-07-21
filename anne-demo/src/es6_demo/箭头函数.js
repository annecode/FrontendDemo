/*
 * @Author: anne.yang
 * @Date: 2022-05-28 11:27:16
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-07-21 17:45:24
 */

// 箭头函数基本语法：参数 => 函数体

// 1、基本用法
var f0 = a => a;
/* 等价于
var f = function(a) {
    return a;
} */
console.log("一个参数：" + f0(1));

// 没有参数，或有多个参数，要用()括起来
var f1 = (a, b) => a+b;
var f2 = () => "无参";
console.log("多个参数：" + f1(1, 2));
console.log("无参数：" + f2());

// 函数体有多行语句，用{}包裹起来，表示代码块；只有一行语句，需要返回结果时，可以省略{}，结果会自动返回。
var f3 = (a, b) => {
    let res = a * b;
    return res;
}
console.log("函数体多行语句：" + f3(2, 3));

// 返回对象时，要用()将对象包裹起来，区分代码块
var f4 = (id, name) => ({id: id, name: name});
console.log(f4(1, "anne"));

// 没有 this、super、arguments 和 new.target 绑定;
var f5 = () => {
    // 箭头函数里没有this对象，此时的this对象是外层的this对象，即Window
    console.log("====>" + this);
}
f5();

// 箭头函数体中的 this 对象，是定义函数时的对象，而不是使用函数时的对象；
// 不可以作为构造函数，也就是不能使用 new 命令，否则会报错; 
function f6() {
    // 定义时，this绑定的是f6中的this对象
    console.log("====> f6" + this);
    // debugger;
    setTimeout(() => {
        console.log("====> f6调用", this.ff + this);
    }, 1);
}
var ff = 5;
f6();

var person = {
    'age': 18,
    'sayHello': function() {
        // 此this指向的Person
        console.log(this.age + this);
        // setTimeout是Window对象提供的，故this指向Window，最后才执行
        setTimeout(function () {
            console.log(this.age + this);
        });
    }
}
var age = 20;
person.sayHello();