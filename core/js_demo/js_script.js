// alert("这是写到JS脚本里的代码")



function varModule() {
    var userName = "千泷";
    var age = 18, temp = 2;
    var info = age + userName;
    var sex1 = Boolean('0'), sex2 = Boolean(2), sex3 = Boolean(0), sex4 = Boolean(null), sex5 = Boolean(undefined), sex6 = Boolean(' ');
    var bool1 = true, bool2 = false;

    document.getElementById("demo").innerHTML = "userName=" + userName;

    console.log(userName, typeof userName);
    console.log(info, typeof info);
    console.log(age + temp, typeof (age + temp))
    console.log(sex1, sex2, sex3, sex4, sex5, sex6);
    console.log(bool1, bool2);
}