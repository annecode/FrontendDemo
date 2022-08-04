/*
 * @Author: anne.yang
 * @Date: 2022-08-04 22:08:31
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-08-04 23:07:24
 */

// 声明一个变量a，同事指定他的类型为number
let a: number;
a = 13;
// a = '1';  // 此行代码会报错，因为a的类型是number，不能赋值字符串

// 声明完变量直接进行赋值
let b: boolean = true;
// 若变量的声明和赋值同时进行，TS可以自动对变量进行类型检测
let c = false;
// c = 123; // 会报错

let d: string;

// 形参类型和返回值类型
function sum(a: number, b: number): number {
    return a + b;
}

let result = sum(123, 456);

// 也可直接使用字面量进行类型声明
let e: 10;
e = 10;

// 使用 | 连接多个类型(联合类型)
let f: "male" | "female";
f = 'female';
// f = true;
// f = 'hello';

// any 表示任意类型，一个变量设置类型未any，相当于对该变量关闭了TS的类型检测
// let g: any;  // 显式any
// 使用TS时，不建议使用any类型；声明变量若不置顶类型，则TS解析会自动判断变量的类型为any（隐私any）
let g;
g = 10;
g = 'hello';
g = true;

// unkown 表示未知类型的值
let h: unknown;
h = 10;
h = 'he';
h = true;

// g的类型是any，它可以复制给任意变量
// h = g;
// unknown 实际上是一个类型安全的any
// unknown 类型的变量，不能直接复制给其他变量
// d = h;

/* 
类型断言，用来告诉解析器变量的实际类型
语法： 
变量 as 类型
<类型> 变量    
*/
d = h as string
d = <string>h

function fn(): string | number {
    // return 123;
    return 'hello';
}

// void 表示空，以函数为例，表示没有返回值的函数
function fn1(): void {
    return undefined;
    // return;
}

// never 表示永远不会返回结果
function fn2(): never {
    throw new Error('报错啦');
}