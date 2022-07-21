/*
 * @Author: anne.yang
 * @Date: 2022-05-29 17:47:11
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-07-21 15:29:47
 */

/* 在ES6中，class (类)作为对象的模板被引入，可以通过 class 关键字定义类；
class 的本质是 function；
它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法。
类不可重复声明；
类定义不会被提升，必须在访问前对类进行定义，否则会报错；
类中方法不需要function关键字；方法间不需要加分号。
*/

// 类用法
// 1、类定义：类表达式可以为匿名或命名
// 1）匿名类
let Example = class {
    constructor(a) {   // 构造器
        this.a = a;
    }
}

// 2）命名类
let Example1 = class Example1 {
    constructor(b) {
        this.b = b;
    }
}

// 2、类声明
class Example2 {
    constructor(c) {
        this.c = c;
    }
}

/* 3、类的主体
属性：prototype
方法定义在pototype上，覆盖方法/十四号时添加方法 */
Example.prototype = {
    //methods
}

// 4、添加方法
Object.assign(Example.prototype, {
    // methods
})

// 5、静态属性：class本身的属性，即直接定义在类内部的属性（Class.propname），不需要实例化。 
// ES6 中规定，Class内部只有静态方法，没有静态属性。
class Example4 {
    // 新提案
    static d = 4;
}
// 目前可行写法
console.log(Example4.d, new Example4);;

// 6、公共属性
class Example5{}
Example5.prototype.a = 6;

// 7、实例属性：定义在实例对象(this)上的属性
class Example6 {
    a = 7;
    constructor() {
        console.log(this.a, this);
    }
}
new Example6();

// 8、name属性：返回跟在class后面的类名（存在时）
let Example7 = class Exam {
    constructor(a) {
        this.a = a;
    }
}
console.log(Example7.name);

// 9、方法：constructor方法是类的默认方法，创建类的实例化对象时被调用
class Example8 {
    constructor() {
        console.log("这是constructor");
    }
}
new Example8();

// 10、返回对象
class Test {
    constructor() {
        // 默认返回实例对象this
    }
}
console.log(new Test() instanceof Test);

// 10、静态方法
class Test1 {
    static sum(a, b) {
        console.log("静态方法的结果：" + a + b);
    }
}
Test1.sum(2, 2);
Test1.sum.call({a:1})  // call可以更改函数里的this指向

// 11、原型方法
class Test2 {
    sum(a, b) {
        console.log("原型方法的结果：" + a + b);
    }
}
let res = new Test2();
res.sum(1, 2);
// console.log(res);

// 12、实例方法
class Test3 {
    constructor() {
        this.sum = (a, b) => {
            console.log("实例方法的结果：" + a + b);
        }
    }
}
// class 的实例化必须通过 new 关键字
new Test3().sum(4, 4);

// 13、实例化对象：共享原型对象
class Test4 {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    sum() {
        return this.a + this.b;
    }
    cf() {
        return this.a * this.b;
    }
}
let res1 = new Test4(4, 4);
let res2 = new Test4(5, 5);
console.log(Object.getPrototypeOf(res1) === Object.getPrototypeOf(res2));

Object.getPrototypeOf(res1).sub1 = function() {
    return this.a - this.b;
}
console.log(res1.sub1());
console.log(res2.sub1());
console.log(Object.getPrototypeOf(res1));

/* decorator装饰器：是个函数，用来修改类的行为，在代码编译时产生作用
// 1、类修饰
// 一个参数：第一个参数target，指向类本身 */
// function testable(target) {
//     target.isTestable = true;
// }
// @testable
// class Example9 {}
// Example9.isTestable;

// // 多个参数——嵌套实现
// function testable1(isTestable) {
//     return function(target) {
//         target.isTestable = isTestable;
//     }
// }
// @testable1(true)
// class Example10 {}
// Example10.isTestable;

// // 2、方法修饰（装饰器部分代码暂时会报错）
// // 3个参数：target(类的原型对象)、name(修饰的属性名)、descriptor(该属性的描述对象)
// // 装饰器执行顺序：由外向内进入，由内向外执行
// class Example11 {
//     @writable
//     sum (a, b) {
//         return a + b;
//     }
// }
// function writable(target, name, descriptor) {
//     descriptor.writable = false;
//     return descriptor;  //必须返回
// }

