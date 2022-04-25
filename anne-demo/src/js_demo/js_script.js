// alert("这是写到JS脚本里的代码")
function varModule() {
    var userName = "千泷";
    var age = 18, temp = 2;
    var info = age + userName;
    var sex1 = Boolean('0'), sex2 = Boolean(2), sex3 = Boolean(0), sex4 = Boolean(null), sex5 = Boolean(undefined), sex6 = Boolean(' ');
    var bool1 = true, bool2 = false;

    console.log(userName, typeof userName);
    console.log(info, typeof info);
    console.log(age + temp, typeof (age + temp));
    console.log(sex1, sex2, sex3, sex4, sex5, sex6);
    console.log(bool1, bool2);

    /***********************************************/
    var x = 3, y = 2;

    document.getElementById("demo1").innerHTML = "x=" + x + ", y=" + y;
    console.log(x, x++, x--);
    console.log(y, ++y, --y);
    console.log(x * y, x + y, x / y, y / x, x % y);
    console.log(x == 3, x == '3', y !== '2', y !== 3);

    /**********************************************/
    var x1 = 0, y1 = 1, z1 = "2";
    console.log(x1 || y1, x1 && y1, !x1, !y1, x1 || y1 && z1);
}

function ifModule(x, y) {
    if (x > y) {
        console.log("x较大");
    }
    else {
        console.log("y较大");
    }
    if (x / y == 1) {
        console.log("x=y");
    } else if (x / y > 1) {
        console.log("x>y");
    }
    else {
        console.log("x<y");
    }
    document.getElementById("demo2").innerHTML = "x=" + x + ", y=" + y;
}

function switchModule() {
    var x;
    var d = new Date().getDay();
    console.log(d);
    switch (d) {
        case 0:
            x = "周日";
            break;
        case 6:
            x = "周六";
            break;
        default:
            x = "期待周末";
            break;
    }
    document.getElementById("demo3").innerHTML = "今天是" + x; // 修改自身元素内容
}

function loopModule() {
    // for循环
    var res = 0;
    for (var n = 1; n <= 10; n++) {
        res += n;
    }
    document.getElementById("demo41").innerHTML = "for循环：1到n总和=" + res;

    // while循环
    res = 0; n -= 1;
    while (n > 0) {
        if (n % 2 == 0) {
            res += n;
        }
        n--;
    }
    document.getElementById("demo42").innerHTML = "while循环：偶数之和=" + res;

    // do-while循环
    res = 0;
    do {
        if (n % 2 == 1) {
            res += n;
        }
        n++;
    }
    while (n < 11);
    document.getElementById("demo43").innerHTML = "do-while循环：奇数之和=" + res;

    // 打印直角三角形
    var str = "";
    for (var x = 0; x < 5; x++) {
        for (var y = 0; y <= x; y++) {
            str = str + "* ";
        }
        str += "\n";
    }
    console.log(str);
}

function arrayModule() {
    var array2 = [2, 3, 1, 5];
    var temp = 0;
    for (var i = 0; i < array2.length; i++) {
        if (temp < array2[i]) {
            temp = array2[i];
        }
    }
    document.getElementById("demo51").innerHTML = "数组中最大为值：" + temp;

    var hege = ["Cecilie", "Lone"];
    var stale = ["Emil", "Tobias", "Linus"];
    var children = ["Cecilie", "Lone"];
    var family = hege.concat(stale, children);
    document.getElementById("demo52").innerHTML = "hege、stale、children数组合并结果为：" + family;

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var res = document.getElementById("demo53").innerHTML = "数组元素拼接成字符串为：" + fruits.join(" | ");
    console.log(typeof res);
    fruits.pop();
    document.getElementById("demo54").innerHTML = "删除数组fruits最后一个元素后：" + fruits;
    fruits.unshift("anne", "baby");
    document.getElementById("demo55").innerHTML = "在数组fruits开头添加2个元素后：" + fruits;
}

// 构造函数方式创建数组，构建新Javascript对象的属性和方法
Array.prototype.arrayCase = function () {
    for (var i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
}

function arrayFunction() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.arrayCase();
    document.getElementById("demo56").innerHTML = "数组元素转换为大写后：" + fruits;
}