/*
 * @Author: anne.yang
 * @Date: 2022-05-28 13:10:18
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-07-27 15:40:23
 */

/* 1、对象字面量
1）属性的简洁表达法
ES6允许对象的属性直接写变量，这时候属性名是变量名，属性值是变量值 */
const age = 12;
const name = "Amy";
const person1 = {age, name};
// const person1 = {age: age, name:name};
console.log(person1);

// 2）方法名简写
const person2 = {
    sayHi() {
        console.log("简写");
    }
    // sayHi: function() {
    //     console.log("另一种写法");
    // }
}
person2.sayHi();

// 3）Generator函数，要在前面加一个星号
const obj = {
    * myGenerator() {
        yield "Generator函数哟";
    }
};
console.log(obj.myGenerator());

/* 4）属性名表达式
ES6允许用表达式作为属性名，但是一定要将表达式放在方括号内；
属性的简洁表示法和属性名表达式不能同时使用，否则会报错 */
const hello = "Hello";
const obj1 = {
    [hello + "1"]: "world",
    [hello]: "world"
};
// const obj2 = {
//     [hello]
// };  //会报错
console.log(obj1);

/* 5）对象的拓展运算符(...)
拓展运算符（...）用于取出参数对象所有可遍历属性然后拷贝到当前对象
(1) 基本用法 */
let info = {name: "amy", "age": 15};
let p1 = {...info};
console.log(p1);

// (2) 合并两个对象:属性名相同，后面属性值会覆盖前面属性值
let age1 = {age: 15, hobby: "eat"};
let name1 = {name: "anne", sex: "女"};
let info1 = {...age1, ...name1};
let info2 = {...age1, ...name1, sex: "男"};
let info3 = {age: 22, ...age1, ...name1};
let info4 = {...{}, age: 10};  //拓展运算符后面是空对象，没有任何效果也不会报错
let info5 = {...null, ...undefined, a: 1}; //拓展运算符后面是null或者undefined，没有效果也不会报错
console.log(info1, info2, info3, info4, info5);

/* 2、对象的新方法
1）Object.assign(target, source_1, ...)
将源对象的所有可枚举属性复制到目标对象中 
tips:  
==>null 和 undefined 不能转化为对象，所以会报错;
==>assign 的属性拷贝是浅拷贝;
*/
let target = {a: 1};
let object1 = {b: 2};
let object2 = {c: 3};
Object.assign(target, object1, object2);
console.log(target);

let sourceObj = {a: {b: 1}, c: 4};
let targetObj = {c: 3};
Object.assign(targetObj, sourceObj);
console.log(targetObj.a.b + " <===> " + sourceObj.a.b);
console.log(targetObj);

// 数组的处理：
// 会将数组处理成对象，先将 [2,3] 转为 {0:2,1:3} ，再进行属性复制
let t = Object.assign([2, 3], [5]);
console.log(t);

/* 2）Object.is(value1, value2)
比较两个值是否严格相等，与（===）基本类似 */
console.log(Object.is("q", "q"));
console.log(Object.is(1, 1));
console.log(Object.is(NaN, NaN)); //与(====)的区别
console.log(Object.is("q", "Q"));
console.log(Object.is([1, 2], [1, 2]));
console.log(Object.is({a: 1}, {a: 1}));
console.log(Object.is(+0, -0)); //与(====)的区别

let a = 'name';
let myObj = {}
myObj[a] = 'tom';
console.log(myObj);