// class Example11 {
//     @logMethod(1)
//     @logMethod(2)
//     sum(a, b){
//         return a + b;
//     }
// }
// function logMethod(id) {
//     console.log('evaluated logMethod'+id);
//     return (target, name, desctiptor) => console.log('excuted logMethod '+id);
// }
// let res3 = new Example11();
// res3.sum(1, 2);
// evaluated logMethod 1
// evaluated logMethod 2
// excuted logMethod 2s
// excuted logMethod 1


// 封装与继承：getter/setter
class Animal {
    constructor(name, hobby) {
        this.name = name;
        this.hobby = hobby;
    }
    get hobby() {
        console.log("getter");
        return this._hobby;
    }
    set hobby(hobby) {
        console.log("setter");
        this._hobby = hobby;    //私有变量
    }
}
let res5 = new Animal("汤勺", 5);
console.log(res5._hobby);

//异常1：setter中不是私有变量，导致无限递归调用setter
class Person {
    constructor(name, age) {
        this.name = name;   //实例化时调用set方法
        this.age = age;
    }
    get name() {
        console.log("getter");
        return this.name;
    }
    set name(name) {
        console.log("setter");
        this.name = name;  //自身递归调用，非私有变量
    }
}
// let res4 = new Person("tony", "20");   // 不断输出setter, 最终导致RangeError

// 异常2：getter不可单独出现
class Person1 {
    constructor(a) {
        this.a = a;
    }
    get a() {
        return this.a;
    }
}
// let res6 = new Person1(1); // Uncaught TypeError: Cannot set property a of #<Person1> which has only a getter


// 异常3：getter和setter未同级出现，是继承关系
/* tips：
通过extends实现类的继承
子类constructor方法中必须有super，且必须出现在this之前
调用父类构造函数，只能出现在子类的构造函数中
调用父类方法，super作为对象，在普通方法中，指向父类的原型对象，在静态方法中，指向父类
*/
class Father {
    constructor() {}
    get a() {
        return this._a;
    }
}
class Child extends Father {
    constructor() {
        // this.a = a; // 必须先调用super()方法
        super();
    }
    set a(a) {
        this._a = a;
    }
}
let test = new Child();
test.a  = 2;
console.log(test.a);    // undefined

class Father1 {
    // constructor() {}
    test() {
        return 0;
    }
    static test1() {
        return 1;
    }
    // 可以放在父类，也可放在子类
    get a() {
        return this._a;
    }
    set a(a) {
        this._a = a;
    }
}
class Child1  extends Father1 {
    constructor() {
        super();
    }
}
let test1 = new Child1();
test1.a = 1;
console.log(test1.a); // 1

class Child2 extends Father1 {
    constructor() {
        super();
        // 调用父类普通方法
        console.log(super.test());  // super作为对象，在普通方法中，指向父类的原型对象
    }
    static test3() {
        // 调用父类静态方法
        return super.test1() + 2; 
    }
    // test2() {
    //     // super(); // Uncaught SyntaxError: 'super' keyword unexpected
    // }
}
console.log(Child2.test3()); // 3

// 不可继承常规对象
var Father2 = {
    // ...
}
// class Child3 extends Father2 {
//      // ...
// }
// // Uncaught TypeError: Class extends value #<Object> is not a constructor or null
 
// 解决方案
Object.setPrototypeOf(Child2.prototype, Father2);
console.log(Object.getPrototypeOf(Child2));
console.log(Object.getPrototypeOf(Father2));

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    study() {
        // study放在哪里？ ——类的原型对象上，供实例使用
        // 通过People实例调用study时，study中的this就是People实例
        console.log(this);
    }
}

const p1 = new People('tom', 18);
p1.study();  // 通过实例调用study方法
const x = p1.study;
x();    // 直接调用study方法；在class类中的所有自定义方法，会自动在方法局部开启严格模式，默认返回undefined，而不是window